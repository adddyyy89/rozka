'use strict';

var mongoose = require('mongoose'),
Idea = mongoose.model('Idea');

exports.get_idea = function(req, res) {
	res.sendFile('../files/test.jpg');
};

exports.get_all_idea = function(req, res) {
	res.sendFile('../files/test.jpg');
};

exports.post_idea = function(req, res) {
	res.sendFile('../files/test.jpg');
};