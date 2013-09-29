var mongoose = require("mongoose");

var postSchema = mongoose.Schema({
    title: String,
    content: String
});


exports.model = mongoose.model('Post', postSchema);