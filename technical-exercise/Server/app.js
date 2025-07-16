const express = require('express');
const cors = require('cors');
const storeRoutes = require('./routes/storeRoutes');

const app = express();

app.use(cors());
app.use('/api/stores', storeRoutes);

module.exports = app;
