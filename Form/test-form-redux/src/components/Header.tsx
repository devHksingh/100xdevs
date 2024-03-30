import { Link, NavLink } from "react-router-dom"


function Header() {
  return (
    <div className="navbar bg-primary ">
  <div className="navbar-start">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-base-100 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to={'#'}>Item 1</Link></li>
        <li>
          <a>Register</a>
          <ul className="p-2">
            <li><Link to={'firstForm'}>Form 1</Link></li>
            <li><Link to={'secondForm'}>Form 2</Link></li>
            <li><Link to={'thirdForm'}>Form 3</Link></li>
            
          </ul>
        </li>
        <li>
          <Link to={'login'}>Login</Link>
        </li>
      </ul>
    </div>
    <Link to={''} className="text-xl btn btn-ghost text-base-100"> Form</Link>
    {/* <a className="text-xl btn btn-ghost text-base-100">Form</a> */}
  </div>
  <div className="hidden navbar-center lg:flex lg:gap-6">
    <ul className="px-1 menu menu-horizontal text-base-100 ">
      <li><NavLink to=''>Item 1</NavLink></li>
      <li>
        <details className="">
          <summary>Parent</summary>
          <ul className="p-2 text-primary ">
            <li className=""><Link to={'firstForm'}>Form1 </Link></li>
            <li><Link to={'secondForm'}>Form2</Link></li>
            <li><Link to={'thirdForm'}>Form3</Link></li>
          </ul>
        </details>
      </li>
      <li><NavLink to={'login'}>Login</NavLink></li>
    </ul>
  </div>
  <div className="gap-4 navbar-end">
  <div className="dropdown ">
      <div tabIndex={0} role="button" className="m-1 btn">
    Theme
    <svg width="12px" height="12px" className="inline-block w-2 h-2 fill-current opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
  </div>
  <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
    <li><input type="radio" name="theme-dropdown" className="justify-start theme-controller btn btn-sm btn-block btn-ghost" aria-label="Default" value="default"/></li>
    <li><input type="radio" name="theme-dropdown" className="justify-start theme-controller btn btn-sm btn-block btn-ghost" aria-label="dark" value="dark"/></li>
    <li><input type="radio" name="theme-dropdown" className="justify-start theme-controller btn btn-sm btn-block btn-ghost" aria-label="light" value="light"/></li>
    
    <li><input type="radio" name="theme-dropdown" className="justify-start theme-controller btn btn-sm btn-block btn-ghost" aria-label="Aqua" value="aqua"/></li>
  </ul>
    </div>
    <a className="btn">Register</a>
    
    
    
    
    
  </div>
</div>
  )
}

export default Header