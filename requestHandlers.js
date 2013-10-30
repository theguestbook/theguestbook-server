var postHelper = require("./postHelper");

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