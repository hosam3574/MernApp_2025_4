const mongoose = require('mongoose');

const UserSchema =new mongoose.Schema({

username:{type:String,require:true,unique: true},
email:{type:String,require:true,unique: true},
password:{type:String,require:true},
role:{type:String, enum :('user', 'admin'), default:'admin'}
})

const User = mongoose.model('User',UserSchema);
module.exports = User;