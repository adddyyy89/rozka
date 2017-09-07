'use strict';
module.exports = function(app) {
	var rozkaController = require('../controllers/rozka_controller');
	var boredController = require('../controllers/rozka_controller_bored');
	var dayController = require('../controllers/rozka_controller_day');
	var depressedController = require('../controllers/rozka_controller_depressed');
	var fineController = require('../controllers/rozka_controller_fine');
	var happyController = require('../controllers/rozka_controller_happy');
	var helpController = require('../controllers/rozka_controller_help');
	var ideaController = require('../controllers/rozka_controller_idea');
	var learnController = require('../controllers/rozka_controller_learn');
	var selfishController = require('../controllers/rozka_controller_selfish');
	var statusController = require('../controllers/rozka_controller_status');

	app.route('/test').get(rozkaController.test);

	app.route('/help').get(helpController.get_help).get(helpController.get_all_help).post(helpController.post_help_done);

	app.route('/selfish').get(selfishController.get_selfish).get(selfishController.get_all_selfish).post(selfishController.post_selfish);

	app.route('/learn').get(learnController.get_learning).get(learnController.get_all_learnings).post(learnController.post_learned);

	app.route('/idea').get(ideaController.get_idea).get(ideaController.get_all_idea).post(ideaController.post_idea);

	app.route('/day').get(dayController.get_day).get(dayController.get_all_days).post(dayController.post_day);

	app.route('/status').get(statusController.get_status).get(statusController.get_all_status).post(statusController.post_status);

	app.route('/happy').get(happyController.get_happy).get(happyController.get_all_happy).post(happyController.post_happy);

	app.route('/fine').get(fineController.get_fine).get(fineController.get_all_fine).post(fineController.post_fine);

	app.route('/bored').get(boredController.get_bored).get(boredController.get_all_bored).post(boredController.post_bored);

	app.route('/depressed').get(depressedController.get_depressed).get(depressedController.get_all_depressed).post(depressedController.post_depressed);
};