const express = require('express');
const app = express();
const optionsRouter = require('./routes/optionsRouter');

app.use(express.json()); // Parse JSON request bodies

app.use('/api/options', optionsRouter); 

// Routes
const backstoryRoutes = require('./routes/backstoryRoutes');
const questRoutes = require('./routes/questRoutes');
const optionsRoutes = require('./routes/optionsRoutes');

app.use('/api/options', optionsRoutes);
app.use('/api/backstory', backstoryRoutes);
app.use('/api/quest', questRoutes);

const PORT = 3008;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
