import axios from "axios";
import { ButtonProps } from "../components/ButtonProps";
import { Header } from "../components/Header";
import { InputBox } from "../components/InputBox";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { BACKEND_URL } from "../config";

export const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate =useNavigate()

  const handle = async () => {
    console.log("First step");

    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
       username,
       password,
       name
      },{
        headers:{
            'Content-Type':'application/json'
        }
      });   
      
      if (response) {
        alert("Signup Sucessfully");
        console.log("Register");
        navigate('/signin')
      }
      if (!response) {
        alert("Not register");
        //@ts-ignore
        console.log(response.data.error)

      }
    } catch (error) {
      alert("something went wrong");
      console.log(error)
    }
  };

  return (
    <div className="h-screen w-100vw flex justify-center items-center">
      <div className="w-[30%] h-auto border border-[#E5E5E5] flex flex-col p-4 justify-center">
        <Header 
        bold="dark"
        size="lg"
        align={true}


        text="Sign Up"></Header>
        <InputBox
          text="Name"
          name="name"
          placeholder="John Doe"
          type="text"
          value={name}
          

          onChange={(e) => setName(e.target.value)}
        ></InputBox>
        <InputBox
          text="Email"
          name="email"
          placeholder="Email address"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></InputBox>
        <InputBox
          text="Password"
          name="password"
          placeholder="John@1234567"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></InputBox>
            <div className="py-3">

            </div>
        
          <ButtonProps
        align="justify-center"
        rounded={true}
        varaint="primary"
        size="md"


        
          
        text="Sign In"
          
        onClick={handle}
        
        ></ButtonProps>
        <span>Already Have a Account/</span>
        <Link  to={'/signin'}>signin</Link>
           
      
      </div>
    </div>
  );
};
