import { Profile } from "../icons/Profile"

interface RightSideBarProps{
    text:string
    name:string
    date:string
}
const padding ="pt-4 pb-4"
export function RightSideBar(props:RightSideBarProps){
    return <div >
        
        <div className={`flex items-center gap-2 ${padding}`}>
            <Profile size="md"></Profile>
            <p>
                {props.name}
            </p>
           
            
        </div>
         <div className="font-bold">
               <p>Hello there dkscnkcnkcm</p>     
            </div>
        <div>
        <div className={`text-[#727272] text-sm ${padding} font-normal`}>
            {props.date}
        </div>

        </div>
    </div>
}