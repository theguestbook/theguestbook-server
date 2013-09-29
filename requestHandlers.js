function start(RouteData) {
	console.log("Request handler 'start' was called....");
	RouteData.response.end();
}

exports.start = start;