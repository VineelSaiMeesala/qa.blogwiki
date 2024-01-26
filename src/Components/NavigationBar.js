import "../CSS/NaviWindow.css";
import "../CSS/NaviMobile.css";
import facebook from "../Img/facebook.png";
import twitter from "../Img/twitter (1).png";
import instagram from "../Img/instagram.png";
import youtube from "../Img/youtube.png";
import linkedin from "../Img/linkedin.png";
import { Link } from "react-router-dom";
var NavigationBar = function () {
  return (
    <div className="Head-Wrapper">
      <div className="Headear">
        <div className="Logo">
          <h2>BlogWiki</h2>
          <p>Inspired by Information</p>
        </div>
        <div className="line"></div>
      </div>
      <div>
        <div id="menu" className="menu">
          <span><Link to='/dev.blogwiki'>Home</Link></span>
          <span><Link to='/BlogPage'>News</Link></span>
          <span><Link to='/dev.blogwiki'>Tech</Link></span>
          <span><Link to='/BlogPage'>Gadgets</Link></span>
          <span><Link to='/dev.blogwiki'>Weather</Link></span>
          <span><Link to='/BlogPage'>About</Link></span>
          <span><Link to='/dev.blogwiki'>Contact</Link></span>
          <span><Link to='/BlogPage'>Services</Link></span>
          <span><Link to='/BlogPage'>TestLink</Link></span>
        </div>
        <div className="search">
          <input
            className="searchinput"
            type="search"
            placeholder="  Search...."
          />
        </div>
        <div id="Login" className="Login">
          <button className="Login-btn">Login</button>
        </div>
        <div id="Social" className="Social">
          <a
            className="NavSocail"
            target="no_blank"
            href="https://www.facebook.com/BlogWiki"
          >
            <img alt="SocialMedia" src={facebook} />
          </a>
          <a
            className="NavSocail"
            id="twitter"
            target="no_blank"
            href="https://www.twitter.com/BlogWiki_in"
          >
            <img alt="SocialMedia" src={twitter} />
          </a>
          <a
            className="NavSocail"
            target="no_blank"
            href="https://www.instagram.com/blogwiki.in/"
          >
            <img alt="SocialMedia" src={instagram} />
          </a>
          <a
            className="NavSocail"
            target="no_blank"
            href="https://www.youtube.com/@BlogWiki_in"
          >
            <img alt="SocialMedia" src={youtube} />
          </a>
          <a
            className="NavSocail"
            target="no_blank"
            href="https://www.linkedin.com/company/blogwiki/"
          >
            <img alt="SocialMedia" src={linkedin} />
          </a>
        </div>
      </div>
      <div className="MobileNav">
        <div id="btn1" className="btn" onClick={clicked}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
        <div id="btn2" className="btn-2" onClick={clicked}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
const clicked = function () {
  var menu = document.getElementById("menu");
  var btn = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var Login = document.getElementById("Login");
  var Social = document.getElementById("Social");
  if (menu.style.display === "block") {
    menu.style.display = "none";
    btn.style.display = "block";
    btn2.style.display = "none";
    Login.style.display = "none";
    Social.style.display = "none";
  } else {
    menu.style.display = "block";
    btn.style.display = "none";
    btn2.style.display = "block";
    Login.style.display = "block";
    Social.style.display = "block";
  }
};
export default NavigationBar;
