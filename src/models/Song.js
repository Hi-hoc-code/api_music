const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: Schema.Types.ObjectId, ref: 'Artist', required: true },
  album: { type: String },
  genre: { type: String },
  releaseYear: { type: Number },
  duration: { type: Number }, // in seconds
  filePath: { type: String, required: true }, // path to audio file
  albumArt: { type: String }, // path to album art
  views: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Song', songSchema);
