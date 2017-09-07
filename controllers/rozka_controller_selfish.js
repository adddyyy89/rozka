'use strict';

var mongoose = require('mongoose'),
Selfish = mongoose.model('Selfish');

exports.get_selfish = function(req, res) {
	res.sendFile('../files/test.jpg');
};

exports.get_all_selfish = function(req, res) {
	res.sendFile('../files/test.jpg');
};

exports.post_selfish = function(req, res) {
	res.sendFile('../files/test.jpg');
};