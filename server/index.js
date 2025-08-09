 const express = require( 'express');
const connectDB = require('./config/db');
const dotenv = require( 'dotenv');

//import user router

const userRouter =require('./routers/userRouters');
const productRouter =require('./routers/productRouters');


dotenv.config();
connectDB()


const app = express();
app.use(express.json())

app.use('/api/users', userRouter);
 app.use ('/api/product',productRouter)

const PORT = process.env. PORT 
app. listen (PORT,()=>{
console. log('Server is running on port ${PORT}');

} )  