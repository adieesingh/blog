import { useState } from "react"
import { InputBoxContent } from "../components/InputBoxPost"
// import { NavBar } from "../components/NavBar"
import axios from "axios"
import { NavBar } from "../components/NavBar"
import { ButtonProps } from "../components/ButtonProps"
import { useNavigate } from "react-router"




export const Post =()=>{
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const navigate =useNavigate()
    const handle =async ()=>{
        try {
            console.log(import.meta.env.VITE_APP_BACKEND_URL)
       
        await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/v1/blog`,{
            title,
            content
        },{
            headers:{
                'Authorization':`${localStorage.getItem('token')}`
            }
            
        
        },
    
).then(()=>{
            alert("data inserted succesfully")
            
            navigate("/")

        }).catch((error)=>{
            console.log(error)
        })
         } catch (error) {
            console.log(error)
        }
    }
    
    return <div className="h-screen W-full" >
       <NavBar headers={{bold:"dark",size:"lg",text:"Medium"}}></NavBar>
        <div className="w-[80%] mt-5 flex m-20 flex-col">
            <InputBoxContent
            size="md"
            name="title"
            placeholder="Enter a Title"
            onChange={(e)=>setTitle(e.target.value)}
            type="text"
            value={title}
            fontWeight="lg"            
            ></InputBoxContent>
            <InputBoxContent
            name="content"
            onChange={(e)=>{setContent(e.target.value)}}
            placeholder="Enter a Content"
            size="sm"
            type="textarea"
            value={content}
            fontWeight="sm"
            ></InputBoxContent>

            <ButtonProps  text="Publish" varaint="secondary" onClick={handle} align="justify-center" size="lg"></ButtonProps>
        </div>
    </div>
}