const quests = require('../../data/quests.json');

// Get a random quest
exports.getQuest = (req, res) => {
    const randomIndex = Math.floor(Math.random() * quests.length);
    const randomQuest = quests[randomIndex];
    res.json({ quest: randomQuest });
};
