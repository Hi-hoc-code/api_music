const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  premium: { type: Boolean, default: false },
  playlists: [{ type: Schema.Types.ObjectId, ref: 'Playlist' }],
  favorites: [{ type: Schema.Types.ObjectId, ref: 'Song' }],
  history: [{ song: { type: Schema.Types.ObjectId, ref: 'Song' }, date: { type: Date, default: Date.now } }],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
