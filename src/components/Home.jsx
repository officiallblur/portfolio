import React from "react";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const Home = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="text-area">
          <Reveal>
            <h2 className="intro">
              Hello, I'm{" "}
              <span className="typing-name">Abdulrahman Lawal</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="subtitle">
              A passionate Software Engineer crafting modern web experiences
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <button className="btn" onClick={scrollToProjects}>
              View My Work
            </button>
          </Reveal>
        </div>

      
        <motion.div
          className="terminal-wrapper"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="terminal">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <p className="terminal-title">developer@portfolio:~</p>
            </div>

            <div className="terminal-body">
              <p className="line">
                <span className="prompt">$</span> npm start
              </p>
              <p className="line typing">
                <span className="prompt"></span> Launching Abdulrahman's
                Portfolio...
              </p>
              <p className="line fade-in">
                <span className="prompt">✔</span> Connected to Creativity Engine
              </p>
              <p className="line fade-in delay">
                <span className="prompt">✔</span> Deploying animations and UI...
              </p>
              <p className="cursor">|</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
