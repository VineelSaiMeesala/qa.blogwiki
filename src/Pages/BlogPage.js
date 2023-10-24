import React from "react";
import image1 from "../Img/Img3.jpg";
import MainLayout from "../Layouts/MainLayout";
const blogPage = () => {
  return (
    <MainLayout>
      <h1>BlogPage</h1>
      <p>Test paragraph</p>
      <img src={image1} alt="" />
    </MainLayout>
  );
};
export default blogPage;
