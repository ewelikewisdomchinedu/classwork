import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <section className="header">
        <nav>
          <a href="index.html">
            <img src="images/logo.png" className="logo" />
          </a>
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/About">ABOUT</Link>
              </li>
              <li>
                <Link to="/course">COURSE</Link>
              </li>
              <li>
                <Link to="/Blog">BLOG</Link>
              </li>
              <li>
                <Link to="/Contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="text-box">
          <h1>World's Biggest University</h1>
          <p>
            Making website is now one of the easiest thing in the world, you
            just need to learn HTML,CSS,
            <br />
            Javascript and you are good to go.
          </p>
          <a href="" className="hero-btn">
            Visit Us To Know More
          </a>
        </div>
      </section>
    </div>
  );
};

export default Header;
