const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    premium: { type: Boolean, default: false },
    favoriteSong: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
    playlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' }],
    history: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
    otp: { type: String },
    otpExpires: { type: Date } 
});

module.exports = mongoose.model('User', UserSchema);
