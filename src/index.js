import dotenv from "dotenv"
import mongoose from "mongoose";
import express from "express";
import CONNECTDB from "./db/index.js";
dotenv.config({
    
})


CONNECTDB()


// const app = express();

// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
//         app.on("error",(error)=>{
//             console.log("Errot :" ,error)
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log("App is listening on port",process.env.PORT)
//         })

//     } catch (error) {
//         console.error(error);
//         throw error;
        
//     }
// })()
