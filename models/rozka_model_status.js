'use strict';
// mongoose to intract with mongoDB instance
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var statusSchema = new schema({
	title: String,
	description: String,
	creationdate: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Status', statusSchema);