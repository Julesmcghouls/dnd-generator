const express = require('express');
const router = express.Router();
const optionsController = require('../controllers/optionsController');

// Route for getting a random saying
router.get('/sayings', optionsController.getSaying);

module.exports = router;





// router.get('/tasks', optionsController.getTask);
// router.get('/tricks', optionsController.getTrick);
// router.get('/ailments', optionsController.getAilment);
// router.get('/rewards', optionsController.getReward);
// router.get('/encounters', optionsController.getEncounter);


