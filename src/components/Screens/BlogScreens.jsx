import React from "react";
import "./BlogScreens.css";
import singleBlogImage from "../../assets/single.jpg";

const BlogScreens = () => {
  return (
    <div>
      {/* <section className="sub-header">
        <h1>Our Certificate & Online Programs For 2026</h1>
      </section> */}

      {/* <!-- blog page --> */}

      <section className="blog-content">
        <div className="row">
          <div className="blog-left">
            <img src={singleBlogImage} alt="Single" />
            <h2>Our Certificate & Online Programs For 2026</h2>
            <p>
              Earn industry-focused certificates that demonstrate your knowledge
              and skills. Our programs are designed to help you gain practical
              experience, strengthen your professional profile, and confidently
              take the next step toward achieving your career goals.
            </p>
            <br />
            <p>
              Learn from anywhere with flexible online programs created to fit
              your schedule. Access quality lessons, practical resources, and
              expert guidance while developing useful skills that can be applied
              in school, business, or the workplace.
            </p>
            <br />
            <p>
              Build practical skills through carefully designed courses that
              focus on real-world knowledge and experience. Whether you are
              starting your career, improving your existing abilities, or
              exploring a new field, our training programs provide the tools and
              confidence you need to succeed in today’s competitive environment.
            </p>
            <br />
            <p>
              Enjoy the freedom to learn at your own pace with our accessible
              online programs. Study from home, work, or anywhere with an
              internet connection while balancing your education with other
              responsibilities. Our flexible approach makes it easier to gain
              valuable knowledge without putting your daily commitments on hold.
            </p>

            <div className="comment-box">
              <h3>Leave a comment</h3>

              <form className="comment-form">
                <input type="text" placeholder="Enter Name" />
                <input type="email" placeholder="Enter Email" />
                <textarea rows="5" placeholder="Your comment"></textarea>
                <button type="submit" className="hero-btn red-btn">
                  POST COMMENT
                </button>
              </form>
            </div>
          </div>
          <div className="blog-right">
            <h3>Post Categories</h3>
            <div>
              <span>Business Analytics</span>
              <span>12</span>
            </div>
            <div>
              <span>Business Analytics</span>
              <span>12</span>
            </div>
            <div>
              <span>Business Analytics</span>
              <span>12</span>
            </div>
            <div>
              <span>Business Analytics</span>
              <span>12</span>
            </div>
            <div>
              <span>Business Analytics</span>
              <span>12</span>
            </div>
            <div>
              <span>Business Analytics</span>
              <span>12</span>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- footer --> */}

      {/* <section class="footer">
      <h4>About Us</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        numquam dolor reiciendis autem modi alias laborum, <br />vitae nostrum.
        Beatae, itaque.
      </p>
      <div class="icons">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin-in"></i>
      </div>

      <p>Made With <i class="fa-regular fa-heart"></i> by Easy Tutorials</p>
    </section> */}
    </div>
  );
};

export default BlogScreens;
