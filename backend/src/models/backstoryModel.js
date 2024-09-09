const backstories = require("../../data/backstories.json");

// get random backstory
module.exports = {
    getRandomBackstory: () => {
        return backstories[Math.floor(Math.random() * backstories.length)];
    }
};
