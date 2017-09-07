'use strict';

var mongoose = require('mongoose'),
Status = mongoose.model('Status');

exports.get_status = function(req, res) {
	res.sendFile('../files/test.jpg');
};

exports.get_all_status = function(req, res) {
	res.sendFile('../files/test.jpg');
};

exports.post_status = function(req, res) {
	res.sendFile('../files/test.jpg');
};