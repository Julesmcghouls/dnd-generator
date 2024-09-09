const express = require('express');
const router = express.Router();
const { getSaying } = require('../controllers/optionsController'); // Fixed function name

router.get('/sayings', getSaying); // Fixed function name for the route

module.exports = router;

// router.get('/tasks', optionsController.getTask);
// router.get('/tricks', optionsController.getTrick);
// router.get('/ailments', optionsController.getAilment);
// router.get('/rewards', optionsController.getReward);
// router.get('/encounters', optionsController.getEncounter);


