// import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../app/cartSlice';


function Cart() {
  const dispatch = useDispatch()
  const cartProducts = useSelector(state => state.cart);
  const handleRemove =(productId)=>{
    dispatch(remove(productId))
  }
  return (
    <div>
      <h2 className='text-white text-center text-4xl mb-6'>Cart</h2>
      <section className=' flex gap-4 flex-col'>
        {cartProducts.map(product => (
          <div key={product.id} className='border border-gray-600 flex items-center justify-between shadow-xl rounded-md '>
                <img src={product.image} alt={product.description} className='h-20' />
                <h4>{product.title}</h4>
                <h4 className='font-mono'>$ {product.price}</h4>
                <button onClick={()=> handleRemove(product.id)} className='border bg-red-600 text-black font-mono font-semibold px-4 py-1 rounded-lg hover:bg-red-400 mr-4'>Remove</button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Cart;
{/* <div>
        {
          products.map(product=>(
            <div key={product.id} className='border'>
                <img src={product.image} alt={product.description} />
                <h4>{product.title}</h4>
                <h4>{product.price}</h4>
                <button>Remove</button>
            </div>
          ))
        }
      </div> */}