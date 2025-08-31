//import Yser modle
const User =require('../models/user');

const jwt =  require ('jsonwebtoken');

const bcrypt = require('bcrypt')




//create new user
const createUser = async(req, res )=>{
    console.log("fkldsjgks")

const userName = req.body.username;
const email = req.body.email;
const password = req.body.password;
console.log(req.body)

try{

//encrypt the password

const salt = await bcrypt.genSalt(10);
const hashedPassword=await bcrypt.hash(password,salt);
    console.log(userName,email,hashedPassword)
    const user=  new User ({
      
        username : userName,
         email : email,
         password  : hashedPassword ,
    })
    await user.save();
    console.log(user)
    res.status(201).json({massage: 'User Connected new',user:user});
}

catch(error){
res.status(500).json({massage:error })
}
 
}



//login

const loginUser = async (req ,res )=>{

const {email,password}=req.body;


//decrypt the password

try {

const user = await User.findOne({ email: email  });
const isMatched = await bcrypt.compare(password,user.password)
if (!isMatched){
    return res.status(401).json({massage:'Invalid email or password'});
}
if(!user){
     return res.status(401).json({massage:'Invalid email or password'});
}





if (user){

const token = jwt.sign({id :user._id}, process.env. JWT_SECRET, { expiresIn: '1h'});

res.status (200) .json({ message: 'Login successful', user, token });
}

else{

res.status(401).json({ message: 'Invalid email or password' });
}

    
} catch (error) {
    res.status(500).json({massage:error });
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
const {username,email,password}=req.body;
try {
      const userToUpdate = await User.findByIdAndUpdate(id,{username,email,password})
       res.status(200).json({message:"user Updated done",user:userToUpdate})
} catch (error) {
    res.status(500).json({massage:error })
}



}



    



//export the creatUser function 





const profile =async (req , res )=>{

const id = req.body.id
try {
     const userProfile = await User.findById(id)
     res.status(200).json(userProfile)
} catch (error) {
     res.status(500).json({massage:error })
}



}

module.exports = { createUser,getAllUsers,deleteUserById ,UpdateById,profile ,loginUser};