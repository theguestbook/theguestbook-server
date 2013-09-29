var mongoose = require("mongoose");
var Post = require("./mongoose-models/Post").model;

exports.getPosts = function(options, callback) {
    var response = {};
    response.posts = [];
    
    Post.find(options, function(err, posts) {
        if(err === null) {
            response.posts = posts;
            callback(null, response.posts)
        } else {
            callback(err);
        }
    });
};

exports.newPost = function(title, content, callback) {
    var postData = {};
    postData.title = title;
    postData.content = content;
    
    var post = new Post(postData);
    post.save(function(err, post) {
       if(err === null) {
           console.log("Post '" + post.title + "' saved successfully!");
           callback(null);
       } else {
           callback(err);
       }
    });
    
}