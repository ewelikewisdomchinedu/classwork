import React from "react";
import "./Hero.css";
import ground from "../../assets/ground.jpg";

const Hero = () => {
  return (
    <div>
      {/* <!-- section --> */}
      <section className="about">
        <div className="about-text">
          <h4>PLATFORM FEATURES</h4>
          <h2>
            Digitally Transform
            <br />
            Your School Operations
          </h2>
          <p>
            Manage admissions, student records, and academic performance with
            ease. Our platform streamlines administrative tasks, allowing
            educators to focus on what matters most – teaching and learning.
          </p>
          <ul>
            <li>&#10004; Student Management</li>
            <li>&#10004; Online CBT Exams</li>
            <li>&#10004; SMS Results Delivery</li>
            <li>&#10004; Parent Portal</li>
            <li>&#10004; Financial Management</li>
            <li>&#10004; Real-Time Reports</li>
          </ul>
          <a href="#" className="btn">
            Book a Demo*
          </a>
        </div>
        <div className="about-image">
          <img src={ground} alt="About Us" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
