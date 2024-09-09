const express = require('express');
const router = express.Router();
const questController = require('../controllers/questController');

// Route to get a random quest
router.get('/', questController.getQuest);

module.exports = router;
