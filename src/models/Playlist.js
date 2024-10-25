const mongoose = require('mongoose');

const PlaylistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    song: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
    createDate: { type: Date, default: Date.now },
    imgPlaylist: String,
});

module.exports = mongoose.model('Playlist', PlaylistSchema);
