import React from "react";
import MainLayout from "../Layouts/MainLayout";
import "../CSS/BlogPage.css";
import image1 from '../ImageRepoSRC/Women2.jpeg'
// import TestCop from "../TestCop";
const blogPage = () => {
  return (
    <MainLayout>
      <div className="BpMainWrapper">
        <h1>BlogPage</h1>
        <p>Test paragraph</p>
        <img src={image1} alt="Women" />
        {/* <TestCop />    */}
      </div>
    </MainLayout>
  );
};
export default blogPage;
