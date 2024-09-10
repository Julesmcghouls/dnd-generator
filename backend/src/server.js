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
    res.send('Welcome to the D&D Generator API!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
