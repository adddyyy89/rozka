'use strict';

var mongoose = require('mongoose'),
Fine = mongoose.model('Fine');

exports.get_fine = function(req, res) {
	res.sendFile('../files/test.jpg');
};

exports.get_all_fine = function(req, res) {
	res.sendFile('../files/test.jpg');
};

exports.post_fine = function(req, res) {
	res.sendFile('../files/test.jpg');
};