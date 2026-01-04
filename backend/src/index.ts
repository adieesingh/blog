import express from 'express'
import cors from 'cors'
import jwt  from 'jsonwebtoken'
import dotenv from 'dotenv'
import { ContentModel,  UserModel } from './db.js'
import { authMiddleware } from './middleware.js'
dotenv.config()
import multer from 'multer'

const app = express()
app.use(express.json())
app.use(cors())





// Making signup route
app.post("/api/v1/signup",async (req,res)=>{
   
    try {
    const username = req.body.username
    const password = req.body.password
    const name = req.body.name
    const response = await UserModel.create({
        username:username,
        password:password,
        name:name
    })
    if(!response){
        return res.status(411).json({
            message:"Creditiend went wrong"
        })
    }
    if(response){
        return res.status(200).json({
            message:"SignUp Succesfully"
        })
    }
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
   




})

//  making sigin Route

app.post("/api/v1/signin",async (req,res)=>{
    try {
    const username = req.body.username
    const password = req.body.password

    const response = await UserModel.findOne({
        username:username,
        password:password
    })
    if(!response){
        return res.status(411).json({
            message:"Email not Found,Register Please"
        })
    }
    // Making auth
    if(response){
      const token = jwt.sign({username,id:response._id},process.env.JWT_SECRECT as string) 
      return res.status(200).json({
        message:"Sign In Sucessfully",
        token:token
      }) 
    }
    } catch (error) {
        return res.status(500).json({
            message:"Something went wrong in signin",
            error
        })
    }
    
   
})
 const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})
const upload = multer({ storage: storage })
// Write a blog 
app.post("/v1/blog",upload.single('photo'),authMiddleware,async (req,res)=>{
    console.log(req.file)
   
    try {
     const title = req.body.title
    const content = req.body.content
    const imageData ={
        path:req.file?.path as string,
        filename:req.file?.filename as string
    }
   if(!imageData) return res.status(411).json({"message":"Not uploaded"})

   

   

const upload = multer({ storage: storage })
    
    const response = await ContentModel.create({
        title:title,
        content:content,
        //@ts-ignore
        userId:req.userId,
        image:imageData
        

    })
    if(!response){
        return res.status(411).json({
            message:"Creditinals is required"
        })
    }
    if(response){
        return res.status(200).json({
            message:"Post was succesfully"
        })
    }
    } catch (error) {
        return res.status(500).json({
            message:"Something went wrong",
            error
        })
    }
   



})
app.get("/v1/post",async (req,res)=>{
       const response = await ContentModel.find()
       if(!response){
        return res.status(411).json({
            message:"Error While fetching data"
        })
       }
       if(response){
        return res.status(200).json({
            message:response
        })
       }
})


// Listening 

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`)
})
