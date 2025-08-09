//import productControoler
const exprees =require('express');
const { createProduct, getAllProdect, deletePrductById, UpdateProductByID }=require ('../controllers/productController');
const router = exprees.Router();


//create product router 

router.post('/creat',createProduct)
router.get('/allProduct',getAllProdect)
router.delete('/productToDelete',deletePrductById)
router.put('/productToUpdate',UpdateProductByID)




module.exports =router;





