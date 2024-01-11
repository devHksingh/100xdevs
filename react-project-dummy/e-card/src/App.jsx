import { useState } from 'react'

import './App.css'
import Users from './components/Users'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div >
      <div className=' dark:bg-gray-900 dark:text-slate-400 h-screen mx-auto p-52'>
        <Users></Users>
      </div>
      
    </div>
  )
}

export default App
