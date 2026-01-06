import type { NextFunction,Response,Request } from "express";
import jwt from 'jsonwebtoken'
export const authMiddleware =(req:Request,res:Response,next:NextFunction)=>{
    try {
        const header = req.headers["authorization"]
        if(!header){
            return res.status(411).json({
                message:"Token Not Found"
            })
        }
        const authHeader=header.startsWith("Bearer")?header.substring(7):header
        console.log("token is"+ authHeader)
    const decode= jwt.verify(authHeader,process.env.JWT_SECRECT as string)
    
    if(decode){
    //@ts-ignore
    req.userId = decode.id
    //@ts-ignore
    req.userName=decode.name
    next()
    }
    if(!decode){
        return res.status(411).json({
            message:"Token has not decoded"
        })
    }
   
    } catch (error) {
        return res.status(500).json({
            message:"Something went wrong",
            error
        })
    }
        
}