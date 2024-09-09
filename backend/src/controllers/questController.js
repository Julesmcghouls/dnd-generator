const questModel = require('../models/questModel');

// controller function to get random quest
const getQuest = (req, res) => {
    const quest = questModel.getRandomQuest();
    res.json({ quest });
};

module.exports = { getQuest };
