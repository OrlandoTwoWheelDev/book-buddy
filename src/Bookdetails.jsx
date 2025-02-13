import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState();
  const navigate = useNavigate();

  useEffect(() => {


    const bookInfo = async () => {
      const results = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`)
      const fetched = await results.json();
      console.log(`I Have The Book`, fetched);

      setBook(fetched.book);
    }
    bookInfo();
  }, [bookId])


  return (
    <>
      <h1>Book Details</h1>
      {book ? (
        <ol>
          <h2 className="one">{book.title}</h2>
          <h3 className="one">{book.author}</h3>
          <p className="one">{book.description}</p>
          <p className="one"><img src={book.coverimage} /></p>
          <button onClick={() => navigate("/")}>Home</button>
        </ol>
      ) : (
        <p>Book Not Found</p>
      )}




    </>
  )
}

export default BookDetails
