import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Homepage = () => {
  const navigate = useNavigate();
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
      <h1>Home Page</h1>
      <ul>
        {books.map((book, id) => (
          <li key={id}>
            <h3 onClick={() => navigate(`/bookdetails/${book.id}`)}>{book.title}</h3>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Homepage
