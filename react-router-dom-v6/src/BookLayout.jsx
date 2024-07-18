import { Link, Outlet } from "react-router-dom"


const BookLayout = () => {
    const bookList = [
        {id:'1',name:"Book1"},
        {id:'2',name:"Book2"},
        {id:'3',name:"Book3"},
        {id:'4',name:"Book4"},
        {id:'5',name:"Book5"},
        {id:'6',name:"Book6"},
    ]
  return (
    <>
      {/* <Link to="/books/1">Book 1</Link><br/>
      <Link to="/books/2">Book 2</Link><br/> */}
      <Link to="/books/new">New Book</Link><br/>
      <Outlet context={bookList}/>
    </>
  )
}

export default BookLayout