'use strict';

var mongoose = require('mongoose'),
Help = mongoose.model('Help');

exports.get_help = function(req, res) {
	res.sendFile('../files/test.jpg');
};

exports.get_all_help = function(req, res) {
	res.sendFile('../files/test.jpg');
};

exports.post_help = function(req, res) {
	res.sendFile('../files/test.jpg');
};