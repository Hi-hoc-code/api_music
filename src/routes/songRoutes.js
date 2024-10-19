const express = require('express');
const router = express.Router();
const songController = require('../controllers/SongController');

// CRUD for songs
router.get('/', songController.getAllSongs);
router.get('/:id', songController.getSongById);
router.post('/', songController.createSong);
router.put('/:id', songController.updateSong);
router.delete('/:id', songController.deleteSong);

// CRUD for songs by genre, artist, album
router.get('/genre/:genreId', songController.getSongsByGenre);
router.get('/artist/:artistId', songController.getSongsByArtist);
router.get('/album/:albumId', songController.getSongsByAlbum);

// Add song to playlist
router.put('/:playlistId/addSong/:songId', songController.addSongToPlaylist);

module.exports = router;
