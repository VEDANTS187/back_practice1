import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(urlencoded({extended:true,limit:"20kb"}))
app.use(express.static("public"))
app.use(cookieParser())



import userRouter from "./routes/users.routes.js"


app.use("/users",userRouter)
export { app }