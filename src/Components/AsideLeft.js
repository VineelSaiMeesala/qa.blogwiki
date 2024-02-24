import React, { useState } from "react";
import "../CSS/Aside.css";
const AsideLeft = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [thanksMessage, setthanksMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const isValidEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubscribe = () => {
    if (email.trim() === "") {
      // If email input is empty, display an error message
      setErrorMessage("* Please enter a valid email.");
      setthanksMessage(""); // Clear any previous thanks message
    } else if (!isValidEmail(email)) {
      // If the entered email is invalid, display an error message
      setErrorMessage("* Please enter a valid email format.");
      setthanksMessage(""); // Clear any previous thanks message
    } else {
      // Simulate a subscription process (you should replace this with a real backend call)
      console.log(`Subscribed with email: ${email}`);
      setSubscribed(true);
      setErrorMessage(""); // Clear any previous error message
      setEmail("");
      setthanksMessage("Thanks for Subscribe.");
    }
  };
  return (
    <aside className="Asideleft">
      <div className="AdSBox">ADS Space</div>
      <div className="NewsLetter">
        <h2>News Letter</h2>
        <input
        className="NewsInput"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required={true}
        />
        <button className="NewsSubbutton" onClick={handleSubscribe}>
          {subscribed ? "Subscribed" : "Subscribe"}
        </button>
        {errorMessage && <p className="ErrorMessage">{errorMessage}</p>}
        {thanksMessage && <p className="ThanksMessage">{thanksMessage}</p>}
      </div>
    </aside>
  );
};

export default AsideLeft;
