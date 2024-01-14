import React, { Suspense, useState } from 'react'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'

import './App.css'
// import Dashborad from './components/Dashborad'
// import Landing from './components/Landing'

const Dashborad = React.lazy(()=> import('./components/Dashborad'))
const Landing =  React.lazy(()=> import('./components/Landing'))

function App() {
  // const [count, setCount] = useState(0)
  // const navigate = useNavigate()
  // suspense API
  return (
    <div>
      
      <BrowserRouter>
      <AppBar></AppBar>
      <Routes>
        <Route path='/dashboard' element={<Suspense fallback={"loading ..."}><Dashborad></Dashborad></Suspense>}></Route>
        <Route path='/' element={<Suspense fallback={"loading 1...."}><Landing/></Suspense>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

function AppBar(){
  const navigate = useNavigate()
  return (
    <div>
      <nav >
        <button onClick={()=>{
          navigate("/")
        }}>Landing Page</button>
        <button onClick={()=>{
          navigate("/dashboard")
        }}>Dashborad</button>
      </nav>
    </div>
  )
}

export default App
