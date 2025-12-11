
import { Home } from "../icons/Home"
import { Libary } from "../icons/Libary"
import { Profile } from "../icons/Profile"
import { Stories } from "../icons/Stories"
import { SideBarItem } from "./SideBarItem"


export const SideBar =()=>{
   
    return (
        <div className="h-screen hidden sticky w-40 md:flex flex-col items-center  border-[#727272] top-0 left-0 pt-4 md:visible border-r">
           <SideBarItem startIcon={<Home size="md"></Home>} text="Home"></SideBarItem>
           <SideBarItem startIcon={<Libary size="md"></Libary>} text="Libary"></SideBarItem>
           <SideBarItem startIcon={<Profile size="lg"></Profile>} text="Profile"></SideBarItem>
           <SideBarItem startIcon={<Stories size="md"></Stories>} text="Stories"></SideBarItem>
           
           
        </div>

    )
}