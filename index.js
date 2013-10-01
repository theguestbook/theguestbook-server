//dependecies
var mongoose = require("mongoose");

//import other files
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var host = require("./mongoose-models/conf").host; //contains username and password for remote server; added to gitignore.

var handlers={};
handlers["/"]="index.html";
handlers["/getPosts"]=requestHandlers.getPosts;
handlers["/newPost"] = requestHandlers.newPost;

//connect to the database
mongoose.connect(host); //as specified in the hidden conf file
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', console.log.bind(console, 'connected successfully!'));

//start the server
server.start(router.route, handlers);