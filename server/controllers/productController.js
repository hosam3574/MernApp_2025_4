const Product = require ('../models/product')

const createProduct = async(req , res)=>{

//creat new product

const name =req.body.name ;
const dis = req.body.dis;
const categrs =req.body.categrs;
const price = req.body.price;
const imageUrl = req.body.image;

try {
    
    const product =new Product({

    name : name,
    dis : dis ,
    categrs:categrs,
    price:price,
imageUrl:imageUrl,
    })
await product.save();
    res.status(201).json({massage: 'product Connected successfully'});

} catch (error) {
    console.log(error.massage)
    
    res.status(500).json({massage:error.massage })
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
const {id}=req.params.id;
try {
    const productToDelete = await product.findByIdAndDelete(id);
    if(!product){

       return res.status(404).json({message:"product not found"});
    }
   res.status(200).json({message:"product deleate successfully"});
    
} catch (error) {
    console.error('Error deleting product',error.message);
    res.status(500).json({massage:error.message });
}

}



//creat Update


const UpdateProductByID =async(req , res)=>{

    const{id}=req.params.id;
    const { name ,des,categrs,price,imageUrl}=req.body


 try {
    
    const productToUpdate =await User.findByIdAndUpdate(id,{name,dis,categrs,price,image})
  res.status(200).json({message:"Product Updated done",product: productToUpdate})

 } catch (error) {
      console.error('Error updating product',error.message);
     res.status(500).json({massage:error})
 }
    
}



//creat get product id
  
const getProductById=async(req.res)=>{
    const id = req.params;
    try {
         const product = await product.findById(id) ;
         if(!product){
            return 
         }
    } catch (error) {
          console.error('Error Fetching product',error.message);
        res.status(500).json({massage:error.message });

    }
}







module.exports ={ getProdectId,createProduct , getAllProdect,deletePrductById,UpdateProductByID};