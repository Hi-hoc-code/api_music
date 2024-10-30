const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: String,
    genres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }], 
    createDate: { type: Date, default: Date.now },
    avatar: String,
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
});

module.exports = mongoose.model('Artist', ArtistSchema);
