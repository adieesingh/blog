import './App.css'
// import { Content } from './components/Content'
import { MainContent } from './components/MainContent'
import { NavBar } from './components/NavBar'
// import { RightSideBar } from './components/RightSideBar'
import { SideBar } from './components/SideBar'
import { StaffPicks } from './components/StaffPicks'











function App() {
 

  return (
    <div>
      <div>
        <NavBar headers={{text:"Medium", bold:"dark",size:"lg" }}></NavBar>
      </div>
      <div className='flex'>
        <SideBar></SideBar>
        <MainContent></MainContent>
        <StaffPicks></StaffPicks>

      </div>
    </div>
    
  )
}

export default App
