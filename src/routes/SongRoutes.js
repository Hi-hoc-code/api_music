const express = require('express');
const router = express.Router();
const {
    create_song,
    get_all_song,
    get_song_by_id,
    update_song,
    delete_song,
    get_song_search,
    get_song_by_trending,
    favorite_song_idUser
} = require('../controller/SongController');
const { validate_song } = require('../middleware/checkValidate/SongValidate');
const { check_song_exists } = require('../middleware/checkExists/SongExists');

router.post('/createSong', validate_song, check_song_exists, create_song);
router.post('/getAllSong', get_all_song);
router.post('/getSongById', get_song_by_id);
router.post('/updateSong', update_song);
router.post('/deleteSong', delete_song);
router.post('/search', get_song_search);
router.post('/getSongByTrending', get_song_by_trending);
router.post('/favoriteSong', favorite_song_idUser);

module.exports = router;
