'use strict';

var mongoose = require('mongoose'),
Depressed = mongoose.model('Depressed');

exports.get_depressed = function(req, res) {
	res.sendFile('../files/test.jpg');
};

exports.get_all_depressed = function(req, res) {
	res.sendFile('../files/test.jpg');
};

exports.post_depressed = function(req, res) {
	res.sendFile('../files/test.jpg');
};