// import userControoler 
const exprees = require('express');
const { createUser,getAllUsers,deleteUserById, UpdateById,profile,loginUser } = require('../controllers/userController');
const router = exprees.Router();
const userAuth = require('./userAuth');

//create user route

router.post ('/create',createUser);
router.get('/allUsers',getAllUsers);
router.delete('/delete/:id',deleteUserById)
router.put('/update/:id',UpdateById)
//creat prfile route
router.get('/profil', userAuth,profile)
// login rout
router.post('/login',loginUser)






//export the router

module.exports = router;