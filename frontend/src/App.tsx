import { BrowserRouter, Route,  Routes } from 'react-router'
import { Dashboard } from './pages/Dashboard'
import { SignIn } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Post } from './pages/Post'

function App() {
  
   
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard ></Dashboard>}></Route>
      <Route path="/signin" element={<SignIn></SignIn>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/post' element={<Post></Post>}></Route>
    </Routes>
    </BrowserRouter>  
    </div>
  )
}

export default App
