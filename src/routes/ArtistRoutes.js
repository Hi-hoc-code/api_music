const express = require('express');
const { getAllArtist, getArtistById, createArtist, updateArtist, deleteArtist } = require('../controllers/ArtistController');
const auth = require('../middlewares/auth'); 
const router = express.Router();

router.get('/', getAllArtist);
router.get('/:id', getArtistById);
router.post('/', createArtist);
router.put('/:id', updateArtist);
router.delete('/:id', deleteArtist);

module.exports = router;
