const backstories = require('../data/backstories.json');

// Controller function to get a random backstory
exports.getBackstory = (req, res) => {
    const randomIndex = Math.floor(Math.random() * backstories.length);
    const randomBackstory = backstories[randomIndex];
    res.json({ backstory: randomBackstory });
};
