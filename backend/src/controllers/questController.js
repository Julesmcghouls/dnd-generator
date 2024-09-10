const axios = require('axios');

// Controller function to get a random quest
exports.getQuest = async (req, res) => {
    try {
        // Fetch quests from an external API
        const response = await axios.get('http://localhost:3000/quests');
        const quests = response.data;

        // Return a random quest from the fetched data
        const randomIndex = Math.floor(Math.random() * quests.length);
        const randomQuest = quests[randomIndex];

        res.json({ quest: randomQuest });
    } catch (error) {
        console.error('Error fetching quests:', error);
        res.status(500).json({ error: 'Failed to fetch quests' });
    }
};
