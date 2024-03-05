// import { useState } from 'react'
import PostsList from './features/Posts/PostsList'
import './App.css'
import AddPostForm from './features/Posts/AddPostForm'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <AddPostForm/>
      <PostsList/>
      
    </>
  )
}

export default App
