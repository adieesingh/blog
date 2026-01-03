import mongoose, { model, Schema } from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URL || "")
            
const UserSchema = new Schema({
    username:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    name:{type:String},

},{timestamps:true}) 

const PostSchema = new Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    userId:{type:mongoose.Types.ObjectId,ref:'User',required:true}
})

const imageSchema = new Schema({
    path:{type:String,required:true},
    filename:{type:String,required:true},
    userId:{type:mongoose.Types.ObjectId,ref:'User',required:true}
})

export const ImageModel = model('Image',imageSchema)
export const UserModel = model('User',UserSchema)
export const ContentModel = model('Content',PostSchema)

