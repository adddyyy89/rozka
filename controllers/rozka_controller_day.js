'use strict';

var mongoose = require('mongoose'),
Day = mongoose.model('Day');

exports.get_day = function(req, res) {
	res.sendFile('../files/test.jpg');
};

exports.get_all_days = function(req, res) {
	res.sendFile('../files/test.jpg');
};

exports.post_day = function(req, res) {
	res.sendFile('../files/test.jpg');
};