'use strict';
// mongoose to intract with mongoDB instance
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var boredSchema = new schema({
	reason: String,
	rating: { type: Number, default: 2 },
	creationdate: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Bored', boredSchema);