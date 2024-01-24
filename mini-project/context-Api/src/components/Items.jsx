import React from 'react'
import { useCart } from '../context/Cart'

function Items(props) {
    const cart = useCart()
    console.log("Cart info",cart);
  return (
    <div>
        <h2>Item Name: {props.name}</h2>
        <p>Price: $ {props.price}</p>
        <button onClick={()=>{
            cart.setItems([...cart.items,{name:props.name,price:props.price},])
        }}>Add to Cart</button>
    </div>
  )
}

export default Items