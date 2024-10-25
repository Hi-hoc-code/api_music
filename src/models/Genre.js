const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  createDate: { type: Date, default: Date.now },
  imgGenre: String,
});

module.exports = mongoose.model('Genre', GenreSchema);
