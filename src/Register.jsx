import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterAndLogin = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const info = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          FirstName: `${setFirstName}`,
          LastName: `${setLastName}`,
          Email: `${setEmail}`,
          Password: `${setPassword}`,
        }),
      });
      if (!info.ok) {
        const errorData = await info.json();
        console.error(errorData);
        throw new Error(
          `HTTP error! status: ${info.status}`
        )
      }
      const registeredInfo = await info.json();
      console.log(registeredInfo);

      navigate("/")
    } catch (error) {
      console.error("Error during registration:", error);

      alert("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <h1>Regristration</h1>

      <p>You'll need to register a new account <br />
        in order to checkout,<br />
        reserve, or return books!</p>

      <form onSubmit={handleSubmit}>
        <input value={FirstName}
          onChange={((event) => setFirstName(event.target.value))}
          placeholder="FirstName" />
        <input value={LastName}
          onChange={((event) => setLastName(event.target.value))}
          placeholder="LastName" /><br />
        <input type="email" value={Email}
          onChange={((event) => setEmail(event.target.value))}
          id="email" name="email" placeholder="Email" />
        <input value={Password}
          onChange={((event) => setPassword(event.target.value))}
          type="Password" name="Password" placeholder="Password" />

        <button>Register Now</button>
      </form>

      <h3>Already have an account? Log In Here!</h3>

      <form onSubmit={handleSubmit}>
        <input value={LoginEmail}
          onChange={((event) => setLoginEmail(event.target.value))}
          placeholder="LoginEmail" />
        <input value={LoginPassword}
          onChange={((event) => setLoginPassword(event.target.value))}
          placeholder="LoginPassword" />

        <button>Log In</button>
      </form>
    </>
  )
}

export default RegisterAndLogin
