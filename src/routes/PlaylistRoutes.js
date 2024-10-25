const express = require('express');
const { getAllPlaylist, getPlaylistById, createPlaylist, updatePlaylist, deletePlaylist } = require('../controllers/playlistController');
const auth = require('../middlewares/auth');
const router = express.Router();


module.exports = router;
