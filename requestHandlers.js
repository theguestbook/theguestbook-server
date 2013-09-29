var postHelper = require("./postHelper");

exports.getPosts = function(RouteData) {
    postHelper.getPosts(function(err, res) {
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
            RouteData.response.end();
        }
    });
};