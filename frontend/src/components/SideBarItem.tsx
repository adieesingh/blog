import type { ReactElement } from "react";



interface SideBarItemProps{
    text:string,
    startIcon:ReactElement
}
const hover ="hover:cursor-pointer text-[#727272] hover:text-black focus:outline-none"
const deafultStyleSideBar ="gap-3 flex pt-3 pb-3 w-32 pl-3 items-center "
export function SideBarItem(props:SideBarItemProps){
    
    return <button className={`${deafultStyleSideBar} ${hover}`}>{props.startIcon} {props.text}</button>

}