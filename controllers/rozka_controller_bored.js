'use strict';

var mongoose = require('mongoose'),
Bored = mongoose.model('Bored');

exports.get_bored = function(req, res) {
	res.sendFile('../files/test.jpg');
};

exports.get_all_bored = function(req, res) {
	res.sendFile('../files/test.jpg');
};

exports.post_bored = function(req, res) {
	res.sendFile('../files/test.jpg');
};