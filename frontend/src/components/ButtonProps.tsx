import type {  ReactElement } from "react"
import { hover } from "../icons/PostIcon"
 



 const defaultStyle ="flex gap-3 font-normal"
 const hoverStyle="hover:cursor-pointer text-[#727272] hover:text-black"
 interface Button{
   text:string,
   startIcon?:ReactElement,
   onClick?:React.MouseEventHandler<HTMLButtonElement>
   varaint?:Variants
   align?:"justify-center"
   size?:Sizes

   
  
}
type Sizes ="sm"|"md"|"lg"
const sizeVaraint={
  sm:"text-sm",
  md:"text-md",
  lg:"text-2xl"

}
type Variants ="primary"| "secondary"
const VariantsStyle={
  primary:"bg-purple-500 text-white",
  secondary:"bg-red-500 text-white"
}
const padding ="py-5"


export const ButtonProps=(props:Button)=>{
    return <button onClick={props.onClick} className={`${hoverStyle} ${defaultStyle} ${VariantsStyle[props.varaint]} ${hover} ${props.align} ${padding} ${sizeVaraint[props.size]}`}>{props.startIcon} {props.text}</button>
   

}