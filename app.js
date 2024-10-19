const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/songs', require('./src/routes/songRoutes'));
app.use('/api/playlists', require('./src/routes/playlistRoutes'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
