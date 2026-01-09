import { BrowserRouter, Route,  Routes } from 'react-router'
import { Dashboard } from './pages/Dashboard'
import { SignIn } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Post } from './pages/Post'

import { Navigate } from 'react-router'
import {   useRecoilState } from 'recoil'
import { isLoggedInAtom } from './atom/IsLoggedIn'




function App() {
  const [isLoggedIn,setLoggedIn] =useRecoilState(isLoggedInAtom)
   
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={isLoggedIn?(<Dashboard></Dashboard>) :(<Navigate to="/signin" replace></Navigate>)}></Route>
      <Route path="/signin" element={<SignIn setLoggedIn={setLoggedIn}></SignIn>}></Route>
      <Route path='/signup' element={<Signup ></Signup>}></Route>
      <Route path='/post' element={isLoggedIn ?(<Post ></Post>): (<Navigate to={`/signin`} replace></Navigate>)}></Route>
    </Routes>
    </BrowserRouter>  
    </div>
  )
}

export default App
