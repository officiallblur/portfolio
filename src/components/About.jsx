import React from "react";
import Reveal from "./Reveal";
import profile from "../assets/profile.png";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Abdulrahman-Lawal-CV.pdf"; 
    link.download = "Abdulrahman-Lawal-CV.pdf";
    link.click(); };
    
  return (
    
    <section id="about" className="about">
      <Reveal>
        <h2>About Me</h2>
      </Reveal>

      <div className="about-content">
        <Reveal direction="left">
          <img src={profile} alt="Profile" className="about-img" />
        </Reveal>
        <Reveal direction="right" delay={0.2}>
          <div className="about-text">
            <h3>Software Engineer </h3>
            <p>
              I'm a developer who loves transforming ideas into visually stunning and functional
              applications using React, Node.js, APIs, and cutting-edge design.
            </p>
           
            <button className="btn" onClick={handleDownload}>Download CV</button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
