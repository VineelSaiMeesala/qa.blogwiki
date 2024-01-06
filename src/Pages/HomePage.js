import React from "react";
import BlogCard from "../Components/BlogCard";
import image1 from "../ImageRepoSRC/Women2.jpeg";
import image2 from "../ImageRepoSRC/Women26.jpeg";
import image3 from "../ImageRepoSRC/Women16.jpeg";
import image4 from "../ImageRepoSRC/Women12.jpeg"
import image5 from '../ImageRepoSRC/Women10.jpeg';
import image6 from '../ImageRepoSRC/Women32.jpeg';
import Banner from "../Components/HeroBanner";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";

import "../App.css";
const HomePage = () => {
  const blogdata = [
    {
      id: 1,
      title:
        "You Only Live Once, But If You Do It Right, Once Is Enough. - (Mae West)",
      img: image1,
      description:
        " try to do without enough sleep it is a wonder more crazy things don’t happen in this world.",
    },
    {
      id: 2,
      title:
        "You Only Live Once, But If You Do It Right, Once Is Enough. - (Mae West)",
      img: image2,
      description:
        "Sleep deprivation causes all sorts of challenges and problems. When one doesn’t get enough sleep one’s mind doesn’t work clearly. Studies have shown that after staying awake for 24 hours one’s ability to do simple math is greatly impaired. Driving tired has been shown to be as bad as driving drunk. Moods change, depression, anxiety, and mania can be induced by lack of sleep. As much as people try to do without enough sleep it is a wonder more crazy things don’t happen in this world.",
    },
    {
      id: 3,
      title:
        "You Only Live Once, But If You Do It Right, Once Is Enough. - (Mae West)",
      img: image3,
      description:
        "Sleep deprivation causes all sorts of challenges and problems. When one doesn’t get enough sleep one’s mind doesn’t work clearly. Studies have shown that after staying awake for 24 hours one’s ability to do simple math is greatly impaired. Driving tired has been shown to be as bad as driving drunk. Moods change, depression, anxiety, and mania can be induced by lack of sleep. As much as people try to do without enough sleep it is a wonder more crazy things don’t happen in this world.",
    },
    {
      id: 4,
      title:
        "You Only Live Once, But If You Do It Right, Once Is Enough. - (Mae West)",
      img: image4,
      description:
        "Sleep deprivation causes all sorts of challenges and problems. When one doesn’t get enough sleep one’s mind doesn’t work clearly. Studies have shown that after staying awake for 24 hours one’s ability to do simple math is greatly impaired. Driving tired has been shown to be as bad as driving drunk. Moods change, depression, anxiety, and mania can be induced by lack of sleep. As much as people try to do without enough sleep it is a wonder more crazy things don’t happen in this world.",
    },
    {
      id: 5,
      title:
        "You Only Live Once, But If You Do It Right, Once Is Enough. - (Mae West)",
      img: image5,
      description:
        "Sleep deprivation causes all sorts of challenges and problems. When one doesn’t get enough sleep one’s mind doesn’t work clearly. Studies have shown that after staying awake for 24 hours one’s ability to do simple math is greatly impaired. Driving tired has been shown to be as bad as driving drunk. Moods change, depression, anxiety, and mania can be induced by lack of sleep. As much as people try to do without enough sleep it is a wonder more crazy things don’t happen in this world.",
    },
    {
      id: 6,
      title:
        "You Only Live Once, But If You Do It Right, Once Is Enough. - (Mae West)",
      img: image6,
      description:
        "Sleep deprivation causes all sorts of challenges and problems. When one doesn’t get enough sleep one’s mind doesn’t work clearly. Studies have shown that after staying awake for 24 hours one’s ability to do simple math is greatly impaired. Driving tired has been shown to be as bad as driving drunk. Moods change, depression, anxiety, and mania can be induced by lack of sleep. As much as people try to do without enough sleep it is a wonder more crazy things don’t happen in this world.",
    },
  ];
  const elements = blogdata.map((item) => {
    return (
      <BlogCard
        key={item.id}
        title={item.title}
        description={item.description}
        img={item.img}
      />
    );
  });
  return (
    <div>
      <div className="NavigationBar">
        <NavigationBar />
      </div>
      <div>
        <Banner />
      </div>
      <div className="body">{elements}</div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
