// import userControoler 
const exprees = require('express');
const { createUser,getAllUsers,deleteUserById } = require('../controllers/userController');
const router = exprees.Router();


//create user route

router.post ('/create',createUser);
router.get('/allUsers',getAllUsers);
router.delete('/userToDelete/:id',deleteUserById)
//export the router

module.exports = router;