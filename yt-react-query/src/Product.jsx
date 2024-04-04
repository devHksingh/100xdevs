// import { Link } from "react-router-dom";
import {useQuery,useMutation} from '@tanstack/react-query'
import {useParams} from 'react-router-dom'
import axios from 'axios'



function Product() {
  const params = useParams()
  console.log(params);
  
  // mutation
  
  const mutation = useMutation({
    mutationFn: (newProduct) => {
      return axios.put(`https://dummyjson.com/products/${params.productId}`, newProduct)
    },
  })
  const fetchProduct = async ()=>{
    const response = await fetch(`https://dummyjson.com/products/${params.productId}`)
    const data = await response.json()
    
    return data
    
  
  }
  const {isLoading,error,data:product} = useQuery({queryKey:["product",params.productId],queryFn: fetchProduct,staleTime:60*1000})

  if(isLoading){
    return (
        <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 " >
            <div className="flex flex-col gap-4 w-52">
                <div className="w-full h-32 skeleton"></div>
                <div className="h-4 skeleton w-28"></div>
                <div className="w-full h-4 skeleton"></div>
                <div className="w-full h-4 skeleton"></div>
            </div>
            
            
            
        </div>
    )
}
  if(mutation.isLoading){
    return (
      
       <h3 className='font-black text-center text-red-600 uppercase'>Updating...</h3>
    )
}

if(mutation.isError){
  return (
    <h2>Error while updating ....... {mutation.error.message}</h2>
  )
}

if(error){
    return (
        <div>
            <h3 className="text-red-600" >ERROR :{error.message}</h3>
        </div>
    )
}
  return (
  //   <section className="overflow-hidden text-gray-600 body-font">
  //   <div className="container px-5 py-24 mx-auto">
  //   <div className="flex flex-wrap mx-auto lg:w-4/5">
  //     <img alt="ecommerce" className="object-cover object-center w-full h-64 rounded lg:w-1/2 lg:h-auto" src={product.images[0]}/>
  //       <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
  //       <h2 className="text-sm tracking-widest text-gray-500 title-font">{product.category}</h2>
  //       <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">{product.title}</h1>
  //       <div className="flex mb-4">
  //         <span className="flex items-center">
  //         <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
  //           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  //         </svg>
  //         <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
  //           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  //         </svg>
  //         <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
  //           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  //         </svg>
  //         <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
  //           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  //         </svg>
  //         <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
  //           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  //         </svg>
  //         <span className="ml-3 text-gray-600">4 Reviews</span>
  //         </span>
  //         <span className="flex py-2 pl-3 ml-3 border-l-2 border-gray-200 space-x-2s">
  //         <a className="text-gray-500">
  //           <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
  //           <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
  //           </svg>
  //         </a>
  //         <a className="text-gray-500">
  //           <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
  //           <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
  //           </svg>
  //         </a>
  //         <a className="text-gray-500">
  //           <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
  //           <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
  //           </svg>
  //         </a>
  //         </span>
  //       </div>
  //     <p className="leading-relaxed">{product.description}</p>
  //       <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-100">
  //         <div className="flex">
  //         <span className="mr-3">Color</span>
  //         <button className="w-6 h-6 border-2 border-gray-300 rounded-full focus:outline-none"></button>
  //         <button className="w-6 h-6 ml-1 bg-gray-700 border-2 border-gray-300 rounded-full focus:outline-none"></button>
  //         <button className="w-6 h-6 ml-1 bg-indigo-500 border-2 border-gray-300 rounded-full focus:outline-none"></button>
  //         </div>
  //         <div className="flex items-center ml-6">
  //         <span className="mr-3">Size</span>
  //         <div className="relative">
  //           <select className="py-2 pl-3 pr-10 text-base border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500">
  //           <option>SM</option>
  //           <option>M</option>
  //           <option>L</option>
  //           <option>XL</option>
  //           </select>
  //           <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center text-gray-600 pointer-events-none">
  //           <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
  //             <path d="M6 9l6 6 6-6"></path>
  //           </svg>
  //           </span>
  //         </div>
  //         </div>
  //       </div>
  //       <div className="flex">
  //         <span className="text-2xl font-medium text-gray-900 title-font">${product.price}</span>
  //         <button className="flex px-6 py-2 ml-auto text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Button</button>
  //         <button className="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-gray-500 bg-gray-200 border-0 rounded-full">
  //         <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
  //           <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
  //         </svg>
  //         </button>
  //       </div>
  //       </div>
	// </div>
  // </div>
  //   </section>
  <div className='flex items-center justify-center gap-8'>
    
    <div className='grid grid-cols-1 gap-4 mx-auto mt-10 '>
      <div>
          <img className='object-cover object-center w-full h-64 rounded lg:max-w-[100%] ' src={product.thumbnail}/>
      </div>
      <div className='grid grid-cols-2 gap-4 lg:max-w-[100%] lg:h-auto'>
        <div>
          <img src={product.images[1]}/>
        </div>
        <div>
          <img src={product.images[2]}/>
        </div>
        <div>
          <img src={product.images[3]}/>
        </div>
        <div>
          <img src={product.images[4]}/>
        </div>
      </div>
    </div>
    <div className='flex gap-4 lg:flex-col w-[80%] '>
      <div className='grid grid-cols-1 gap-4'>
        <h1 className='w-full text-4xl font-bold text-center capitalize '>{product.title} </h1>
        <h1>{product.brand} </h1>
        <h1>{product.category} </h1>
        
      </div>
      <div className='grid grid-cols-1 gap-4'>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <span>{product.discountPercentage}% OFF</span>
        <span>Rating: {product.rating}</span>
        <span>left: {product.stock}</span>
        <button 
            onClick={() => {
              mutation.mutate({  title: 'Test title' })
            }}
          >
            Create 
          </button>
      </div>
    </div>
    
  </div>
  )
}

export default Product