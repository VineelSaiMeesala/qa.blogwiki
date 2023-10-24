import React, { useState } from "react";
import "../CSS/Footer.css";
import facebook from "../Img/facebook.png";
import twitter from "../Img/twitter (1).png";
import instagram from "../Img/instagram.png";
import youtube from "../Img/youtube.png";
import linkedin from "../Img/linkedin.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleSubscribe = () => {
    // Simulate a subscription process (you should replace this with a real backend call)
    console.log(`Subscribed with email: ${email}`);
    setSubscribed(true);
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
      <div className="SearchWrapper">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
         required/>
        <button  className='Subbutton' onClick={handleSubscribe}>
          {subscribed ? "Subscribed" : "SUBSCRIBE"}
        </button>
      </div>
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
      </div>
      <div className="FooterOptionWrapper">
        <div className="OptionLine1 OptionLine">
          <span className="OptioninnerWrapper">
            <Link className="LinkWrapper1" to="/qa.blogwiki">Home</Link>
          </span>
          <span className="OptioninnerWrapper">
            <Link className="LinkWrapper2" to="/qa.blogwiki">Gadgets</Link>
          </span>
          <span className="OptioninnerWrapper">
            <Link className="LinkWrapper3" to="/qa.blogwiki">Advertise</Link>
          </span>
        </div>
        <div className="OptionLine2 OptionLine">
          <span className="OptioninnerWrapper">
            <Link className="LinkWrapper4" to="/qa.blogwiki">News</Link>
          </span>
          <span className="OptioninnerWrapper ">
            <Link className="LinkWrapper5" to="/qa.blogwiki">Weather</Link>
          </span>
          <span className="OptioninnerWrapper">
            <Link className="LinkWrapper6" to="/qa.blogwiki">Privacy Policy</Link>
          </span>
        </div>
        <div className="OptionLine OptionLine1">
          <span className="OptioninnerWrapper">
            <Link className="LinkWrapper7" to="/qa.blogwiki">Tech</Link>
          </span>
          <span className="OptioninnerWrapper">
            <Link className="LinkWrapper8" to="/qa.blogwiki">About</Link>
          </span>
          <span className="OptioninnerWrapper">
            <Link className="LinkWrapper9" to="/qa.blogwiki">Contact</Link>
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
