const express = require('express');
const router = express.Router();
const optionsController = require('../controllers/optionsController');

router.get('/sayings', optionsController.getSaying);
// router.get('/tasks', optionsController.getTask);
// router.get('/tricks', optionsController.getTrick);
// router.get('/ailments', optionsController.getAilment);
// router.get('/rewards', optionsController.getReward);
// router.get('/encounters', optionsController.getEncounter);

module.exports = router;
