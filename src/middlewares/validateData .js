const validateGenreData = (req, res, next) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ message: "Thiếu dữ liệu 'name' hoặc 'description'." });
  }
  next();
};

const validateArtistData = (req, res, next) => {
  const { name, genres, avatar, bio } = req.body;
  if (!name || !genres || !avatar || !bio) {
    return res.status(400).json({ message: "Thiếu dữ liệu 'name' / 'genres' / 'avatar' / 'bio'." });
  }
  next();
}
const validateSongData = (req, res, next) => {
  const { nameSong, genre, album, duration, imgSong, audioSong } = req.body;
  if (!nameSong || !genre || !album || !duration || !imgSong || !audioSong) {
    return res.status(400).json({ message: "Thiếu dữ liệu 'name' / 'genres' / 'avatar' / 'bio'." });
  }
  next();
}
const validatePlaylistData = (req, res, next) => {
  const { name, description, user, song, imgPlaylist } = req.body;
  

}
module.exports = {
  validateArtistData,
  validateGenreData,
  validateSongData,
  validatePlaylistData
}