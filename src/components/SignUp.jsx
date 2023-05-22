import React, { useState } from "react";
import LogIn from "./LogIn";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import "./signUp.css"; // Import your custom CSS file

function SignUp() {
  const [isSignUpActive, setSignUpActive] = useState(false);
  const [registrationMessage, setRegistrationMessage] = useState("");

  const handleSignUpClick = () => setSignUpActive(true);
  const handleSignInClick = () => setSignUpActive(false);
  const handleChange = (e, setState) => setState(e.target.value);

  // const navigate = useNavigate(); // Access the history object for navigation

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const payload = { name, email, password };

    try {
      const response = await axios.post(
        "http://localhost:3001/auth/register",
        payload
      );
      if (response && response.data) {
        console.log("Registration successful:", response.data);
        setName("");
        setEmail("");
        setPassword("");
        setRegistrationMessage("Registration successful! You can now sign in.");

        // Redirect to the sign-in page after successful registration
        // navigate("/login");
      } else {
        console.log("Registration failed: No response data");
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.log("Registration failed:", error.message);
      setRegistrationMessage(
        "Registration failed. You're Email Allready used..!"
      );
    }
  };

  return (
    <>
      <br></br>
      <div
        className={`container ${isSignUpActive ? "right-panel-active" : ""}`}
      >
        <div className="form-container sign-up-container">
          <form onSubmit={handleFormSubmit}>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="/" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="/" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => handleChange(e, setName)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => handleChange(e, setEmail)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => handleChange(e, setPassword)}
              required
            />
            <button>Sign Up</button>
            <p
              className={`message ${registrationMessage ? "success" : "error"}`}
            >
              {registrationMessage}
            </p>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <LogIn />
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us, please login with your personal info
              </p>
              <button className="ghost" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className="ghost" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
