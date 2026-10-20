/**
 * modules dependencies.
 */
const socketio = require("socket.io");
const mongoose = require("mongoose");
const shortid = require("shortid");
const logger = require("./loggerLib.js");
const events = require("events");
const eventEmitter = new events.EventEmitter();
const moment = require("moment");

const schedule = require('node-schedule');

const nodemailer = require("nodemailer");

const EventModel = mongoose.model("Event");
const AuthModel = mongoose.model("Auth");
const UserModel = mongoose.model("User");

const tokenLib = require("./tokenLib.js");
const check = require("./checkLib.js");
const response = require("./responseLib");

let allEventDetails = [];

let setServer = server => {
  let allOnlineUsers = [];

  let io = socketio.listen(server);

  let myIo = io.of("/");

  myIo.on("connection", socket => {

    socket.on("set-user", authToken => {
      if (socket.userId) {
        socket.emit("auth-error", { error: "Socket is already authenticated" });
        return;
      }
      if (typeof authToken !== "string" || !authToken) {
        socket.emit("auth-error", { error: "Authentication required" });
        socket.disconnect(true);
        return;
      }
      tokenLib.verifyClaimWithoutSecret(authToken, (err, user) => {
        if (err || !user || !user.data || !user.data.userId) {
          socket.emit("auth-error", {
            error: "Invalid authentication token"
          });
          socket.disconnect(true);
          return;
        }

        AuthModel.findOne({ authToken, userId: user.data.userId }, (authError, authDetails) => {
          if (authError || !authDetails) {
            socket.emit("auth-error", { error: "Invalid authentication token" });
            socket.disconnect(true);
            return;
          }
          socket.userId = user.data.userId;
          socket.join(socket.userId);
          socket.emit("authenticated");
        });
      });
    });

    socket.on("event-occured", (data) => {
      if (!socket.userId || !data || typeof data !== "object" || Array.isArray(data) || data.creatorId !== socket.userId ||
          typeof data.createdForId !== "string" || data.createdForId.length > 100 ||
          typeof data.eventTitle !== "string" || !data.eventTitle.trim() || data.eventTitle.length > 200 ||
          !["created", "Updated", "deleted"].includes(data.actionPerformed)) {
        socket.emit("auth-error", { error: "Not authorized to publish this event" });
        return;
      }

      const eventStart = data.eventStart == null ? null : new Date(data.eventStart);
      if (eventStart && !Number.isFinite(eventStart.getTime())) {
        socket.emit("auth-error", { error: "Invalid event date" });
        return;
      }
      const eventData = {
        eventTitle: data.eventTitle.trim(),
        creatorId: socket.userId,
        createdForId: data.createdForId,
        actionPerformed: data.actionPerformed,
        eventStart: eventStart ? eventStart.toISOString() : null
      };

      UserModel.findOne({ userId: socket.userId }, (actorError, actor) => {
        if (actorError || !actor || !actor.isAdmin) {
          socket.emit("auth-error", { error: "Only administrators may publish meeting events" });
          return;
        }
        UserModel.findOne({ userId: data.createdForId }, (userError, recipient) => {
          if (userError || !recipient) {
          return;
          }
          eventData.creatorName = actor.firstName;
          eventData.creatorForEmail = recipient.emailId;
          eventData.createdForName = recipient.firstName;

          setTimeout(function () {
        if (eventData.eventStart !== null) {
          eventEmitter.emit('sendAlertMail', eventData);
        }

      }, 2000)
          myIo.to(eventData.createdForId).emit(eventData.createdForId, eventData);
          if (eventStart && eventStart > new Date()) {
            let scheduleTime = moment(eventStart).subtract(1, 'm').toDate();
            schedule.scheduleJob(scheduleTime, function () {
              eventEmitter.emit('alert-user-for-upcomming-event', eventData);
              myIo.to(eventData.createdForId).emit('alert-user-for-upcomming-meeting', eventData);
            });
          }
        });
      });

    }); // end of event occured 


    // disconnect event
    socket.on('disconnect', () => {
      // disconnect the user from socket
      // console.log(socket.connectorName);

      var removeIndex = allOnlineUsers.map(function (user) {
        return user.userId;
      }).indexOf(socket.userId);
      allOnlineUsers.splice(removeIndex, 1)
    }) // end of on disconnect
  });
};
// end of setServer block

eventEmitter.on('alert-user-for-upcomming-event', (data) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  var mailOptions = {
    from: `"Meeting Planner Admin" <${process.env.SMTP_USER}>`,
    to: data.creatorForEmail,
    subject: `Reminder : Meeting Scheduled in 1 minute`,
    text: `Dear ${data.createdForName},

You have an meeting with title "${data.eventTitle}" occuring in 1 minute. 
Please join the meeting.

Regards,
Meeting Planner App Team`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      logger.error('Operation failed', 'ApplicationOperation', 10)
      logger.error('Operation failed', 'ApplicationOperation', 10)
    } else {
    }
  });
})


eventEmitter.on('sendAlertMail', (data) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  var mailOptions = {
    from: `"Meeting Planner Admin" <${process.env.SMTP_USER}>`,
    to: data.creatorForEmail,
    subject: `Event ${data.actionPerformed}`,
    text: `Dear ${data.createdForName},
    
An event with title "${data.eventTitle}" has been ${data.actionPerformed} by ${data.creatorName} for you.
Login to the Meeting Planner app to view details.


Regards,
Meeting Planner App Team`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      logger.error('Operation failed', 'ApplicationOperation', 10)
      logger.error('Operation failed', 'ApplicationOperation', 10)
    } else {
    }
  });
});




module.exports = {
  setServer: setServer
};
