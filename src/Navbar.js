import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css";

const Navbar = () => {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isSolid ? "solid" : ""}>
      <div className="left-section">
        <h1>Diego Fernando Vela</h1>
      </div>
      <div className="mid-section"></div>
      <ul className="right-section">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/ComingSoon">Skills</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
