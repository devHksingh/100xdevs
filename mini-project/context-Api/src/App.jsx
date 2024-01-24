// import { useState } from 'react'

import './App.css'
import Items from './components/Items'
import CartItem from './components/CartItem'
import { CartProvider } from './context/Cart'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Items</h1>
      <CartProvider>
      <Items name={"Hard Disk"} price={4000}/>
      <Items name={"Pen Drive"} price={2000}/>
      <Items name={"KeyBorad"} price={1000}/>
      <CartItem/>
      </CartProvider>
    </>
  )
}

export default App
