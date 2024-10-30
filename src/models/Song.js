const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
    nameSong: { type: String, required: true },
    artist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist' }],
    genre: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }],
    album:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Album' }],
    releaseYear: Date,
    duration: String,
    imgSong: String,
    audioSong: String,
    createDate: { type: Date, default: Date.now },
    views: { type: Number, default: 0 },
});

module.exports = mongoose.model('Song', SongSchema);
