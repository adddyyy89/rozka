'use strict';
// mongoose to intract with mongoDB instance
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var helpSchema = new schema({
	name: String,
	iscolleague: { type: Boolean },
	reason: String,
	creationdate: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Help', helpSchema);