const mongoose =require('mongoose');

const ProductSchema =new mongoose.Schema({

name:{type:String,require:true},
discription :{type:String,require:true},
category:{type:mongoose.Schema.Types.ObjectId, ref :'Category',require:true},
price:{type:String,require:true},
imageUrl:{type:String,require:true},

})

const Product =mongoose.model('product',ProductSchema);
module.exports=Product;