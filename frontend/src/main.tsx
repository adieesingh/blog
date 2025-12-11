import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Post } from './pages/Post.tsx'

createRoot(document.getElementById('root')!).render(
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<App></App>}></Route>
  <Route path='/post' element={<Post></Post>}></Route>
 </Routes>
 </BrowserRouter>
    
  
)
