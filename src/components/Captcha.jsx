import React, { useState } from "react";
import "./signUp.css"; // Import your custom CSS file

function Captcha() {
  const [captchaNumber, setCaptchaNumber] = useState(getRandomCaptchaNumber());
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (captchaVerified) {
      // CAPTCHA verification succeeded
      // Proceed with the form submission
      console.log("Form submitted successfully");
    } else {
      // CAPTCHA verification failed
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
      setCaptchaVerified(true);
      console.log("CAPTCHA verification succeeded");
    } else {
      setCaptchaVerified(false);
      console.log("CAPTCHA verification failed");
    }
  };

  return (
    <>
      <div className="captcha-container"></div>
      <input
        type="text"
        placeholder="Enter CAPTCHA"
        className={`captcha-input ${captchaVerified ? "verified" : ""}`}
        value={captchaInput}
        onChange={handleCaptchaInputChange}
      />
      <span className="captcha-number">CAPTCHA: {captchaNumber}</span>
      <button type="button" onClick={verifyCaptcha}>
        Verify CAPTCHA
      </button>
      {/* <button type="submit" disabled={!captchaVerified}>
              Sign In
            </button> */}
    </>
  );
}

export default Captcha;
