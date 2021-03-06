define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/meeting/allUsers",
    "title": "Get all user as array",
    "version": "0.0.1",
    "group": "Meeting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " [{\n        \"_id\": \"5cbce6a09314223c381d789d\",\n        \"__v\": 0,\n        \"isAdmin\": false,\n        \"createdOn\": \"2019-04-21T21:54:40.000Z\",\n        \"mobileNumber\": \"(870)-46454834\",\n        \"emailId\": \"adi.sharma@gmail.com\",\n        \"userPassword\": \"$2a$10$X9XUS2U5AjKZiy7YwlbTXuHk2/wJ5eFL9oX7r6VwHSTi5X6tOFs2K\",\n        \"lastName\": \"sharma\",\n        \"firstName\": \"adi\",\n        \"userId\": \"QUzVGFNrh\"\n      }]\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Invalid Or Expired AuthorizationKey\",\n    \"status\": 404,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/meeting.js",
    "groupTitle": "Meeting",
    "name": "GetApiV1MeetingAllusers"
  },
  {
    "type": "get",
    "url": "/api/v1/meeting/:id/deleteEvent",
    "title": "delete event by id",
    "version": "0.0.1",
    "group": "Meeting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of event to be passed in body parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Deleted the event successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5cbf54c9ffc7b81e4ce66370\",\n        \"__v\": 0,\n        \"creatorName\": \"vivek mishra\",\n        \"creatorId\": \"vMRFJ7kBU\",\n        \"userId\": \"QUzVGFNrh\",\n        \"location\": \"Some location\",\n        \"end\": \"2019:05:04T12:00:00\",\n        \"start\": \"2019:05:03T12:00:00\",\n        \"title\": \"some title\",\n        \"id\": \"eBUwJvXcC\"\n    }\n}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"event not found\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/meeting.js",
    "groupTitle": "Meeting",
    "name": "GetApiV1MeetingIdDeleteevent"
  },
  {
    "type": "post",
    "url": "/api/v1/meeting/createEvent",
    "title": "Create meeting",
    "version": "0.0.1",
    "group": "Meeting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the event passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>startDate of the event passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>endDate of the event passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>location of the event passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the event passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "creatorId",
            "description": "<p>creatorId of the event passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "creatorName",
            "description": "<p>creatorName of the event passed as the body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5cbf8c698487a62dbca6c2e4\",\n        \"creatorName\": \"Santanu\",\n        \"creatorId\": \"12sdadfa1\",\n        \"userId\": \"QUzVGFNrh\",\n        \"location\": \"Some location\",\n        \"end\": \"2019:05:04T12:00:00\",\n        \"start\": \"2019:04:04T12:00:00\",\n        \"title\": \"Some Title\",\n        \"id\": \"N09iK2jHU\"\n    }\n    }   \n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t\"error\": true,\n\t\t\"message\": \"Error Occured.,\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/meeting.js",
    "groupTitle": "Meeting",
    "name": "PostApiV1MeetingCreateevent"
  },
  {
    "type": "post",
    "url": "/api/v1/meeting/createEvent",
    "title": "get all meeting of a user",
    "version": "0.0.1",
    "group": "Meeting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the event passed as the body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"All Events Listed\",\n    \"status\": 200,\n    \"data\": []\n    }  \n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t\"error\": true,\n\t\t\"message\": \"Error Occured.,\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/meeting.js",
    "groupTitle": "Meeting",
    "name": "PostApiV1MeetingCreateevent"
  },
  {
    "type": "post",
    "url": "/api/v1/meeting/:id/editEvent",
    "title": "edit meeting",
    "version": "0.0.1",
    "group": "Meeting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the event passed as the path parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the event passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start",
            "description": "<p>startDate of the event passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end",
            "description": "<p>endDate of the event passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>location of the event passed as the body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User details edited\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n} \n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t\"error\": true,\n\t\t\"message\": \"Error Occured.,\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/meeting.js",
    "groupTitle": "Meeting",
    "name": "PostApiV1MeetingIdEditevent"
  },
  {
    "type": "get",
    "url": "/api/v1/users/countryCode",
    "title": "Get country codes",
    "version": "0.0.1",
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"BD\": \"880\",\n    \"BE\": \"32\",\n    \"BF\": \"226\",\n    \"BG\": \"359\",\n    \"BA\": \"387\",\n    \"BB\": \"+1-246\",\n    \"WF\": \"681\",\n    .....\n}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "GetApiV1UsersCountrycode"
  },
  {
    "type": "get",
    "url": "/api/v1/users/countryName",
    "title": "Get country Names",
    "version": "0.0.1",
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"BD\": \"Bangladesh\",\n    \"BE\": \"Belgium\",\n    \"BF\": \"Burkina Faso\",\n    \"BG\": \"Bulgaria\",\n    \"BA\": \"Bosnia and Herzegovina\",\n    .....\n}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "GetApiV1UsersCountryname"
  },
  {
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "login function",
    "version": "0.0.1",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emailId",
            "description": "<p>emailId of the user is passed as body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userPassword",
            "description": "<p>userPassword of the user is passed as body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IkQ5ZG9PanFNciIsImlhdCI6MTU1NjExNDk0MDM2NiwiZXhwIjoxNTU2MjAxMzQwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7ImlzQWRtaW4iOmZNlLCJtb2JpbGVOdW1iZXIiOiI0MzU0MzU0NTM0MyIsImVtYWlsSWQiOiJtaW5pY2FAZ21haWwuY29tIiwibGFzdE5hbWUiOiJtaXNocmEiLCJmaXJzdE5hbWUiOiJtb25pY2EiLCJ1c2VySWQiOiJkWW1XTU5tclMifX0.TihL6E4pbguqfCZ3f8mT0WYkOuUhd9scMDfkKkN376M\",\n        \"userDetails\": {\n            \"isAdmin\": false,\n            \"mobileNumber\": \"43543545343\",\n            \"emailId\": \"asdasd@gmail.com\",\n            \"lastName\": \"asdasd\",\n            \"firstName\": \"asddsaf\",\n            \"userId\": \"dYmWMNmrS\"\n        }\n    }\n}\n}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No User Details Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "logout function",
    "version": "0.0.1",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for removing authToken passed as body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}\n  } \n}\n}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Invalid Or Expired AuthorizationKey\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "type": "post",
    "url": "/api/v1/users/resetNewPassword",
    "title": "resetNewPassword function",
    "version": "0.0.1",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user is passed as body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userPassword",
            "description": "<p>userPassword of the user is passed as body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User password updated\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n  } \n}\n}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No User Details Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersResetnewpassword"
  },
  {
    "type": "post",
    "url": "/api/v1/users/resetPassword",
    "title": "resetPassword mail function",
    "version": "0.0.1",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emailId",
            "description": "<p>emailId of the user is passed as body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Reset mail sent and Auth deleted Successfully\",\n    \"status\": 200,\n    \"data\": null\n}\n}\n}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No User Details Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersResetpassword"
  },
  {
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "Signup function",
    "version": "0.0.1",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user is passed as body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user is passed as body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emailId",
            "description": "<p>emailId of the user is passed as body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phoneNumber of the user is passed as body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userPassword",
            "description": "<p>userPassword of the user is passed as body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5cc06d9514f66619786b86c8\",\n        \"isAdmin\": false,\n        \"createdOn\": \"2019-04-24T14:07:17.000Z\",\n        \"mobileNumber\": \"43543545343\",\n        \"emailId\": \"assddw@gmail.com\",\n        \"lastName\": \"sadasd\",\n        \"firstName\": \"asasd\",\n        \"userId\": \"dYmWMNmrS\"\n    }\n}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Email Does not met the requirement\",\n    \"status\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersSignup"
  }
] });
