require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./src/config/db');
const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Constants
const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';

// Routes
// Ensure your folder name is 'routes' or 'route' - match it exactly here:
const apiRoutes = require('./src/routes/apiRoutes'); 

// Mount the routes once
app.use(BASE_URI, apiRoutes); 

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Base URI: http://localhost:${PORT}${BASE_URI}`);
});

