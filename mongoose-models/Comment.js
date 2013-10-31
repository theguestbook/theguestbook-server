var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
	content: String,
	parent: ObjectId
});

exports.model = mongoose.model('Comment', commentSchema);