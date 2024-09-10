const express = require('express');
const app = express();

// Import routes
const optionsRouter = require('./routes/optionsRoutes');
const backstoryRoutes = require('./routes/backstoryRoutes');
const questRoutes = require('./routes/questRoutes');

// Middleware to parse JSON requests
app.use(express.json()); 

// Use routes
app.use('/api/options', optionsRouter); 
app.use('/api/backstory', backstoryRoutes);
app.use('/api/quest', questRoutes);

// Start the server
const PORT = 3008;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
