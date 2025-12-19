import { BrowserRouter, Route,  Routes } from 'react-router'
import { Dashboard } from './pages/Dashboard'
import { SignIn } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Post } from './pages/Post'
import { useRecoilState } from 'recoil'
import { isLoggedIn, isLoggedInAtom } from './atom/IsLoggedIn'











function App() {
  const [isLoggedIn,setLoggedIn]=useRecoilState(isLoggedInAtom)
   
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard setLoggedIn={setLoggedIn}></Dashboard>}></Route>
      <Route path="/signin" element={<SignIn></SignIn>}></Route>
      <Route path='/sigmup' element={<Signup></Signup>}></Route>
      <Route path='/post' element={<Post></Post>}></Route>
    </Routes>
    </BrowserRouter>  
    </div>
  )
}

export default App
