import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadFileOnCloudinary } from "../utils/cloudinary.js";


const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  // validation - not empty
  // check if user already exists: username, email
  // check for images, check for avatar
  // upload them to cloudinary, avatar
  // create user object - create entry in db
  // remove password and refresh token field from response
  // check for user creation
  // return res

  const { email, username, password, fullName } = req.body;

  // console.log("Email:",email)

  if (
    [fullName, email, username, password].some((fields) => {
      return fields?.trim() === "";
    })
  ) {
    throw new ApiError(400, "All Fields Are Required");
  }

  const ExistedUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (ExistedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverIamgeLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400,"Avatar File Is Required");
  }


  const avatar = await uploadFileOnCloudinary(avatarLocalPath)
  const coverImage = await uploadFileOnCloudinary(coverIamgeLocalPath)


  if(!avatar){
    throw new ApiError(400,"Avatar File Is Required");
  }

  const user = await User.create(
    {
        email,
        fullName,
        password,
        avatar:avatar.url,
        coverImage:coverImage.url || "",
        username:username.toLowerCase()
    }
  )
    const createdUser =await User.findById(user._id).select(
        "-password -refreshToken"
   )
   if(!createdUser){
    throw new ApiError(500,"Something Went Wrong While Regidtering the User")
   }

   return res.status(201).json(
    new ApiResponse(200,createdUser,"User Registered Successfully")
   )
});

export { registerUser };
