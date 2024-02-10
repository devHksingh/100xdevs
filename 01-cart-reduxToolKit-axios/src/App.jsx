import {BrowserRouter, Route, Routes} from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './components/Home'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import './App.css'
import store from './app/store'

function App() {
  

  return (
    <>
      <Provider store={store}>
          <BrowserRouter>
              <NavBar/>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/history' element={<Cart />}></Route>
              <Route path='/user' element={<Cart />}></Route>
            </Routes>
          </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
