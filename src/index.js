import dotenv from 'dotenv'
//  difference between Dependencies and Dev Dependencies ?
//  The main difference between dependencies and devDependencies is that dependencies are required for an application to function in production, while devDependencies are only needed for development.
//  Dev Dependencies are those dependencies jinko hum sirf development me use krte h or unhe production me nahi leke jate h .

// imp. : when we talk to database it will take some time thats by it is very important to use async/await and try/catch block.
// import mongoose from 'mongoose';
// import { DB_NAME } from './constant';
import connectDB from './db/index.js';

                                
dotenv.config({
    path:'./env'
})

connectDB()









// Approach 1 for connecting to the database.
/*import express from 'express'
const app = express()

(async ()=>{                     // ()() is the iife function . In JavaScript, an IIFE (Immediately Invoked Function Expression) is a function that is defined and executed immediately after its creation.
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("Error",(error)=>{
            console.log("ERROR:",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on the PORT ${process.env.PORT}`)
        })

    }catch(error){
        console.log("ERROR",error);
        throw error;
    }
})()
*/







