const mongoose = require('mongoose')

const Album = new mongoose.Schema({
    title:{type:String, required: true},
    artist:[{type: mongoose.Schema.Types.ObjectId, ref:'Artist'}],
    genre:[{type:mongoose.Schema.Types.ObjectId, ref:'Genre'}],
    releaseYear:Date,
    imgAlbum:String,
    song:[{type:mongoose.Schema.Types.ObjectId, ref:'Song'}],
    createDate:{type:Date, default:Date.now}
})