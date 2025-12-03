interface Headerprops{
    text:string
}

export const Header =(props:Headerprops)=>{
    return <h2 className="text-4xl font-semibold text-center">{props.text}</h2>
}