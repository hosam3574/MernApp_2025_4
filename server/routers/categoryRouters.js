const express =require('express');
const route =express.Router();
const adminAuth=require('./adminAuth')
const{ createCategory,getAllCategoryies,getCategoryById,updateCategoryById,deleteCategoryById }=require('../controllers/category')



//import adminAuth middleware
const adminAuth = require('/adminAuth');

//creat category route 
router.post('/create',adminAuth,createCategory);

//get all categoryies route
router.get('/all',getAllCategoryies)

//get category by id route
router.get('/:id',getCategoryById)

//update category by id route
router.put('/update/:id',adminAuth,updateCategoryById)


//delete category by id route
router.put('/delete/:id',adminAuth,deleteCategoryById)



//export the route
module.exports= router;