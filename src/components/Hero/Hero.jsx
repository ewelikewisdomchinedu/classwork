import React from "react";
import "./Hero.css";
import ground from "../../assets/ground.jpg";

const Hero = () => {
  return (
    <div>
      {/* <!-- section --> */}
      <section className="about">
        <div className="about-text">
          <h4>ABOUT US</h4>
          <h2>
            Building Skills,
            <br />
            Building Futures
          </h2>
          <p>
            At morning class Digital Skills Academy, we provide practical
            training that helps you create a future
          </p>
          <ul>
            <li>&#10004; Practical Hands-on Learning</li>
            <li>&#10004; Expert Instructors</li>
            <li>&#10004; Flexible Learning Schedule</li>
          </ul>
          <a href="#" className="btn">
            Learn More
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
