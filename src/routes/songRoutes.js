const express = require('express');
const router = express.Router();
const SongController = require('../controllers/SongController');

router.get('/', SongController.getAllSongs);
router.get('/:id', SongController.getSongById);

module.exports = router;
