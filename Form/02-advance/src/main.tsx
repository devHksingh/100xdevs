import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Laypout from './Laypout.tsx'

import Home from './components/Home/Home.tsx'
import About from './components/About/About.tsx'
import Register from './components/Register/Register.tsx'
import UserForm from './components/UserForm/UserForm.tsx'
import AddressForm from './components/AddressForm/AddressForm.tsx'
import LoginForm from './components/LoginForm/LoginForm.tsx'
import Login from './components/Login/Login.tsx'
import { store } from './app/store.ts'
import { Provider } from 'react-redux'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Laypout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>} />
      <Route path='register' element={<Register/>}>
        <Route path='userForm' element={<UserForm/>}/>
        <Route path='addressForm' element={<AddressForm/>}/>
        <Route path='loginForm' element={<LoginForm/>}/>
      </Route>
      <Route path='login' element={<Login/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    
    <App />
    </Provider>
  </React.StrictMode>,
)
