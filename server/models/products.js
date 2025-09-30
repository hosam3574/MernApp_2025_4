const mongoose =require('mongoose');

const ProductSchema =new mongoose.Schema({

name:{type:String,require:true},
discription :{type:String,require:true},
category:{type:String,require:true},
price:{type:String,require:true},
imageUrl:{type:String,require:false},

})

const Product =mongoose.model('product',ProductSchema);
module.exports=Product;