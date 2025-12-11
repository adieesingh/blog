
import { useNavigate } from "react-router"
import { Notification } from "../icons/Notification"
import { PostIcon } from "../icons/PostIcon"
import { Profile } from "../icons/Profile"
import { Header, type Headerprops } from "./Header"
import { Menu } from "./Menu"
interface NavBarProps{
    headers: Headerprops,
    
}

export const NavBar =(props:NavBarProps)=>{
    const navigate = useNavigate()
    return <nav className=" w-full flex justify-between border-b p-4 top-0 left-0 z-50">
        <div className="flex gap-5 justify-center items-center custom-font pl-4">
            <Menu></Menu>
            <Header {...props.headers}></Header>
        </div>
        <div>
        <ul className="flex gap-4 ">
            <li><PostIcon onClick={()=>navigate('/post')}  size="lg"  ></PostIcon> </li>
            <li><Notification size="lg"></Notification></li>
            <li><Profile size="xl"></Profile></li>
        </ul>
        </div>
    
    </nav>
}