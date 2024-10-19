const mongoose = require('mongoose')

const Admin = new mongoose.Schema({
    username:{type:String, required:true},
    password:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    permissions:{type:[String], default:['manageUsers','manageSongs','viewStatistics']},
    avatar:String
})