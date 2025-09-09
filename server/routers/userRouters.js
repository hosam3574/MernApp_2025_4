// import userControoler 
const exprees = require('express');
const { createUser,getAllUsers,deleteUserById, UpdateById,profile,loginUser,checkUserRole, } = require('../controllers/userController');
const router = exprees.Router();

//import userAuth middleware
const userAuth = require('./userAuth');
const adminAuth = require('./adminAuth');
//create user route

router.post ('/create',createUser);
router.get('/allUsers', adminAuth,getAllUsers);
router.delete('/delete/:id', adminAuth,deleteUserById)
router.put('/update/:id',UpdateById)


// login rout
router.post('/login',loginUser)
//router.put('/editPassword',userAuth,editPassword )


//profile route
router.get('/checkRole',userAuth,checkUserRole)
router.get('/profil', userAuth,profile)




//export the router

module.exports = router;