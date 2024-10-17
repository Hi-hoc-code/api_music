const Song = require('../models/Song');

// Get all songs
exports.getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find().populate('artist');
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch songs' });
  }
};

// Get song by ID
exports.getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id).populate('artist');
    if (!song) return res.status(404).json({ error: 'Song not found' });
    res.json(song);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch song' });
  }
};
