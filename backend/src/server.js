const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

// routes
const questRoutes = require('./routes/questRoutes');
const backstoryRoutes = require('./routes/backstoryRoutes');

// use routes
app.use('/quests', questRoutes);
app.use('/backstories', backstoryRoutes);

// start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});