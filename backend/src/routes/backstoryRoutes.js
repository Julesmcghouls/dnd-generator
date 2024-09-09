const express = require('express');
const router = express.Router();
const backstoryController = require('../controllers/backstoryController');

// Define route for getting backstories
router.get('/', backstoryController.getBackstory);

module.exports = router;
