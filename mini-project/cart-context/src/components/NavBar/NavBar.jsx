import React from 'react'
import {Link,NavLink} from 'react-router-dom'

export default function NavBar() {
    return (
        <header className="shadow sticky z-50 top-0 ">
            <nav className="bg-gray-600 border-gray-200 px-4 lg:px-6 py-2.5 rounded-2xl max-w-dvw">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                    <h1 className='font-mono text-2xl font-black text-gray-200 shadow-xl rounded-md p-2'>Cart</h1>
                    
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Cart
                            
                        </Link>
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 lg:px-5 py-5 lg:py-5 mr-2 ml-2 focus:outline-none bg-[url('https://randomuser.me/api/portraits/thumb/men/75.jpg')]"
                        >
                                            
 
                        </Link>
                        
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Product
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Order History
                                </NavLink>
                            </li>


                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

