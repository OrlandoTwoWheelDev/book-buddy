import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react"
import RegisterAndLogin from "./Register";



const App = () => {

  const [books, setBooks] = useState([]);
  

  useEffect(() => {

    const getBooks = async () => {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`);
      const bookData = await response.json();
      console.log(`Here are the Books`, bookData.books);
      
      
      setBooks(bookData.books);
    };
    getBooks();
  }, []);



  return (
    <>
      <h1>Book Buddy</h1>

      <Link to="/">HomePage</Link>
      <Link to="/bookdetails">Book Details</Link>
      <Link to="/registerandlogin">Reg/Login</Link>

      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/bookdetails" element={<h1>Book Details</h1>} />
        <Route path="/registerandlogin" element={<RegisterAndLogin />} />
      </Routes>

      <ul>
        {books.map((book, id) => (
          <li key={id}>
            <h3>{book.title}</h3>
            </li>
        ))}
      </ul>

    </>
  )
}

export default App
