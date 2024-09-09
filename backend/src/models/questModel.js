const quests = require('../../data/quests.json');

// get random quest
module.exports = {
    getRandomQuest: () => {
        return quests[Math.floor(Math.random() * quests.length)];
    }
};
