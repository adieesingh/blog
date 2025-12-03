import type { ReactElement } from "react"
type Sizes ="sm"| "md"|"lg"
type Variants = "primary"| "secondary"

const variantStyle={
    primary:"bg-[#61459e] text-white" ,
    secondary:"color-white"
}
const border ="rounded-sm "
const hoverStyle="hover:cursor-pointer hover:bg-purple-900"
interface Button{
   text:string,
   size:Sizes,
   startIcon?:ReactElement,
   endIcon?:ReactElement,
   variant:Variants
   onClick:React.MouseEventHandler<HTMLButtonElement>
}
export const sizeButton={
    sm:"px-4 py-1",
    md:"px-5 py-1",
    lg:"px-6 py-0.5" 
}
const height ="w-[90%] mt-4" 

export const ButtonProps=(props:Button)=>{
    return <button onClick={props.onClick} className={`${sizeButton[props.size]} ${variantStyle[props.variant]} ${border} ${height} ${hoverStyle} `}>{props.startIcon} {props.text}</button>
   
}