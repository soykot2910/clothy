import React from "react";
import DirectoryComp from "../../components/DirectoryComp/DirectoryComp";
import "./homepage.style.scss";

const Home = () => {
  return (
    <div className="homepage">
      <h1>Welcome to my Homepage</h1>
      <DirectoryComp />
    </div>
  );
};

export default Home;
