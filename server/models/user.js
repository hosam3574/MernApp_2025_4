const mongoose = require('mongoose');

const UserSchema =new mongoose.Schema({

username:{type:String,require:true,},
email:{type:String,require:true},
password:{type:String,require:true},
role:{type:String,default:'user'},
})

const User = mongoose.model('User',UserSchema);
module.exports = User;