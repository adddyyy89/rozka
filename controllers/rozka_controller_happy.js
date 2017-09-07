'use strict';

var mongoose = require('mongoose'),
Happy = mongoose.model('Happy');

exports.get_happy = function(req, res) {
	res.sendFile('../files/test.jpg');
};

exports.get_all_happy = function(req, res) {
	res.sendFile('../files/test.jpg');
};

exports.post_happy = function(req, res) {
	res.sendFile('../files/test.jpg');
};