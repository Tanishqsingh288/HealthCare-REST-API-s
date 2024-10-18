require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const serviceRoutes = require('./routes/serviceRoutes');
const connectDB = require('./config/db');

// Initialize express app
const app = express();

// Body parser middleware to handle JSON
app.use(bodyParser.json());

// Connect to the database
connectDB();

// Use routes
app.use('/api/services', serviceRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
