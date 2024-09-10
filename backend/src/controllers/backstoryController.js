const axios = require('axios');

// Controller function to get a random backstory
exports.getBackstory = async (req, res) => {
    try {
        // Fetch backstories from an external API
        const response = await axios.get('http://localhost:3000/backstories');
        const backstories = response.data;

        // Return a random backstory from the fetched data
        const randomIndex = Math.floor(Math.random() * backstories.length);
        const randomBackstory = backstories[randomIndex];

        res.json({ backstory: randomBackstory });
    } catch (error) {
        console.error('Error fetching backstories:', error);
        res.status(500).json({ error: 'Failed to fetch backstories' });
    }
};
