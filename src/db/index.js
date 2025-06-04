import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const CONNECTDB = async()=>{

    try {
      const connectioninstance = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)
        console.log("MONGODB CONNECTED !!")
    } catch (error) {
        console.error("MONGODB connection error",error);
    }
}

export default CONNECTDB;