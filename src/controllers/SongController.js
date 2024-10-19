const Song = require('../models/Song');
const Playlist = require('../models/Playlist');

exports.getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find().populate('artist genre album');
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching songs', error });
  }
};

exports.getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id).populate('artist genre album');
    if (!song) return res.status(404).json({ message: 'Song not found' });
    res.status(200).json(song);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching song', error });
  }
};

exports.createSong = async (req, res) => {
  const { nameSong, artist, genre, album, releaseYear, duration, imgSong, audioSong } = req.body;
  try {
    const newSong = new Song({ nameSong, artist, genre, album, releaseYear, duration, imgSong, audioSong });
    await newSong.save();
    res.status(201).json({ message: 'Song created', newSong });
  } catch (error) {
    res.status(500).json({ message: 'Error creating song', error });
  }
};

exports.updateSong = async (req, res) => {
  try {
    const updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSong) return res.status(404).json({ message: 'Song not found' });
    res.status(200).json({ message: 'Song updated', updatedSong });
  } catch (error) {
    res.status(500).json({ message: 'Error updating song', error });
  }
};

exports.deleteSong = async (req, res) => {
  try {
    const deletedSong = await Song.findByIdAndDelete(req.params.id);
    if (!deletedSong) return res.status(404).json({ message: 'Song not found' });
    res.status(200).json({ message: 'Song deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting song', error });
  }
};

exports.getSongsByGenre = async (req, res) => {
  try {
    const songs = await Song.find({ genre: req.params.genreId }).populate('artist genre album');
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching songs by genre', error });
  }
};

exports.getSongsByArtist = async (req, res) => {
  try {
    const songs = await Song.find({ artist: req.params.artistId }).populate('artist genre album');
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching songs by artist', error });
  }
};

exports.getSongsByAlbum = async (req, res) => {
  try {
    const songs = await Song.find({ album: req.params.albumId }).populate('artist genre album');
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching songs by album', error });
  }
};

exports.addSongToPlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.playlistId);
    if (!playlist) return res.status(404).json({ message: 'Playlist not found' });

    playlist.song.push(req.params.songId);
    await playlist.save();

    res.status(200).json({ message: 'Song added to playlist', playlist });
  } catch (error) {
    res.status(500).json({ message: 'Error adding song to playlist', error });
  }
};
