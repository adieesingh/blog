import { useRecoilValue } from "recoil";
import { IsSideBarOpen } from "../atom/IsSideBarOpen";
import { Home } from "../icons/Home";
import { Libary } from "../icons/Libary";
import { Profile } from "../icons/Profile";
import { Stories } from "../icons/Stories";
import { SideBarItem } from "./SideBarItem";
const style =
  "h-screen realtive w-58 bg-gray-100 flex-col items-center border-r-1 border-[#727272] pt-4 pl-4 duration-500 ";
export const SideBar = () => {
  const isSideOpen = useRecoilValue(IsSideBarOpen);
  console.log(isSideOpen);
  return (
    <div
      className={`${
        isSideOpen ? "transition-all z-40 -translate-x-58 top-0 left-0" : style
      }`}
    >
      <SideBarItem
        startIcon={<Home size="md"></Home>}
        text="Home"
      ></SideBarItem>
      <SideBarItem
        startIcon={<Libary size="md"></Libary>}
        text="Libary"
      ></SideBarItem>
      <SideBarItem
        startIcon={<Profile size="lg"></Profile>}
        text="Profile"
      ></SideBarItem>
      <SideBarItem
        startIcon={<Stories size="md"></Stories>}
        text="Stories"
      ></SideBarItem>
    </div>
  );
};
