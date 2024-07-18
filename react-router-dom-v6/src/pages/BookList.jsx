import {  useOutletContext,Link } from "react-router-dom"



const BookList = () => {
  const books = useOutletContext()
  console.log(books);
  return (
    <div>
      <h1>BookList</h1>
      <div>{books.map((book)=>(<div key={book.id}>
        <Link to={`/books/${book.id}`}>{book.name}</Link>
      </div>))}</div>
      
    </div>
  )
}

export default BookList