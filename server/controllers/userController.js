//import Yser modle
const User =require('../models/user')

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


//get all users

const getAllUsers =async (req,res )=>{

try {

    const allUsers = await User.find()
    res.status(200).json(allUsers)
    
} catch (error) {
    res.status(500).json({massage:error })

}
}


//deleat user :>id

const deleteUserById =async (req,res )=>{
const {id}=req.params
try {
    const userToDelete = await User.findByIdAndDelete(id)
     res.status(200).json({message:"user delete",user:userToDelete})
    
} catch (error) {
    res.status(500).json({massage:error })
}

}

//Update

const UpdateById = async(req,res)=>{
const {id}=req.params
const {username,email,password}=req.body
try {
      const userToDelete = await User.findByIdAndUpdate(id,{username,email,password})
       res.status(200).json({message:"user Updated done",user:userToUpdate})
} catch (error) {
    res.status(500).json({massage:error })
}



}



    



//export the creatUser function 

module.exports = { createUser,getAllUsers,deleteUserById ,UpdateById};