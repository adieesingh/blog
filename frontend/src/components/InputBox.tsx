interface InputBox {
    text:string,
    placeholder:string,
    type:string,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    name:string
    value:string
}
export const deafultStyle = "px-10 py-1 border border-[#E5E5E5] w-[90%]"
export const styleText = "text-md font-normal"
export const InputBox=(props:InputBox)=>{
    return <div>
        <div className={`${styleText}`}>{props.text}</div>
        <input value={props.value} onChange={props.onChange} type={props.type} name={props.name} placeholder={props.placeholder} className={`${deafultStyle} `}/>
    </div>
}

