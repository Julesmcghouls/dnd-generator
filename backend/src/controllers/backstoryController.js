const backstoryModel = require('../models/backstoryModel');

// controller function to get a random backstory
const getBackstory = (req, res) => {
    const backstory = backstoryModel.getRandomBackstory();
    res.json({ backstory });
};

module.exports = { getBackstory };
