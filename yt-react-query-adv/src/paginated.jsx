import { useQuery,keepPreviousData } from '@tanstack/react-query';
// import { useState } from 'react';
import {useSearchParams} from 'react-router-dom'
import debounce from 'lodash.debounce'

function Products() {
    
    const [searchParams,setSearchParams] = useSearchParams({skip:0,limit:4})

    // const[limit] = useState(4)
    // const[skip,setSkip] = useState(0)

    const skip = parseInt(searchParams.get('skip') || 0)
    const limit = parseInt(searchParams.get('limit') || 4)

    const q = searchParams.get('q') || ''

    const category = searchParams.get('category') || ''
    
    
    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            return await fetch('https://dummyjson.com/products/categories').then((res) =>
                res.json()
            );
        },
    });

    const { data: products } = useQuery({
        queryKey: ['products',limit,skip,q,category],
        queryFn: async () => {
            
            let url =`https://dummyjson.com/products/search?limit=${limit}&skip=${skip}&q=${q}`
            
            if(category){
                url =`https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`
            }
            
            return await fetch(url).then((res) => res.json());
            // return data;
        },
        placeholderData:keepPreviousData,
        staleTime: 60*1000
    });

    const handleMove = (moveCount)=>{
        // next btn
        //skip = 0, moveCount =4
        // 0+4=4 => 4+4=8

        //prev btn
        //skip =0 moveCount =-4
        //0+(-4)=-4 not valid value
        
        setSearchParams((prev)=>{
            prev.set('skip',Math.max(skip + moveCount,0))
            return prev
        })
        
        // setSkip((prevSkip)=>{
        //     return Math.max(prevSkip + moveCount,0)
        // })
    }

    return (
        <>
            <div className="bg-white">
                <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            My store
                        </h2>
                    </div>
                    <div>
                        <div className="relative flex items-center gap-8 mt-2 mb-4 rounded-md">
                            <input
                                onChange={debounce((e) => {
                                    setSearchParams((prev)=>{
                                        prev.set('q',e.target.value)
                                        prev.set('skip',0)
                                        prev.delete('category')
                                        return prev
                                    })
                                },1000)}
                                type="text"
                                name="price"
                                id="price"
                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="IPhone"
                            />
                            <select className="p-2 border" onChange={(e) => {
                                setSearchParams((prev)=>{
                                    prev.set('skip',0)
                                    prev.delete('q')
                                    prev.set('category',e.target.value)
                                })
                            }}>
                                <option>Select category</option>
                                {categories?.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products?.products?.map((product) => (
                            <div key={product.id} className="relative group">
                                <div className="w-full overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-64">
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="flex justify-between mt-4">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href="">
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute inset-0"
                                                />
                                                {product.title}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {product.category}
                                        </p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">
                                        ${product.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-2 mt-12">
                        <button
                            className="px-4 py-1 text-white bg-purple-500 rounded"
                            disabled={skip<limit}
                            onClick={() => {handleMove(-limit)}}>
                            Prev
                        </button>
                        <button
                            className="px-4 py-1 text-white bg-purple-500 rounded"
                            disabled={limit + skip >= products?.total}
                            onClick={() => {handleMove(limit)}}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;