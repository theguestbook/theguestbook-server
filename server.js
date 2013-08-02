var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
        var postData = "";
		var pathname = url.parse(request.url).pathname; 
        var querystring = url.parse(request.url, true).query;
        
		console.log("Request for " + pathname + " received.");
        
        request.addListener('data', function(data) {
            postData += data;
        });
                        
        request.addListener('end', function() {
           route(handle, pathname, response, request, postData, querystring); 
        });
  	}

  	var app = http.createServer(onRequest);
    app.listen(process.env.PORT || 8888);
    
  	console.log("Server has started.");
}


exports.start = start;