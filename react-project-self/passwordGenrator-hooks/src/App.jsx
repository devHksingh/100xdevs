import { useState,useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const[charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState('')

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenrator = useCallback(()=>{

    let pass =""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    if(numberAllowed) str+= "123456789"
    if(charAllowed) str+=  "!@#$%&'()*+,^-./:;<=>?[]_`{~}|"

    for (let i = 1; i < length; i++) {
      
      const randomIndex = Math.floor(Math.random()*str.length  )
      pass+= str[randomIndex]
      
    }

    setPassword(pass)
    
  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenrator()
  },[length,numberAllowed,charAllowed,passwordGenrator])

  return (
    <div className='bg-slate-900 w-full h-screen p-4 grid place-content-center'>
      <h1 className='text-stone-400 text-center font-extrabold text-5xl'>Password Genrator</h1>
      <div className=' w-full max-w-md shadow-md rounded-md my-8 p-6 text-orange-600 bg-slate-700'>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3 bg-slate-600'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='px-3 py-0.5 outline-none bg-blue-800 text-zinc-400 shadow-lg'
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
              <input 
              type="range" 
              min={8}
              max={28}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
              />
              <label >Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox" 
              defaultChecked={numberAllowed}
              id="numberInput" 
              onChange={()=>{
                setNumberAllowed((prev)=> !prev)
              }}
              />
              <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>

        </div>
      </div>
    </div>
  )
}

export default App
