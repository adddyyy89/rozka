'use strict';
// mongoose to intract with mongoDB instance
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var ideaSchema = new schema({
	title: String,
	description: String,
	comments: String,
	ideaFrom: String,
	creationdate: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Idea', ideaSchema);