import mongoose, { model, Schema } from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URL || "")
const imageSchema = new Schema({
    fileName:{type:String,required:true},
    public_id:{type:String,required:true},
    imgUrl:{type:String,required:true}
    
},{_id:false})           
const UserSchema = new Schema({
    username:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    name:{type:String},

},{timestamps:true}) 

const PostSchema = new Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    image:{type:imageSchema,required:false},
    userId:{type:mongoose.Types.ObjectId,ref:'User',required:true}
},{timestamps:true})


export const UserModel = model('User',UserSchema)
export const ContentModel = model('Content',PostSchema)

