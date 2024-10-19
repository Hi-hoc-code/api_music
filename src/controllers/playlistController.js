const Playlist = require('../models/Playlist');

exports.createPlaylist = async (req, res) => {
  const { name, description, user, imgPlaylist } = req.body;
  try {
    const newPlaylist = new Playlist({ name, description, user, imgPlaylist });
    await newPlaylist.save();
    res.status(201).json({ message: 'Playlist created', newPlaylist });
  } catch (error) {
    res.status(500).json({ message: 'Error creating playlist', error });
  }
};

exports.getAllPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find().populate('user song');
    res.status(200).json(playlists);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching playlists', error });
  }
};

exports.getPlaylistById = async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id).populate('user song');
    if (!playlist) return res.status(404).json({ message: 'Playlist not found' });
    res.status(200).json(playlist);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching playlist', error });
  }
};

exports.updatePlaylist = async (req, res) => {
  try {
    const updatedPlaylist = await Playlist.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPlaylist) return res.status(404).json({ message: 'Playlist not found' });
    res.status(200).json({ message: 'Playlist updated', updatedPlaylist });
  } catch (error) {
    res.status(500).json({ message: 'Error updating playlist', error });
  }
};

exports.deletePlaylist = async (req, res) => {
  try {
    const deletedPlaylist = await Playlist.findByIdAndDelete(req.params.id);
    if (!deletedPlaylist) return res.status(404).json({ message: 'Playlist not found' });
    res.status(200).json({ message: 'Playlist deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting playlist', error });
  }
};
