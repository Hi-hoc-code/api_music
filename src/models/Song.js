const mongoose =require('mongoose')

const Song =new mongoose.Schema({
    nameSong:{type: String, required:true},
    artist: [{type:mongoose.Schema.Types.ObjectId, ref:'Artist'}],
    genre:[{type:mongoose.Schema.Types.ObjectId, ref:'Genre'}],
    album:{type:mongoose.Schema.Types.ObjectId, ref:'Album'},
    releaseYear:Date,
    duration: Number,
    imgSong :String,
    audioSong: String,
    createDate:{type:Date, default:Date.now}
})