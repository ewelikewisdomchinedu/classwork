import React from "react";

const App = () => {
  return (
    <div>
      {/* <!-- HEADER --> */}
      <section class="header">
        <nav>
          <div className="nav-links">
            <ul>
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">ABOUT</a>
              </li>
              <li>
                <a href="">COURSE</a>
              </li>
              <li>
                <a href="">BLOG</a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="text-box">
          <h1></h1>
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
          <img src="ground.jpg" alt="student" />
        </div>
      </section>

      {/* <!--TESTIMONY SECTION--> */}
      <section className="testimonials">
        <h4>TESTIMONIES</h4>
        <h2>FeedBack From Our Students</h2>
        <div className="testimonial-container">
          <div className="card">
            <img src="HH.png" alt="" />
            <h3>Oluchi Iwueze</h3>
            <p>
              This Academy Completely Changed my career. i learned a lot that
              will help me in the future
            </p>
          </div>
          <div className="card">
            <img src="GG.png" alt="" />
            <h3>John De beloved</h3>
            <p>
              I am glad i joined this cohort cause there are a lot i learned
              this coming days
            </p>
          </div>
          <div className="card">
            <img src="HH.png" alt="" />
            <h3>Ewelike Wisdom</h3>
            <p>
              There was a time i could'nt learn it at all then the tutor came to
              me and made it easier for me
            </p>
          </div>
        </div>
      </section>

      {/* <!-- call to action --> */}

      <section className="cta">
        <div className="cta-content">
          <h2>Ready To Start Your Learning Journey</h2>
          <p>
            Join Us Today and Start Learning practical digital skills that can
            transform your future.
          </p>
          <a href="#" className="cta-button">
            Get Started
          </a>
        </div>
      </section>

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

            <a href="#">Home</a>

            <a href="#">About</a>

            <a href="#">Courses</a>

            <a href="#">Contact</a>
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

export default App;
