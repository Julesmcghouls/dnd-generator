const sayings = require('../data/sayings.json');
// const tasks = require('../data/tasks.json');
// const tricks = require('../data/tricks.json');
// const ailments = require('../data/ailments.json');
// const rewards = require('../data/rewards.json');
// const encounters = require('../data/encounters.json');

exports.getSaying = (req, res) => {
    const randomIndex = Math.floor(Math.random() * sayings.length);
    const randomSaying = sayings[randomIndex];
    res.json({ saying: randomSaying });
};

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
