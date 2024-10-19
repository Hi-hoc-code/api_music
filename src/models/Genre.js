const mongoose = require('mongoose')

const Genre = new mongoose.Schema({
   name:{type: String, required:true},
   description:String,
   createDate:{type:Date, default:Date.now},
    imgGenre: String,
})