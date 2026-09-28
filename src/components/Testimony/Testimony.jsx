import React from "react";
import "./Testimony.css";
import HH from "../../assets/HH.png";
import GG from "../../assets/GG.png";

const Testimony = () => {
  return (
    <div>
      {/* <!--TESTIMONY SECTION--> */}
      <section className="testimonials">
        <h4>TESTIMONIES</h4>
        <h2>FeedBack From Our Students</h2>
        <div className="testimonial-container">
          <div className="card">
            <img src={HH} alt="" />
            <h3>Oluchi Iwueze</h3>
            <p>
              This Academy Completely Changed my career. i learned a lot that
              will help me in the future
            </p>
          </div>
          <div className="card">
            <img src={GG} alt="" />
            <h3>John De beloved</h3>
            <p>
              I am glad i joined this cohort cause there are a lot i learned
              this coming days
            </p>
          </div>
          <div className="card">
            <img src={HH} alt="" />
            <h3>Ewelike Wisdom</h3>
            <p>
              There was a time i could'nt learn it at all then the tutor came to
              me and made it easier for me
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimony;
