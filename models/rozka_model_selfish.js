'use strict';
// mongoose to intract with mongoDB instance
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var selfishSchema = new schema({
	reason: String,
	description: String,
	comments: String,
	creationdate: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Selfish', selfishSchema);