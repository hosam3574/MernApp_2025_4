//import productControoler
const exprees =require('express');
const { getProdectId,createProduct, getAllProdect, deletePrductById, UpdateProductByID }=require ('../controllers/productController');
const router = exprees.Router();
const adminAuth =require('./adminAuth')

//create product router 

router.post('/creat', adminAuth,createProduct)
router.get('/allProduct',getAllProdect)
router.delete('/productToDelete/:id ',adminAuth,deletePrductById)
router.put('/productToUpdate',adminAuth,UpdateProductByID)

router.get('/:id',getProdectId)

module.exports =router;





