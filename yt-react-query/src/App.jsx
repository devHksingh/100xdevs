import { Link } from 'react-router-dom';
import './App.css'

function App() {
  

  return (
    < >
      <div className='h-screen pt-10 mx-auto text-center bg-slate-950 text-slate-400'>
      <h1 className=''>The Awesome React query</h1>
            <div className='flex justify-center gap-6 mt-10 text-2xl font-bold'>
                <Link className='text-sky-400 hover:text-sky-600' to="/">Home</Link> <br />
                <Link className='text-sky-400 hover:text-sky-600' to="/products">Products</Link>
            </div>

            
      </div>

      
    </>
  )
}

export default App
