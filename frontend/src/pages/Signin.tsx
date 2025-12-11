import { useState } from "react"
import { Header } from "../components/Header"
import { InputBox } from "../components/InputBox"
import { ButtonProps } from "../components/ButtonProps"
import axios from "axios"


export const SignIn=()=>{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const handle =async ()=>{
        try {
        const response = await axios.post("http://localhost:3000/api/v1/signin",{
        username,
        password
     })
     if(response){
        alert("Sign In Sucessfully")
        console.log(response.data.token)
        localStorage.setItem("token",response.data.token)
     }
     if(!response){
        alert("Not response")
     }
        } catch (error) {
           console.log(error)
           alert("something went wrong") 
        }
     
    }
    return <div className="h-screen w-100% flex justify-center items-center border-r border-[]">
            <div className="h-auto w-[50%] border border-[#E5E5E5] flex flex-col p-4">
                <Header bold="dark" size="lg"  text="Sign In"></Header>
                <InputBox text="Username" type="text" placeholder="JohnDoe@123" name="username" value={username} onChange={(e)=>setUsername(e.target.value)} ></InputBox>
                <InputBox text="Password" type="password" placeholder="John@1234" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></InputBox>
                <ButtonProps 
                
                 onClick={handle} text="Sign In"></ButtonProps>
            </div>
    </div>
}