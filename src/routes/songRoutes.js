const express = require('express');
const {
    addSong,
    updateSong,
    deleteSong,
    findSongByID,
    findSongByAlbum,
    findSongByArtist,
    findSongByPlayList,
    findSongByTrending,
    fileSongByFavorite
} = require('../controllers/SongController');
const auth = require('../middlewares/auth'); 

const router = express.Router();

router.post('/', addSong); 
router.put('/:id', auth, updateSong); 
router.delete('/:id', auth, deleteSong); 
router.get('/:id', findSongByID); 
router.get('/album/:albumId', findSongByAlbum);
router.get('/artist/:artistId', findSongByArtist);
router.get('/playlist/:playlistId', findSongByPlayList); 
router.get('/trending', findSongByTrending); 
router.get('/favorites', fileSongByFavorite);

module.exports = router;
