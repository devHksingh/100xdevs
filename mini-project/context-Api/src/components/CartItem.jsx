import React from 'react'
import { useCart } from '../context/Cart'

function CartItem() {
  const cart = useCart()
  const total = cart.items.reduce((a,b)=>a+b.price,0)

  return (
    <div>
        <h2>Cart</h2>
        {
          cart && cart.items.map((item )=> <li key={randomKey} >{item.name} - ${item.price}</li>)
        }
        <h4>Total Price :$ {total}</h4>
    </div>
  )
}

export default CartItem

function randomKey(){
  return Math.floor(Math.random()*99)
}