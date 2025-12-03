import axios from "axios";
import { ButtonProps } from "./components/ButtonProps";
import { Header } from "./components/Header";
import { InputBox } from "./components/InputBox";
import { useState } from "react";

export const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handle = async () => {
    console.log("First step");

    try {
      const response = await axios.post("http://localhost:3000/api/v1/signup", {
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
        <Header text="Sign Up"></Header>
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

        <ButtonProps
          text="Sign In"
          size="lg"
          variant="primary"
          onClick={handle}
        ></ButtonProps>
      </div>
    </div>
  );
};
