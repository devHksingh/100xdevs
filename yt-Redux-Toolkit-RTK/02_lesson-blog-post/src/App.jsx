// import { useState } from 'react'
import './App.css'
import AddPostForm from './features/posts/AddPostForm'
import PostsList from './features/posts/PostsList'

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
