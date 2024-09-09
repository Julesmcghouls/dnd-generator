const express = require('express');
const router = express.Router();
const backstoryController = require('../controllers/backstoryController');

// Route to get a random backstory
router.get('/', backstoryController.getBackstory);

module.exports = router;
