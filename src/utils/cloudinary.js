import {v2 as cloudinary} from "cloudinary"
import { log } from "console";
import fs from "fs"


   cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });


    const uploadFileOnCloudinary=async function(localPath){

        try {
             if(!localPath) return null
      const responce = await cloudinary.uploader.upload(localPath,{
            resource_type:"auto"
        })
        console.log("File is uploaded on cloudinary",responce);
        
        } catch (error) {
            fs.unlinkSync(localPath)//remove the locally saved file
        }
       
    }

    export {uploadFileOnCloudinary}