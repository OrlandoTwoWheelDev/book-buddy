import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react"



const App = () => {

  const [books, setBooks] = useState([]);
  

  useEffect(() => {

    const getBooks = async () => {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`);
      const bookData = await response.json();
      console.log(bookData);

      setBooks(bookData);
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
        <Route path="/registerandlogin" element={<h1>Reg/Login</h1>} />
      </Routes>

      <ul>
       
      </ul>

    </>
  )
}

export default App
