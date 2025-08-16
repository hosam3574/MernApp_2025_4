const mongoose =require('mongoose');

const ProductSchema =new mongoose.Schema({

name:{type:String,require:true},
dis :{type:String,require:true},
categrs:{type:String,require:true},
price:{type:String,require:true},
image:{type:String,require:false},

})

const Product =mongoose.model('product',ProductSchema);
module.exports=Product;