
import { MainContent } from "../components/MainContent";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import { StaffPicks } from "../components/StaffPicks";

export function Dashboard(){
 
    return <div>
     
      <div className="border-b-2 w-full sticky top-0">
      <NavBar headers={{text:"Medium", bold:"dark",size:"lg" }}></NavBar>
       </div>
      
      <div className='flex'>
        <SideBar></SideBar>
        <MainContent></MainContent>
        <StaffPicks></StaffPicks>
        </div>
    </div>
  
}