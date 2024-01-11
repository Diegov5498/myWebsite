import React from "react";
import "./styles/portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h3 className="projects-title">Projects</h3>
      <ul className="projects-grid">
        <div className="c">
          <Link to="/myWebsite/portfolio/C">C++</Link>
        </div>
        <div className="react">
          <Link to="/myWebsite/portfolio/ReactProjects">React.js</Link>
        </div>
        <div className="javascript">
          <Link to="/myWebsite/portfolio/Javascript">Javascript</Link>
        </div>
        <div className="python">
          <Link to="/myWebsite/ComingSoon">Python</Link>
        </div>
      </ul>
    </div>
  );
};

export default Portfolio;
