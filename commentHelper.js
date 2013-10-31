var mongoose = require("mongoose");
var Comment = require("./mongoose-models/Comment").model;

exports.getComments = function(parent) {
	var response = {};
	response.comments = [];

	Comment.find({parent: parent}) //find all the coments pertaining to a post
	.exec(function(err, comments) {
		if(err) callback(err);
		else {
			response.comments = comments;
			callback(null, response.comments);
		}
	});
};

exports.newComment = function(content, parent, callback) {
	var commentSchema = {};
	commentSchema.content = content;
	commentSchema.parent = parent;

	var comment = new Comment(commentSchema);
	if(commentSchema.content !== "" && commentSchema.parent !== null) {
		comment.save(function(err, post) {
			if(err) callback(err);
			else {
				console.log("Comment saved to " + comment.parent);
				callback(null);
			}
		});
	}
};