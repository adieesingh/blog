import type {  ReactElement } from "react"
import { hover } from "../icons/PostIcon"
 



 const defaultStyle ="flex gap-3 font-normal"
 const hoverStyle="hover:cursor-pointer text-[#727272] hover:bg-indigo-700 hover:text-white"
 const responsive ="sm:max-w-full md:max-w-[90%] lg:max-w-56 h-auto"
 interface Button{
   text:string,
   startIcon?:ReactElement,
   onClick?:React.MouseEventHandler<HTMLButtonElement>
   varaint?:Variants
    size?:Sizes
   rounded?:"rounded-md"
   padding?:"px-6"|"px-3"|"px-2"
   cursor?:"cursor-progress"|"cursor-pointer"

   
  
}
  
type Sizes ="sm"|"md"|"lg"
const sizeVaraint={
  sm:"text-sm",
  md:"text-md",
  lg:"text-2xl"

}
type Variants ="primary"| "secondary"
const VariantsStyle={
  primary:"bg-indigo-500 text-white",
  secondary:"bg-indigo-200 text-white"
}


const padding="p-2 justify-center"
export const ButtonProps=(props:Button)=>{
    return <button onClick={props.onClick} className={`${hoverStyle} ${defaultStyle} ${VariantsStyle[props.varaint]} ${responsive} ${padding} ${hover} ${props.padding} ${props.cursor} ${props.rounded}  ${sizeVaraint[props.size]}`}>{props.startIcon} {props.text}</button>
   

}