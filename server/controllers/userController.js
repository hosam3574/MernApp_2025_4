//import Yser modle
const user =require('../models/user')

//create new user
const createUser = async(req, res )=>{

const userName = req.body.username;
const email = req.body.email;
const password = req.body.password;



try{

    const user= new User ({
      
        username : userName,
         email : email,
         password : password ,
    })
    await user.save();
    res.status(201).json({massage: 'User Connected successfully'});
}

catch(error){
res.status(500).json({massage:error })
}
 
}


//export the creatUser function 

module.exports = { createUser };