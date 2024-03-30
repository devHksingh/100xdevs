import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.tsx'
import Home from './components/Home.tsx'
import Resigter from './components/Resigter.tsx'
import FormOne from './components/FormOne.tsx'
import FormTwo from './components/FormTwo.tsx'
import FormThree from './components/FormThree.tsx'
import Login from './components/Login.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='resigter' element={<Resigter/>}/>
      <Route path='firstForm' element={<FormOne/>} />
      <Route path='secondForm' element={<FormTwo/>} />
      <Route path='thirdForm' element={<FormThree/>} />
      <Route path='login' element={<Login/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    
    <App />
    </Provider>
  </React.StrictMode>,
)
