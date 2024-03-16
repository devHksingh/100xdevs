// import React from 'react'
import { ModeToggle } from '../mode-toggle'
import { Button } from '../ui/button'
import { ThemeProvider } from "@/components/theme-provider"
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    

  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {
      <header className='top-0 z-50 sticky shadow-md'>

        <nav className='border-b border-red-400 px-4 lg:px-6 py-2.5 flex justify-between'>
          <Link className='flex items-center' to='/'>
            <Button variant="link">Logo</Button>
          </Link>

          <div className='flex  items-center  lg:order-2'>
            <Link className='mr-2 lg:mr-6' to={'#'}>
              <Button variant="ghost" className='hover:border-e border-red-400'>Login</Button>
            </Link>

            <Link className='lg:mr-6' to={'#'}>
              <Button variant="ghost" className=' hover:border-e border-red-400 mr-4'>Profile</Button>
            </Link>

            <ModeToggle/>
          </div>

          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">

            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>

              <li>
                <NavLink 
                className={({isActive})=>
                `block py-2 pr-4 pl-3 duration-200 ease-in-out ${isActive? "text-sky-500  border-b-2 border-orange-400":"text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-700 lg:p-[0.275rem]`
              }
                to= '/'>
                  Home
                </NavLink>
                
              </li>
              <li>
              <NavLink 
                className={({isActive})=>
                `block py-2 pr-4 pl-3 duration-200 ease-in-out ${isActive? "text-sky-500 border-b-2 border-orange-400 ":"text-gray-700"}  hover:bg-gray-50 lg:hover:bg-transparent  hover:text-orange-700 lg:p-[0.275rem]`}
                to= '/register'>Register</NavLink>
                
              </li>
              <li>
              <NavLink 
                className={({isActive})=>
                `block py-2 pr-4 pl-3 duration-200 ease-in-out ${isActive? "text-sky-500 border-b-2 border-orange-400":"text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent  hover:text-orange-700 lg:p-[0.275rem]`}
                to= '/about'>About
                </NavLink>
              </li>

            </ul>

          </div>

        </nav>

      </header>
      }
  </ThemeProvider>

    
  )
}

export default Header