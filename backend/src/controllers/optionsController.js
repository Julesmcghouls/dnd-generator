const axios = require('axios');

// Controller function to get a random saying
exports.getSaying = async (req, res) => {
    try {
        // Fetch sayings from an external API
        const response = await axios.get('http://localhost:3000/sayings');
        const sayings = response.data;

        // Return a random saying from the fetched data
        const randomIndex = Math.floor(Math.random() * sayings.length);
        const randomSaying = sayings[randomIndex];

        res.json({ saying: randomSaying });
    } catch (error) {
        console.error('Error fetching sayings:', error);
        res.status(500).json({ error: 'Failed to fetch sayings' });
    }
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
