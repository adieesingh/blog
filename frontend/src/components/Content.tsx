import { useEffect, useState } from 'react';
import { ReadMore } from "./ReadMore";
import axios from 'axios';



export function Content(){
  const [data,setData]=useState([])
  const apiUrl =import.meta.env.VITE_APP_BACKEND_URL
  
 useEffect(()=>{
      axios.get(`${apiUrl}/v1/post`).then((response)=>{
        
        setData(response.data.message)
        
      }).catch((err)=>{
          console.log(err)
      })
 },[])
  return <div>
    {
      data.map((res)=>(
        //@ts-ignore
        <ReadMore  limit={140} title={res.title} content={res.content}></ReadMore>
      ))
    }
  </div>
}