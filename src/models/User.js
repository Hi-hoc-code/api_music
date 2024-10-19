const mongoose = require ('mongoose')

const User = new mongoose.Schema({
    username:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    premium:{type:Boolean, default:false},
    favoriteSong:[{type:mongoose.Schema.Types.ObjectId, ref:'Song'}],
    playlist:[{type:mongoose.Schema.Types.ObjectId, ref:'Playlist'}],
    history:[{type:mongoose.Schema.Types.ObjectId,ref:'Song'}],
})