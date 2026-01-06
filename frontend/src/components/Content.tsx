import { useEffect, useState } from 'react';
import { ReadMore } from "./ReadMore";
import axios from 'axios';
import { Skeleton } from './Skeleton';



export function Content(){
  const [data,setData]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const apiUrl =import.meta.env.VITE_APP_BACKEND_URL
  
 useEffect(()=>{
      setIsLoading(true)
      axios({
        method:"GET",
        url:`${apiUrl}/v1/post`,
  
      }).then((response)=>{
       setData(response.data.message || response.data.response || [])
      }).catch((err)=>{
        console.log(err)
      }).finally(()=>setIsLoading(false))   
 },[])
 
  if(isLoading){
    return <div className='w-full'>
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
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
        <ReadMore  limit={140} key={res._id} title={res.title} content={res.content} imageUrl={res.image.imgUrl}></ReadMore>
      ))
    }
  </div>
  }
 
}