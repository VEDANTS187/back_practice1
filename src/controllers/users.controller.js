import {asyncHandler} from "../utils/asyncHandler.js"

const registerUser = asyncHandler(async(req,res)=>{
    res.status(200).json({
        message:"Valid Request",
        advice:"Age ke video dekh bsdk"
    })
})

export {registerUser}