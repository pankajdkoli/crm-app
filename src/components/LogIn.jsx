import React, { useState } from "react";
import axios from "axios";
import "./signUp.css"; // Import your custom CSS file
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [captchaNumber, setCaptchaNumber] = useState(getRandomCaptchaNumber());
  const [captchaInput, setCaptchaInput] = useState("");
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [signInMessage, setSignInMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [captchaInputError, setCaptchaInputError] = useState(false);

  const navigate = useNavigate(); // Access the history object for navigation

  // Function to handle email change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Function to handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Login with API
  const handleSignInFormSubmit = async (e) => {
    e.preventDefault();

    // Create a payload object with the user login data
    const payload = {
      email,
      password,
    };

    try {
      // Send a POST request to the login API endpoint
      const response = await axios.post(
        "http://localhost:3001/auth/login",
        payload
      );
      if (response && response.data) {
        console.log("Login successful:", response.data);

        // Clear the input fields and display success message
        setEmail("");
        setPassword("");
        setSignInMessage("Login successful!");

        // Redirect to the sign-in page after successful registration
        navigate("/userlist");
      } else {
        console.log("Login failed: No response data");
        throw new Error("Login failed");
      }
    } catch (error) {
      console.log("Login failed:", error.message);

      // Check for specific error status codes
      if (error.response && error.response.status === 401) {
        setSignInMessage("Invalid email or password");
      } else {
        setSignInMessage("Login failed. Please try again later.");
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isCaptchaVerified) {
      // CAPTCHA verification succeeded
      // Proceed with the form submission
      console.log("Form submitted successfully");
    } else {
      // Display an error message or take appropriate action
      console.log("CAPTCHA verification failed");
    }
  };

  function getRandomCaptchaNumber() {
    // Generate a random number between 1000 and 9999
    return Math.floor(Math.random() * 9000) + 1000;
  }

  const handleCaptchaInputChange = (e) => {
    setCaptchaInput(e.target.value);
  };

  const verifyCaptcha = () => {
    if (captchaInput === captchaNumber.toString()) {
      setIsCaptchaVerified(true);
      setCaptchaInputError(false);
      console.log("CAPTCHA verification succeeded");
    } else {
      setIsCaptchaVerified(false);
      setCaptchaInputError(true);
      console.log("CAPTCHA verification failed");
    }
  };

  return (
    <>
      <br></br>
      <form onSubmit={handleSignInFormSubmit}>
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
        <div className="captcha-container"></div>
        <input
          type="text"
          placeholder="Enter CAPTCHA"
          className={`captcha-input ${captchaInputError ? "error" : ""} ${
            isCaptchaVerified ? "success" : ""
          }`}
          value={captchaInput}
          onChange={handleCaptchaInputChange}
        />

        <span className="captcha-number">CAPTCHA: {captchaNumber}</span>
        <button
          type="button"
          onClick={verifyCaptcha}
          disabled={isCaptchaVerified}
        >
          {isCaptchaVerified ? "Verified" : "Verify CAPTCHA"}
        </button>
        <br />
        <span className={`message ${signInMessage ? "success" : "error"}`}>
          {signInMessage}
        </span>

        <button
          type="submit"
          disabled={!isCaptchaVerified}
          onSubmit={handleFormSubmit}
        >
          Sign In
        </button>

        {/* <button type="submit">Sign In</button> */}
        {/* <p className={`message ${signInMessage ? "success" : "error"}`}>
          {signInMessage}
        </p> */}
        {/* <p className="captcha-message">{captchaMessage}</p> */}
      </form>
    </>
  );
}

export default LogIn;
