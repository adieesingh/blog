import React, { useState } from "react"
import { Header } from "../components/Header"
import { InputBox } from "../components/InputBox"
import { ButtonProps } from "../components/ButtonProps"
import axios from "axios"
import { Link, useNavigate } from "react-router"

type SigninProps={
   setLoggedIn:React.Dispatch<React.SetStateAction<boolean>>
}

export const SignIn=({setLoggedIn}:SigninProps)=>{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const navigate =useNavigate()
    const apiUrl= import.meta.env.VITE_APP_BACKEND_URL

    const handle =async ()=>{
        try {
        const response = await axios.post(`${apiUrl}/api/v1/signin`,{
        username,
        password
     })
     if(response){
        alert("Sign In Sucessfully")
        console.log(response.data.token)
        localStorage.setItem("token",response.data.token)
        setLoggedIn(true)
        console.log(setLoggedIn)
        navigate('/')
       
     }
     if(!response){
        alert("Not response")
     }
        } catch (error) {
           console.log(error)
           alert("something went wrong") 
        }
     
    }
    return <div className="h-screen w-100vw flex justify-center items-center border-r border-[]">
            <div className="h-auto sm:max-w-full md:max-w-full lg:max-w-86 border border-[#E5E5E5] flex flex-col p-4">
                <Header bold="dark" size="lg"  text="Sign In" align={true}></Header>
                <InputBox text="Username" type="text" placeholder="JohnDoe@123" name="username" value={username} onChange={(e)=>setUsername(e.target.value)} ></InputBox>
                <InputBox text="Password" type="password" placeholder="John@1234" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></InputBox>
                <div className="py-4">

                </div>
               
                <ButtonProps 
                 
                  varaint="primary"
                  
                  size="lg"

                 onClick={handle} text="Sign In"></ButtonProps>
                 
                 <div className="flex gap-1">
                 <span className="text-sm">Already Have a Account ?</span>
                  <Link  to={'/signup'} className="text-sm underline font-bold"> Sign Up</Link>
               </div>
            </div>
            
    </div>
}