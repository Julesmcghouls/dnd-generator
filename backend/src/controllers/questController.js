// Controller to handle requests related to quests
const quests = require('../../data/quests.json'); // Import quests data

// Get a random quest
exports.getQuest = (req, res) => {
    const randomIndex = Math.floor(Math.random() * quests.length);
    res.json({ quest: quests[randomIndex] });
};
