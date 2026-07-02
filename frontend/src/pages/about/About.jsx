// import React from "react";
// import "./about.css";

// const About = () => {
//   return (
//     <div className="about">
//       <div className="about-content">
//         <h2>About us</h2>
//         <p>
//           We are dedicated to providing high-quality education and accessible
//           learning resources to students worldwide, empowering them to achieve
//           their personal and professional goals.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        {/* Header Section */}
        <header className="about-header">
          <h2>About Us</h2>
          <p className="subtitle">
            Empowering learners worldwide through accessible, high-quality
            education.
          </p>
        </header>

        {/* Mission Section */}
        <section className="about-section mission-section">
          <div className="section-text">
            <h3>Our Mission</h3>
            <p>
              We are dedicated to providing high-quality education and
              accessible learning resources to students worldwide. By breaking
              down traditional barriers to learning, we empower individuals to
              achieve their personal and professional goals, fostering a
              community of lifelong learners.
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="about-section values-section">
          <h3>Our Core Values</h3>
          <div className="values-grid">
            <div className="value-card">
              <h4>Accessibility</h4>
              <p>
                Quality education should be available to everyone, everywhere,
                at any time.
              </p>
            </div>
            <div className="value-card">
              <h4>Excellence</h4>
              <p>
                We hold our resources and content to the highest academic and
                professional standards.
              </p>
            </div>
            <div className="value-card">
              <h4>Innovation</h4>
              <p>
                Utilizing modern technology to make learning interactive,
                engaging, and effective.
              </p>
            </div>
          </div>
        </section>

        {/* Stats / Impact Section */}
        <section className="about-section stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Students Globally</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Expert Courses</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
