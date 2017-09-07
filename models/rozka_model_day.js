'use strict';
// mongoose to intract with mongoDB instance
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var daySchema = new schema({
	title: String,
	description: String,
	type: { type: String, default: "fine" },
	rating: { type: Number, default: 2 },
	creationdate: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Day', daySchema);