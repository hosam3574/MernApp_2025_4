//create a molel for category that conation name dis image url 

const mongoose =require('mongoose');

const categorySchema =new mongoose.Schema({

name:{type:String,require:true},
discription :{type:String,require:true},


imageUrl:{type:String,require:true},

})

const Category =mongoose.model('Category',categorySchema);
module.exports= Category;