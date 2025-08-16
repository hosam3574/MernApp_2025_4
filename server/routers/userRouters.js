// import userControoler 
const exprees = require('express');
const { createUser,getAllUsers,deleteUserById, UpdateById,profile,loginUser } = require('../controllers/userController');
const router = exprees.Router();


//create user route

router.post ('/create',createUser);
router.get('/allUsers',getAllUsers);
router.delete('/delete/:id',deleteUserById)
router.put('/update/:id',UpdateById)


// login rout

router.post('/login',loginUser)



//creat prfile route

router.get('/profil',profile)



//export the router

module.exports = router;