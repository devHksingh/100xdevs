import { useState } from 'react'

import './App.css'
// import NavBar from './components/NavBar/NavBar'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'

function App() {
  // const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'element={<Layout/>}>
        <Route path=''element={<Home/>}/>
        

      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
