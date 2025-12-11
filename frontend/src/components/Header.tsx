type Sizes= "sm"| "md" | "lg"
type bolds = "light"|"medium"|"dark"
export interface Headerprops{
    text:string
    size?:Sizes
    bold?:bolds
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

export const Header =(props:Headerprops)=>{
    return <h2 className={`${sizeVaraint[props.size]} ${boldVaraint[props.bold]}`}>{props.text}</h2>
}