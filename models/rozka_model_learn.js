'use strict';
// mongoose to intract with mongoDB instance
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var learnSchema = new schema({
	title: String,
	description: String,
	comments: String,
	helpful: Number,
	creationdate: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Learn', learnSchema);