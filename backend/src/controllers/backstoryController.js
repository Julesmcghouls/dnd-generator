// Controller to handle requests related to backstories
const backstories = require('../data/backstories.json'); // Import backstories data

// Get a random backstory
exports.getBackstory = (req, res) => {
    const randomIndex = Math.floor(Math.random() * backstories.length);
    res.json({ backstory: backstories[randomIndex] });
};
