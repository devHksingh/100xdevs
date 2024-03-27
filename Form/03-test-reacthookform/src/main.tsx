import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {store} from './app/store.ts'
import { Provider } from 'react-redux'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.tsx'
import Home from './components/Home.tsx'
import ShadcnForm from './components/ShadcnForm/ShadcnForm.tsx'
import DaisyUiForm from './components/DaisyUiForm/DaisyUiForm.tsx'
import LoginForm from './components/LoginForm/LoginForm.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='infoForm' element={<ShadcnForm/>} />
      <Route path='accountForm' element={<DaisyUiForm/>} />
      <Route path='loginForm' element={<LoginForm/>} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
    <Provider store={store}>
      <App />    
    </Provider>
  </React.StrictMode>,
)
