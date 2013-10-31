var mongoose = require("mongoose");
var Post = require("./mongoose-models/Post").model;

exports.getPosts = function(options, callback) {
    var response = {}; //contains information about the response
    response.posts = []; //the actual posts

    Post.find(options.find).sort("-_id") //sort by latest
    .skip(options.start).limit(options.limit).exec(function(err, posts) {
        if (err === null) {
            response.posts = posts;
            callback(null, response.posts);
        }
        else {
            callback(err);
        }
    });
};

exports.newPost = function(title, content, callback) {
    var postData = {};
    postData.title = title;
    postData.content = content;

    var post = new Post(postData);
    if (postData.title !== "" && postData.content !== "") {
        post.save(function(err, post) {
            if (err === null) {
                console.log("Post '" + post.title + "' saved successfully!");
                callback(null);
            }
            else {
                callback(err);
            }
        });
    } else {
        var err = "Bad POST data"
        console.log(err);
        callback(err);
    }
};