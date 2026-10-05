import React from "react";
import "./AboutScreens.css";
import libraryImage from "../../assets/library.jpg";
import BasketImage from "../../assets/basket.jpg";

const AboutScreens = () => {
  return (
    <div>
      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>Everything Your School Needs In One Platform</h1>
            <p>
              Powerful tools designed to simply administrative tasks, so you can
              focus on what matters most: your students. Our platform is
              designed to help schools streamline their operations, improve
              communication, and enhance the learning experience for students.
              With our easy-to-use interface and comprehensive features, you can
              manage everything from attendance and grades to parent
              communication and student progress tracking. Join the thousands of
              schools that have already made the switch to our platform and
              experience the difference it can make for your school community.
            </p>
            <div className="image-container">
              <img src={libraryImage} alt="Library" />
              <img src={BasketImage} alt="Basket" />
            </div>
          </div>

          <section className="features">
            <div className="container">
              {/* crd 1 */}
              <div className="card">
                <h2>Admissions Management</h2>
                <p>
                  Online application, document uploads,automated offer letters.
                  Reduce paperwork by 80%
                </p>
              </div>
              {/* crd 2 */}
              <div className="card">
                <h2>Student Information Management</h2>
                <p>
                  Centralized database for student records, academic history,
                  and personal information.
                </p>
              </div>
              {/* crd 3 */}
              <div className="card">
                <h2>Attendance Tracking</h2>
                <p>
                  Real-time attendance monitoring with automated reporting and
                  alerts.
                </p>
              </div>
              {/* crd 4 */}
              <div className="card">
                <h2>Gradebook and Assessment</h2>
                <p>
                  Comprehensive grading tools with real-time performance
                  analytics and reporting.
                </p>
              </div>
              {/* crd 5 */}
              <div className="card">
                <h2>
                  Finance & Fee
                  <br />
                  Management
                </h2>
                <p>
                  Streamline financial operations with automated billing,
                  payment processing, and reporting.
                </p>
              </div>
              {/* crd 6 */}
              <div className="card">
                <h2>Communication & Collaboration</h2>
                <p>
                  Enhance communication between students, parents, and staff
                  with integrated messaging and collaboration tools.
                </p>
              </div>
            </div>

            {/* F;oating buttons */}
            <button className="book-demo">Book Demo</button>
          </section>

          {/* <div className="about-col">
            <img src={principalImage} alt="Principal" />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default AboutScreens;
