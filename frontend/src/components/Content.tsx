import { useEffect, useState } from 'react';
import { ReadMore } from "./ReadMore";
import axios from 'axios';
import { Skeleton } from './Skeleton';



export function Content(){
  const [data,setData]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const apiUrl =import.meta.env.VITE_APP_BACKEND_URL
  
 useEffect(()=>{
      
      const response =axios.get(`${apiUrl}/v1/post`).then((response)=>{
        
        setData(response.data.message)
        
      }).catch((err)=>{
          console.log(err)
      })
      if(response){
        setIsLoading(false)
       
      }
      
 },[])
 
  if(isLoading){
    return <div >
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>



      </div>
  }
  if(!isLoading) {
      return <div>
    {
      data.map((res)=>(
        //@ts-ignore
        <ReadMore  limit={140} title={res.title} content={res.content}></ReadMore>
      ))
    }
  </div>
  }
 
}