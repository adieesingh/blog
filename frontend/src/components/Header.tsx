type Sizes= "sm"| "md" | "lg"
type bolds = "light"|"medium"|"dark"
export interface Headerprops{
    text:string
    size?:Sizes
    bold?:bolds
    align?:boolean
    style?:string
}

const boldVaraint ={
    light:"font-medium",
    medium:"font-semibold",
    dark:"font-bold"
}
const sizeVaraint ={
    sm:"text-xl",
    md:"text-2xl",
    lg:"text-4xl"
}
const style= "cursor-pointer"

export const Header =(props:Headerprops)=>{
    return <h2 className={`${sizeVaraint[props.size]} ${boldVaraint[props.bold]} ${props.align?"justify-center text-center":""} ${style}`}>{props.text}</h2>
}