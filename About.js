import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  return (
    <section>
      <div className="about-box">
        <p className="about-title">ABOUT ME</p>
        <p className="about-subtitle">
          Welcome to my professional corner! I am Saumya Sarangi, a dedicated
          and results-driven Student with a passion for Website Development. I
          bring a unique blend of strategic thinking and a commitment to
          delivering impactful results in the dynamic world of Development.
          <br />
          <Link to={"/Learn"} className="learnmore">
            Learn More
          </Link>
        </p>
      </div>
    </section>
  );
};

export default About;
