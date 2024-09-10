const express = require('express');
const cors = require('cors'); // Import CORS middleware
const app = express();

// Import routes
const optionsRouter = require('./routes/optionsRoutes');
const backstoryRoutes = require('./routes/backstoryRoutes');
const questRoutes = require('./routes/questRoutes');

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors()); // Use CORS middleware

// Use routes
app.use('/api/options', optionsRouter);
app.use('/api/backstory', backstoryRoutes);
app.use('/api/quest', questRoutes);

// Default route for root URL
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the D&D Generator API!</h1>
        <p>This API provides random quests, sayings, and backstories for Dungeons & Dragons.</p>
        <h2>Available Endpoints:</h2>
        <ul>
            <li><strong>GET /api/options/sayings</strong> - Get a random saying</li>
            <li><strong>GET /api/backstory</strong> - Get a random backstory</li>
            <li><strong>GET /api/quest</strong> - Get a random quest</li>
        </ul>
        <h2>Health Check:</h2>
        <p><a href="/health">Check server health</a></p>
        <h2>Contact:</h2>
        <p>For issues, contact <a href="mailto:support@example.com">support@example.com</a></p>
    `);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
