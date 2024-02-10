// import React from 'react'

import { useEffect, useState } from "react"
// import axios from 'axios'
import { add } from "../app/cartSlice"
import {  useDispatch ,useSelector } from "react-redux"
import { fetchProducts } from "../app/productSlice"
import { STATUSES } from "../app/productSlice"
function Home() {
  const dispatch = useDispatch()
  const {data:products,status} = useSelector((state)=> state.product)
  // const [products,setProducts] = useState([])
  
  useEffect(()=>{
  //   const fetchProduct = async()=>{
  //     try {
        
  //         const productsData= await axios.get('https://fakestoreapi.com/products')
  //         // console.log(productsData.data);
  //         setProducts(productsData.data)
  //     } catch (error) {
  //       console.error(`Error ${error}`);
  //     }
  // }
  // fetchProduct()
  dispatch(fetchProducts())
    
  },[])
  // console.log(products);
  const handleAdd =(product)=>{
    // product => store at redux store
    dispatch(add(product))
  }

  if(status === STATUSES.LOADING){
    return <h2 className="text-center font-mono font-bold text-4xl text-amber-500">LOADING..........</h2>
  }
  if(status === STATUSES.ERROR){
    return <h1 className="text-center font-mono font-bold text-4xl text-red-500">ERROR !! Something went wrong</h1>
  }

  return (
    <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4  lg:gap-6 p-8 ">
      {products.map((product)=>(
        <div key={product.id} className="">
            {/* {product.title} */}
            <section className=''>
                <div className='w-80 h-[28rem] outline rounded-xl shadow-lg'>
                    <div id='product-img' className='bg-white h-[50%]'>
                        <img src={product.image} alt={product.description}  className='h-full w-full object-contain'/>
                    </div>
                    <div className=' h-[34%] rounded-lg flex flex-col items-center justify-center mt-3 p-2'>
                        <h2 className='text-center pt-2 text-lg capitalize font-bold antialiased font-mono mt-2'>{product.title} </h2>
                        <p className='text-center mt-1 text-xl ordinal slashed-zero tabular-nums font-medium text-amber-600'>${product.price}</p>
                        
                        <div className='flex justify-center space-x-5 mt-3    '>
                        <button className=' rounded-lg px-4 py-1   capitalize text-md text-black transition ease-in-out delay-250 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 font-mono font-bold text-xl'> buy</button>
                        <button className='border  rounded-lg px-4 py-1 text-black capitalize transition ease-in-out delay-250 bg-gray-400 hover:-translate-y-1 hover:scale-110 hover:bg-sky-400 duration-300 font-bold text-xl' onClick={()=>handleAdd(product)}> cart</button>
                        </div>  

                    </div>
                </div>
            </section>
        </div>
      ))}
    </div>
  )
}

export default Home