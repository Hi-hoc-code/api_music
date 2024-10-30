const Artist = require('../models/Artist');
const Genre = require('../models/Genre');
const Song = require('../models/Song');

const checkGenreExists = async (req, res, next) => {
  const { name } = req.body;
  const existingGenre = await Genre.findOne({ name });
  if (existingGenre) {
    return res.status(400).json({ message: 'Thể loại đã tồn tại.' });
  }
  next();
};

const checkArtistExists = async (req, res, next) => {
  const { name } = req.body;
  const existingArtist = await Artist.findOne({ name });
  if (existingArtist) {
    return res.status(400).json({ message: 'Tên nghệ sĩ đã tồn tại' });
  }
  next();
};
const checkSongExits = async (req, res, next) => {
  const { nameSong } = req.body;
  const existingSong = await Song.findOne({ nameSong });
  if (existingSong) {
    return res.status(400).json({ message: 'Bài hát đã tồn tại' })
  }
  next();
}
const checkPlaylistExits = async (req, res, next) => {
  const { name } = req.body;
  const existingPlaylist = await Artist.findOne({ name });
  if (existingPlaylist) {
    return res.status(400).json({ message: 'PLaylist đã tồn tại' })
  }
  next();
}
module.exports = {
  checkGenreExists,
  checkArtistExists,
  checkSongExits,
  checkPlaylistExits
};
