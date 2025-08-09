const Product = require ('../models/product')

const createProduct = async(req , res)=>{

//creat new product

const name =req.body.name ;
const dis = req.body.dis;
const categrs =req.body.categrs;
const price = req.body.price;
const image = req.body.image;

try {
    
    const Product =new Product({

    name : name,
    dis : dis ,
    categrs:categrs,
    price:price,

    })
await Product.save();
    res.status(201).json({massage: 'product Connected successfully'});

} catch (error) {
    
    res.status(500).json({massage:error })
}}






//create getAllProdect 

const getAllProdect= async(req ,res)=>{

try {
    const allProduct = await Product .find ()
    res.status (200).json(allProduct)
} catch (error) {
     res.status(500).json({massage:error })
}

}


//crate deleate


const deletePrductById =async (req,res )=>{
const {id}=req.params
try {
    const productToDelete = await product.findByIdAndDelete(id)
     res.status(200).json({message:"product delete",product:productToDelete})
    
} catch (error) {
    res.status(500).json({massage:error })
}

}



//creat Update


const UpdateProductByID =async(req , res)=>{

    const{id}=req.params
    const { name ,dis,categrs,price,image}=req.body


 try {
    
    const productToUpdate =await User.findByIdAndUpdate(id,{name,dis,categrs,price,image})
  res.status(200).json({message:"Product Updated done",product: productToUpdate})

 } catch (error) {
     res.status(500).json({massage:error})
 }
    
}



//creat get product id








module.exports ={ createProduct , getAllProdect,deletePrductById,UpdateProductByID};