import React from "react";
import "./styles/home.css";

const Home = () => {
  const handleDownload = () => {
    console.log("Downloading file...");
  };

  return (
    <div className="home">
      <h2 className="title">Software Engineering</h2>
      <p className="aboutMe">
        My name is Diego Vela and this is my portfolio website! I'm a Computer
        Science junior at CSUF graduating in the Spring of 2025.
      </p>
      <div className="buttons-container">
        <a className="linked-in" href="https://www.linkedin.com/in/diegov5498/">
          linkedIn
        </a>
        <div></div>
        <a
          className="resume"
          href="/DiegoVResume.pdf"
          download="DiegoVResume.pdf"
          onClick={handleDownload}
        >
          resume.pdf
        </a>
      </div>
    </div>
  );
};

export default Home;
