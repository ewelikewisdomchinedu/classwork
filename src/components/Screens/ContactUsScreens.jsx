import React from "react";
import "./ContactUsScreens.css";

const ContactUsScreens = () => {
  return (
    <div>
      <section className="sub-header">
        {/* background */}

        <div className="sub-content">
          <div className="small-tittle">GET IN TOUCH</div>
          <h1>
            Ready To Transform
            <br />
            Your School ?
          </h1>
          <p>
            Join hundreds of schools that have already transformed their
            learning experience with our innovative solutions,improve
            communication and drive better educational outcomes.
          </p>

          {/* buttons */}

          <div className="buttons">
            <button className="schedule">Schedule a Demo</button>
            <button className="contact">Contact Sales</button>
          </div>

          {/* floating buttons */}

          <div className="book-demo">Book Demo</div>

          {/* next session */}
        </div>
      </section>

      {/* <!-- contact us --> */}

      <section className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127083.59928309082!2d6.991149455906419!3d5.513096112305338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104259980202a4a1%3A0x2b97fd8924660eb1!2sOwerri%2C%20Imo!5e0!3m2!1sen!2sng!4v1786011693845!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </section>

      <section className="contact-us">
        <div className="row">
          <div className="contact-col">
            <div>
              <i className="fa-solid fa-house"></i>
              <span>
                <p>Imo, Nigeria</p>
                <h5>world bank rd</h5>
              </span>
            </div>
            <div>
              <i className="fa-solid fa-circle-user"></i>
              <span>
                <p>Call us anytime</p>
                <h5>+234 07071149910</h5>
              </span>
            </div>
            <div>
              <i className="fa-solid fa-square-envelope"></i>
              <span>
                <p>Email us your query</p>
                <h5>info@chineduwisdom657@gmail.com</h5>
              </span>
            </div>
          </div>
          <div className="contact-col">
            <form>
              <input type="text" placeholder="Enter Your Name" required />
              <input type="email" placeholder="Enter email address" required />
              <input type="text" placeholder="Enter Your subject" required />
              <textarea rows="8" placeholder="message" required></textarea>
              <button type="submit" clas="hero-btn red-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsScreens;
