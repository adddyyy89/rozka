'use strict';

var mongoose = require('mongoose'),
rozka = mongoose.model('Rozka');

exports.test = function(req, res) {
	res.sendFile('../files/test.jpg');
};