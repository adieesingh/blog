import { useState } from "react"
import { InputBoxContent } from "../components/InputBoxPost"
import axios from "axios"
import { NavBar } from "../components/NavBar"
import { ButtonProps } from "../components/ButtonProps"
import { useNavigate } from "react-router"
import { ImageDrop } from "../components/ImageDrop"



export const Post =()=>{
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const navigate =useNavigate()
    const [img,setImage]=useState<File | null>(null)
    const formdata = new FormData()
    formdata.append("photo",img)
    console.log(formdata)
    const handle =async ()=>{
        try {
            await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/v1/blog`,{
            title,
            content
        },{
            headers:{
                'Authorization':`${localStorage.getItem('token')}`
            }
            
        
        }).then(()=>{
            alert("data inserted succesfully")
            
            navigate("/")

        }).catch((error)=>{
            console.log(error)
        })

        await axios({
            method:"post",
            url:"http://localhost:3000/upload",
            data:formdata,
            headers:{"Content-Type":"multipart/form-data","Authorization":`${localStorage.getItem('token')}`}
        }).then(()=>{
            alert("Photo Uploaded Sucessfully")
        }).catch((error)=>{
            console.log(error)
        })
        } catch (error) {
            console.log(error)
        }
    }
    
    return <div className="h-screen W-full" >
       <NavBar headers={{bold:"dark",size:"lg",text:"Medium"}}></NavBar>
        <div className="max-w-full  flex flex-col justify-center items-center">
            <InputBoxContent
            size="md"
            name="title"
            placeholder="Title"
            onChange={(e)=>setTitle(e.target.value)}
            type="text"
            value={title}
            fontWeight="lg"            
            ></InputBoxContent>
            <InputBoxContent
            name="content"
            onChange={(e)=>{setContent(e.target.value)}}
            placeholder="Content"
            size="sm"
            type="textarea"
            value={content}
            fontWeight="sm"
            ></InputBoxContent>
           
            <ImageDrop onChange={(e)=>setImage(e.target.files[0])}></ImageDrop>
            <div>
                <ButtonProps  text="Publish" varaint="secondary" onClick={handle}  size="lg" rounded="rounded-md" padding="px-6"></ButtonProps>
            </div>
            
        </div>
    </div>
}