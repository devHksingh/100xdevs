import { FaShop,FaCartShopping,FaArrowRotateLeft,FaUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavBar() {
    const items = useSelector((state)=>state.cart)
  return (
    <header className='bg-teal-700 sticky top-0 z-10 text-white'>
        <section className='md:max-w-[110rem] mx-auto flex justify-between items-center p-1'>
            {/* logo */}
            
            <h1 className="">
                <Link href="#hero" className='text-2xl hover:opacity-60 flex items-center' to={'/'}>
                Store
                <FaShop style={{color: "#63E6BE",}} />
                {/* <FontAwesomeIcon icon={faStore} /> */}
                
                </Link>
            </h1>
           

            
            <div>
                {/* Menu btn */}
                {/* <button id="mobile-open-button" className='md:hidden'> */}
                {/* <FontAwesomeIcon icon={faBars} /> */}
                {/* <FaBars />
                </button> */}
                <nav className='space-x-8 text-xl flex items-center mr-2 '>
                    <Link  className='hover:opacity-60 flex items-center' to={'/cart'}>
                        {/* <FontAwesomeIcon icon={faCartShopping} />    */}
                        <FaCartShopping/> <span className="text-lg ml-1 font-mono font-black text-gray-900">{items.length}</span>
                    </Link>
                    <Link  className='hover:opacity-60' to={'/history'}>
                       {/* <FontAwesomeIcon icon={faClockRotateLeft} /> */}
                       <FaArrowRotateLeft />
                    </Link>
                    <Link  className='hover:opacity-60' to={'/user'}>
                       {/* <FontAwesomeIcon icon={faClockRotateLeft} /> */}
                       <FaUser />
                    </Link>
                </nav>
            </div>

        </section>
    </header>


    
  )
}

export default NavBar
{/* <FaShop style={{color: "#63E6BE",}} />  */}