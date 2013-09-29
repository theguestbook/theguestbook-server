//dependecies
var mongoose = require("mongoose");

//import other files
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handlers={};
handlers["/"]="index.html";
handlers["/getPosts"]=requestHandlers.getPosts;
handlers["/newPost"] = requestHandlers.newPost;

//connect to the database
var user = "admin";
var password = "better2gether";
mongoose.connect('mongodb://' + user + ':' + password + '@ds047478.mongolab.com:47478/theguestbook');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', console.log.bind(console, 'connected successfully!'));

//start the server
server.start(router.route, handlers);