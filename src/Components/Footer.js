import React, { useState } from "react";
import "../CSS/Footer.css";
import facebook from "../Img/facebook.png";
import twitter from "../Img/twitter (1).png";
import instagram from "../Img/instagram.png";
import youtube from "../Img/youtube.png";
import linkedin from "../Img/linkedin.png";
import { Link } from "react-router-dom";
import config from "../Config"
import FeatureFlag from "../FeatureFlag"
const env = config("Environment")
console.log(env)
//Footer section start here
const Footer = () => {
  const SubscribeFeature=FeatureFlag("FeatureFlagOn")
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [thanksMessage, setthanksMessage] = useState("");
  const FhandleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleSubscribe = () => {
    if (email.trim() === "") {
      // If email input is empty, display an error message
      setErrorMessage("* Please enter a valid email.");
    } else {
      // Simulate a subscription process (you should replace this with a real backend call)
      console.log(`Subscribed with email: ${email}`);
      setSubscribed(true);
      setErrorMessage(""); // Clear any previous error message
      setEmail("")
      setthanksMessage("Thanks for Subscribe.");
      
    }
  };
  return (
    <div className="FooterWrapper">
      <div className="FootHeadear">
        <div className="FootLogo">
          <h2>BlogWiki</h2>
          <p>Inspired by Information</p>
        </div>
        <div className="Footline"></div>
      </div>
      {SubscribeFeature && <div className="FNewsLetter">
      <input
        className="NewsInput"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={FhandleEmailChange}
          required={true}
        />
        <button className="NewsSubbutton" onClick={handleSubscribe}>
          {subscribed ? "Subscribed" : "Subscribe"}
        </button>
        {errorMessage && <p className="FErrorMessage">{errorMessage}</p>}
        {thanksMessage && <p className="FThanksMessage">{thanksMessage}</p>}
      </div>}
      <div className="CopyrightWrapper">
        <div className="SocailProfileWrapper">
          <p>Follow US</p>
          <a
            className="FooterSocial"
            target="no_blank"
            href="https://www.facebook.com/BlogWiki"
          >
            <img alt="SocialMedia" src={facebook} />
          </a>
          <a
            className="FooterSocial"
            id="twitter"
            target="no_blank"
            href="https://www.twitter.com/BlogWiki_in"
          >
            <img alt="SocialMedia" src={twitter} />
          </a>
          <a
            className="FooterSocial"
            target="no_blank"
            href="https://www.instagram.com/blogwiki.in/"
          >
            <img alt="SocialMedia" src={instagram} />
          </a>
          <a
            className="FooterSocial"
            target="no_blank"
            href="https://www.youtube.com/@BlogWiki_in"
          >
            <img alt="SocialMedia" src={youtube} />
          </a>
          <a
            className="FooterSocial"
            target="no_blank"
            href="https://www.linkedin.com/company/blogwiki/"
          >
            <img alt="SocialMedia" src={linkedin} />
          </a>
        </div>
        <p>All Rights Reserved 2023 | BlogWiki&copy;</p>
        <div className="VersionWrap">
        <p className="FootEnv">Environment: {config("Environment")}</p>
        <p className="Version">Version: {config("Version")}</p>
        </div>
      </div>
      <div className="FooterOptionWrapper">
        <div className="OptionLine1 OptionLine">
          <span className="OptioninnerWrapper">
            <Link className="LinkWrapper1" to="/dev.blogwiki">Home</Link>
          </span>
          <span className="OptioninnerWrapper">
            <Link className="LinkWrapper2" to="/dev.blogwiki">Gadgets</Link>
          </span>
          <span className="OptioninnerWrapper">
            <Link className="LinkWrapper3" to="/dev.blogwiki">Advertise</Link>
          </span>
        </div>
        <div className="OptionLine2 OptionLine">
          <span className="OptioninnerWrapper">
            <Link className="LinkWrapper4" to="/dev.blogwiki">News</Link>
          </span>
          <span className="OptioninnerWrapper ">
            <Link className="LinkWrapper5" to="/dev.blogwiki">Weather</Link>
          </span>
          <span className="OptioninnerWrapper">
            <Link className="LinkWrapper6" to="/PrivacyPolicy">Privacy Policy</Link>
          </span>
        </div>
        <div className="OptionLine OptionLine1">
          <span className="OptioninnerWrapper">
            <Link className="LinkWrapper7" to="/dev.blogwiki">Tech</Link>
          </span>
          <span className="OptioninnerWrapper">
            <Link className="LinkWrapper8" to="/dev.blogwiki">About</Link>
          </span>
          <span className="OptioninnerWrapper">
            <Link className="LinkWrapper9" to="/dev.blogwiki">Contact</Link>
          </span>
        </div>
      </div>
      <div className="BackTopWrapper">
        <div onClick={handleBackToTop}>Back to Top</div>
      </div>
    </div>
  );
};

export default Footer;
