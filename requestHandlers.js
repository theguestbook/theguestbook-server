var postHelper = require("./postHelper");
var commentHelper = require("./commentHelper");

exports.getPosts = function(RouteData) {
    var getPostJSON = JSON.parse(RouteData.postData);
    
    var options = {}; //general options
    options.find = {}; //options pertaining to Model.find()
    options.limit = getPostJSON.amount;
    options.start = getPostJSON.start;

    //get posts from the database via postHelper
    postHelper.getPosts(options, function(err, res) {
        if(err === null) {
            RouteData.response.writeHead(200);
            RouteData.response.write(JSON.stringify(res));
            RouteData.response.end();
        } else {
            RouteData.response.writeHead(500);
            RouteData.response.end();
        }
    });
};

exports.newPost = function(RouteData) {
    var newPostJSON = JSON.parse(RouteData.postData);
    postHelper.newPost(newPostJSON.title, newPostJSON.content, function(err) {
        if(err === null) {
            RouteData.response.writeHead(200);
            RouteData.response.end();
        } else {
            RouteData.response.writeHead(500);
            RouteData.response.write(err);
            RouteData.response.end();
        }
    });
};

exports.getComments = function(RouteData) {
    var commentRequest = JSON.parse(RouteData.postData);
    commentHelper.getComments(commentRequest.parent, function(err, comments) {
        if(err) {
            RouteData.response.writeHead(500);
            RouteData.response.write(err);
            RouteData.response.end();
        } else {
            RouteData.response.writeHead(200);
            RouteData.response.write(JSON.stringify(comments));
            RouteData.response.end();
        }
    });
};

exports.newComment = function(RouteData) {
    var commentSchema = JSON.parse(RouteData.postData);
    commentHelper.newComment(commentSchema.content, commentSchema.parent, function(err) {
        if(err) {
            RouteData.response.writeHead(500);
            RouteData.response.write("Internal Server Error");
            RouteData.response.end();
        } else {
            RouteData.response.writeHead(200);
            RouteData.response.end();
        }
    });
};