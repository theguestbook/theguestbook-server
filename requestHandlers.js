function start(response) {
	console.log("Request handler 'start' was called.");

	response.writeHead(200, {"Content-Type": "text/plain"}); 
	response.write("Hello, start");
	response.end();
}

function upload(response) {
	console.log("Request handler 'upload' was called."); 

	response.writeHead(200, {"Content-Type": "text/plain"}); 
	response.write("Hello, upload");
	response.end();
}

exports.start = start;
exports.upload = upload;