// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useQuery} from '@tanstack/react-query'

const fetchProducts = async ()=>{
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    
    return data.products
    

}

function Products() {

    const {isLoading,error,data:products} = useQuery({queryKey:["products"],queryFn: fetchProducts,staleTime:60*1000})
    
    // const [products,setProducts] = useState([])
    // const [isLoading, setIsLoading] = useState(false)
    // const [errors,setErrors] = useState(null)

    // useEffect(()=>{
    //     const fetchProducts = async ()=>{
    //         setIsLoading(true)
    //         setErrors(null)
            
    //         try {

    //             const response = await fetch('https://dummyjson.com/products')
    //             const data = await response.json()
    //             setIsLoading(false)
    //             setProducts(data.products)
    //             console.log(data.products);
                
    //         } catch (error) {
    //             setErrors(error.message)
    //             setIsLoading(false)
    //         }
            

    //     }

    //     fetchProducts()
    // },[])

    if(isLoading){
        return (
            <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 " >
                <div className="flex flex-col gap-4 w-52">
                    <div className="w-full h-32 skeleton"></div>
                    <div className="h-4 skeleton w-28"></div>
                    <div className="w-full h-4 skeleton"></div>
                    <div className="w-full h-4 skeleton"></div>
                </div>
                <div className="flex flex-col gap-4 w-52">
                    <div className="w-full h-32 skeleton"></div>
                    <div className="h-4 skeleton w-28"></div>
                    <div className="w-full h-4 skeleton"></div>
                    <div className="w-full h-4 skeleton"></div>
                </div>
                <div className="flex flex-col gap-4 w-52">
                    <div className="w-full h-32 skeleton"></div>
                    <div className="h-4 skeleton w-28"></div>
                    <div className="w-full h-4 skeleton"></div>
                    <div className="w-full h-4 skeleton"></div>
                </div>
                <div className="flex flex-col gap-4 w-52">
                    <div className="w-full h-32 skeleton"></div>
                    <div className="h-4 skeleton w-28"></div>
                    <div className="w-full h-4 skeleton"></div>
                    <div className="w-full h-4 skeleton"></div>
                </div>
                <div className="flex flex-col gap-4 w-52">
                    <div className="w-full h-32 skeleton"></div>
                    <div className="h-4 skeleton w-28"></div>
                    <div className="w-full h-4 skeleton"></div>
                    <div className="w-full h-4 skeleton"></div>
                </div>
                <div className="flex flex-col gap-4 w-52">
                    <div className="w-full h-32 skeleton"></div>
                    <div className="h-4 skeleton w-28"></div>
                    <div className="w-full h-4 skeleton"></div>
                    <div className="w-full h-4 skeleton"></div>
                </div>
                <div className="flex flex-col gap-4 w-52">
                    <div className="w-full h-32 skeleton"></div>
                    <div className="h-4 skeleton w-28"></div>
                    <div className="w-full h-4 skeleton"></div>
                    <div className="w-full h-4 skeleton"></div>
                </div>
                <div className="flex flex-col gap-4 w-52">
                    <div className="w-full h-32 skeleton"></div>
                    <div className="h-4 skeleton w-28"></div>
                    <div className="w-full h-4 skeleton"></div>
                    <div className="w-full h-4 skeleton"></div>
                </div>
                <div className="flex flex-col gap-4 w-52">
                    <div className="w-full h-32 skeleton"></div>
                    <div className="h-4 skeleton w-28"></div>
                    <div className="w-full h-4 skeleton"></div>
                    <div className="w-full h-4 skeleton"></div>
                </div>
                <div className="flex flex-col gap-4 w-52">
                    <div className="w-full h-32 skeleton"></div>
                    <div className="h-4 skeleton w-28"></div>
                    <div className="w-full h-4 skeleton"></div>
                    <div className="w-full h-4 skeleton"></div>
                </div>
                <div className="flex flex-col gap-4 w-52">
                    <div className="w-full h-32 skeleton"></div>
                    <div className="h-4 skeleton w-28"></div>
                    <div className="w-full h-4 skeleton"></div>
                    <div className="w-full h-4 skeleton"></div>
                </div>
                
            </div>
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
    <div className="bg-gray-600 ">
            
      <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-200">Customers also purchased</h2>

        <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              <div className="w-full overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.thumbnail}
                  alt={product.description}
                  className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                />
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <h3 className="text-sm text-gray-200">
                    <Link to={`/products/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-green-400">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-slate-100">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products