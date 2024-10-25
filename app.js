const express = require('express');
const dotenv = require('dotenv');

// Import các route
const userRoutes = require('./src/routes/userRoutes');
const albumRoutes = require('./src/routes/AlbumRoutes');
const artistRoutes = require('./src/routes/ArtistRoutes');
const genreRoutes = require('./src/routes/GenreRoutes');
// const playlistRoutes = require('./src/routes/PlaylistRoutes');
const songRoutes = require('./src/routes/songRoutes');

// Import kết nối MongoDB
const connectDB = require('./src/config/db');

dotenv.config(); // Tải các biến môi trường từ file .env

const app = express();
app.use(express.json()); // Middleware để phân tích JSON

// Kết nối đến MongoDB
connectDB();

// Sử dụng các route
app.use('/api/users', userRoutes);
app.use('/api/albums', albumRoutes);
app.use('/api/artists', artistRoutes);
app.use('/api/genres', genreRoutes);
// app.use('/api/playlists', playlistRoutes);
app.use('/api/songs', songRoutes);
// Thiết lập cổng và chạy server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
