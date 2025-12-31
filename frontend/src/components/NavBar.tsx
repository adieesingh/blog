import { useNavigate } from "react-router";
import { Notification } from "../icons/Notification";
import { PostIcon } from "../icons/PostIcon";
import { Profile } from "../icons/Profile";
import { Header, type Headerprops } from "./Header";
import { Menu } from "../icons/Menu";
import {  useSetRecoilState } from "recoil";
import { IsSideBarOpen } from "../atom/IsSideBarOpen";
interface NavBarProps {
  headers: Headerprops;
}

export const NavBar = (props: NavBarProps) => {
  const navigate = useNavigate();
 
   const isSiledOpen =useSetRecoilState(IsSideBarOpen)
   
  return (<nav className="sticky max-w-full flex justify-between p-4 top-0">
      <div className="flex justify-center items-center">
        <Menu onClick={()=>isSiledOpen(prev =>!prev)}></Menu>
      
        <Header {...props.headers} ></Header>
      </div>
      <div className="flex">
        <ul className="flex">
          <li >
            <PostIcon onClick={() => navigate("/post")} size="lg"></PostIcon>{" "}
          </li>
          <li className="hidden md:block">
            <Notification size="lg"></Notification>
          </li>
          <li className="hidden md:block">
            <Profile size="xl"></Profile>
          </li>
        </ul>
      </div>
    </nav>
  );
};
