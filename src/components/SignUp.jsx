import React, { useState } from "react";
import "./signUp.css"; // Import your custom CSS file
import Captcha from "./Captcha";
import axios from "axios";

function SignUp() {
  const [isSignUpActive, setSignUpActive] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");

  const handleSignUpClick = () => {
    setSignUpActive(true);
  };

  const handleSignInClick = () => {
    setSignUpActive(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create a payload object with the user registration data
    const payload = {
      name,
      email,
      password,
    };

    try {
      // Send a POST request to the registration API endpoint
      const response = await axios.post(
        "http://localhost:3001/auth/register",
        payload
      );
      if (response && response.data) {
        console.log("Registration successful:", response.data);
      } else {
        console.log("Registration failed: No response data");
        throw new Error("Registration failed");
      }

      // Clear the input fields and display success message
      setName("");
      setEmail("");
      setPassword("");
      setRegistrationMessage("Registration successful! You can now sign in.");
    } catch (error) {
      console.log("Registration failed:", error.message);

      // Display error message
      setRegistrationMessage(
        "Registration failed. Please check your details and try again."
      );
    }
  };

  return (
    <>
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
              onChange={handleNameChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <button>Sign Up</button>
            <p>{registrationMessage}</p>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleFormSubmit}>
            <h1>Sign in</h1>
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
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Captcha />

            <a href="/">Forgot your password?</a>
            <button type="submit">Sign In</button>
          </form>
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
