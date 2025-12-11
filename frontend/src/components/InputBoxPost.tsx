type Sizes ="sm"|"md"|"lg"
type font= "sm"| "md"|"lg"
interface InputProps{
    size:Sizes,
    placeholder:string,
    value?:string,
    name:string,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    type:string
    fontWeight:font

}
const sizeVaraint ={

    sm:"size-24",
    md:"size-32",
    lg:"size-40"
    
}
const widthOfInputBox = "w-[100%] md:w-[80%] sm:w-[70%]"


const text ={
    lg:"text-6xl front-medium focus:outline-none",
    md:"text-3xl front-medium focus:outline-none",
    sm:"text-2xl front-medium focus:outline-none"
}

export const InputBoxContent =(props:InputProps)=>{
        return <input 
        className={`${sizeVaraint[props.size]} ${widthOfInputBox}  ${text[props.fontWeight]}`}
        
        placeholder={props.placeholder} 
        value={props.value} 
        name={props.name} 
        type={props.type} 
        onChange={props.onChange}/>
}