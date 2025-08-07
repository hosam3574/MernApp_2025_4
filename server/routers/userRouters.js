// import userControoler 
const exprees = require('express');
const { createUser,getAllUsers,deleteUserById, UpdateById } = require('../controllers/userController');
const router = exprees.Router();


//create user route

router.post ('/create',createUser);
router.get('/allUsers',getAllUsers);
router.delete('/userToDelete/:id',deleteUserById)
router.put('/userToUpdate/',UpdateById)
//export the router

module.exports = router;