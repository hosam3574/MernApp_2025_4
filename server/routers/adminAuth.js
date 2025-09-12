const jwt =require('jsonwebtoken');

const adminAuth = async (req,res,next)=>{
    

const token=req.headers.auth

try {
    
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user=decoded;
    console.log(req.user);

    if(req.user.role==='admin'){
       next();  
    }
else{
    return res.status(403).json({message:"Access denied"})
}

   


} catch (error) {
    res.status(401).json({message:"Unauthorized"});
}



}

module.exports = adminAuth;