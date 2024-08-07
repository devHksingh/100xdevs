import './App.css'
import {Link, NavLink, Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import BookList from "./pages/BookList"
import Book from "./pages/Book"
import NewBook from "./pages/NewBook"
import NotFound from "./pages/NotFound"
import BookLayout from './BookLayout'

function App() {
  

  return (
  <>
    {/* <Routes>
      <Route path='/books' element={<h1>Extra content</h1>}/>
    </Routes> */}
    <nav>
      <ul>
        <li><NavLink 
        style={({isActive}) => {return isActive ? {color:"greenyellow"}:{color:"red"}}}
        to={'/'}>
          {({isActive})=>{
            return isActive? "Active Home":"Home"
          }}
          </NavLink></li>
        <li><Link to={'/books'}>Books</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/books' element={<BookLayout/>} >
        {/* Nested Routes */}
        <Route index element={<BookList/>}/>
        <Route path=':id' element={<Book/>}/>
        <Route path='new' element={<NewBook/>}/>
      </Route>
      

      {/* <Route path='/books/:id' element={<Book/>}/>
      <Route path='/books/new' element={<NewBook/>}/> */}
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  </>
  )
}

export default App
