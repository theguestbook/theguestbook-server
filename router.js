var static = require("node-static");
var fileServer = new(static.Server)('./public');

function route(handle, pathname, response, request, postData, querystring) { 
	console.log("About to route a request for " + pathname); 
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response, postData, querystring); 
	} else {
        console.log("Loading page");
        fileServer.serve(request, response, function(err, result) {
            if(err) {
                    console.log("Error serving page");
                    response.end();
            }
        });
	}	
}

exports.route = route;