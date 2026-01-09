import { createContext } from "react"; 


export const IsLoggedInContext =createContext<boolean>(false)

// type IsLoggedInType={
//     isLoggedIn:boolean,
//     setLoggedIn?:React.Dispatch<React.SetStateAction<Boolean>>
// }

export const IsLoggedInProvider =(props:any)=>{
   
    return (
        <IsLoggedInContext.Provider  value={false}>
            {props.childern}
        </IsLoggedInContext.Provider>
    )
}