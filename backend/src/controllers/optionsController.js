// backend/src/controllers/optionsController.js
const sayings = require('../../data/sayings.json'); // Ensure this file exists

// Controller function to get a random saying
exports.getSaying = (req, res) => {
    const randomIndex = Math.floor(Math.random() * sayings.length);
    const randomSaying = sayings[randomIndex];
    res.json({ saying: randomSaying });
};


// const tasks = require('../data/tasks.json');
// const tricks = require('../data/tricks.json');
// const ailments = require('../data/ailments.json');
// const rewards = require('../data/rewards.json');
// const encounters = require('../data/encounters.json');


// exports.getTask = (req, res) => {
//     const randomIndex = Math.floor(Math.random() * tasks.length);
//     const randomTask = tasks[randomIndex];
//     res.json({ task: randomTask });
// };

// exports.getTrick = (req, res) => {
//     const randomIndex = Math.floor(Math.random() * tricks.length);
//     const randomTrick = tricks[randomIndex];
//     res.json({ trick: randomTrick });
// };

// exports.getAilment = (req, res) => {
//     const randomIndex = Math.floor(Math.random() * ailments.length);
//     const randomAilment = ailments[randomIndex];
//     res.json({ ailment: randomAilment });
// };

// exports.getReward = (req, res) => {
//     const randomIndex = Math.floor(Math.random() * rewards.length);
//     const randomReward = rewards[randomIndex];
//     res.json({ reward: randomReward });
// };

// exports.getEncounter = (req, res) => {
//     const randomIndex = Math.floor(Math.random() * encounters.length);
//     const randomEncounter = encounters[randomIndex];
//     res.json({ encounter: randomEncounter });
// };
