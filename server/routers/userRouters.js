// import userControoler 
const exprees = require('express');
const {creatUser}= require ('../controllers/userController');
const router = exprees.Router();


//create user route

router.post ('/create',creatUser);

//export the router

module.exports = router;