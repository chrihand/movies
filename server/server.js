const express = require('express'); // Import express server framework
const path = require('path'); // Import path-module
const mongoose = require('mongoose'); // Import the database handler
const bodyParser = require('body-parser'); // Expose the object/ info in the req.body

const app = express();


const config = require("./config/main.js"); // Import configurations


//make the server use port specified in _config/main.js
app.set('port',config.port);

// Make the server able to listen extract content from POST body, and parse JSON
app.use(bodyParser.urlencoded({ extended: false })); // extended choose between parsing the URL-encoded data with the "querystring" library(false) or the "qs" library(true)
app.use(bodyParser.json()); // returns middleware that only parsers json

// Enable CORS from client-side
app.use(function(req, res, next) {
  const allowedOrigins = ['http://localhost:3000'];  // List of allowed origins/domains
  const origin = req.headers.origin;  // Extract origin/domain from request
  if (allowedOrigins.indexOf(origin) > -1){  // Check if request origin is allowed access
       res.setHeader('Access-Control-Allow-Origin', origin); //set the response request header
  }
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE'); // Tell the client what methods are allowed to use
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Tell the client what header tags are allowed. We only use ‘Content-Type’
  next(); // Call the next function in the callback-stack
});

var router = require('./router.js'); // Import main router with all routes
// Set the server to listen to all the different routes declared in router.js
app.use('/', router);

mongoose.Promise = global.Promise;
// try and connect to the MongodDB specified in the config file
mongoose.connect(config.database, function(err, db){
  if(err){ // if a error occured when trying to connect
    console.log("Something went wrong when trying to connect to the mongoDB server. Error: " + err);
  }
  else {
    // Connected!!!
    console.log('Successfully connected to: ' + config.database);
  }
});

// Start the server, and listen to the specified port.
app.listen(app.get('port'), function() {
  console.log("server is running on port " + app.get('port'));
});
