const express = require('express');
const router = express.Router();
const questController = require('../controllers/questController');

// Route for getting a random quest
router.get('/', questController.getQuest);

module.exports = router;
