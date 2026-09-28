import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* <!-- footer --> */}

      <footer className="footer">
        <div className="footer-container">
          {/* <!-- About --> */}

          <div className="footer-box">
            <h2>Our Digital Skills Academy</h2>

            <p>
              Empowering Students with Practical digital skills for a better
              future
            </p>
          </div>

          {/* <!-- QUICK LINKS --> */}

          <div className="footer-box">
            <h3>QUICK LINKS</h3>

            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/course">Courses</Link>

            <Link to="/contact">Contact</Link>
          </div>

          {/* <!-- contact --> */}

          <div className="footer-box">
            <h3>Contact Us</h3>

            <p>Email: info@example.com</p>

            <p>Phone: +234 08077687656</p>

            <p>Owerri, Imo state</p>
          </div>
        </div>

        {/* <!-- COPYWRITE --> */}

        <div className="copywrite">
          <p>&#169; Our Digital Skills Academy. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
