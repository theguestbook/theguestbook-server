var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
	content: String,
	parent: String
});

exports.model = mongoose.model('Comment', commentSchema);