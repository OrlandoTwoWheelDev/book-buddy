import { useState } from "react"


const RegisterAndLogin = () => {
  

  return(
    <>
    <h1>Regristration</h1>
    
    <form>
      <input placeholder="FirstName" />
      <input placeholder="LastName" />
      <input placeholder="Email" />
      <input type="password" name="Password" placeholder="Password" />

      <button>Register Now</button>

    </form>
    </>
   

  )
 
}



export default RegisterAndLogin
