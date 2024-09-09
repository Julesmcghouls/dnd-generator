const express = require('express');
const cors = require('cors'); // Import cors middleware
const app = express();

app.use(cors()); // Enable CORS for all origins

app.use(express.json());

// Routes
const backstoryRoutes = require('./routes/backstoryRoutes');
const questRoutes = require('./routes/questRoutes');

app.use('/api/backstory', backstoryRoutes);
app.use('/api/quest', questRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
