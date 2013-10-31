var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
	content: String,
	parent: Number
});

exports.model = mongoose.model('Comment', commentSchema);