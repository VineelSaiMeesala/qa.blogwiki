import React from "react";
import "../CSS/BlogCardWindow.css";
import "../CSS/BlogcardMobile.css";
const BlogCard = (prop) => {
  return (
    <div className="BlogCard">
      <div id="image">
        <img src={prop.img} alt="Logo" />
      </div>
      <div id="BlogHead">
        <h3>{prop.title}</h3>
      </div>
      <div id="BlogPara">
        <p>{prop.description}</p>
      </div>
      <div className="Blogfooter">
        <div className="profile">
          <img src={prop.img} alt="Logo" />
        </div>
        <div className="profileName">
          <a href="https://www.blogwiki.in/" target="_blank" rel="noreferrer">ProfileName</a>
        </div>
        <div className="BlogBtn">
        <button ><a href="https://www.blogwiki.in/" target="_blank" rel="noreferrer">Read More..</a></button>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
