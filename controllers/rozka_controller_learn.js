'use strict';

var mongoose = require('mongoose'),
Learn = mongoose.model('Learn');

exports.get_learning = function(req, res) {
	res.sendFile('../files/test.jpg');
};

exports.get_all_learnings = function(req, res) {
	res.sendFile('../files/test.jpg');
};

exports.post_learning = function(req, res) {
	res.sendFile('../files/test.jpg');
};