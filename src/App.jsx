import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react"
import RegisterAndLogin from "./Register";
import Homepage from "./Homepage";
import BookDetails from "./Bookdetails";



const App = () => {

  


  return (
    <>
      <h1>Book Buddy</h1>

      <Link to="/">HomePage</Link>
      <Link to="/registerandlogin">Reg/Login</Link>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/bookdetails/:bookId" element={<BookDetails />} />
        <Route path="/registerandlogin" element={<RegisterAndLogin />} />
      </Routes>

      

    </>
  )
}

export default App
