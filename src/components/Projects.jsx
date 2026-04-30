import React, { useState } from "react";
import Reveal from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Resume Craft",
      description:
        "A full-featured Resume-builder web app built with React and typescript, including authentication,  and AI features.",
      image: "resume-craft.png",
      github: "https://github.com/officiallblur/portfolio.git",
      demo: "https://portfolio-mu-silk-45.vercel.app/",
    },

    {
      title: "Funbox Movie website",
      description:
        "A movie information and exploring website with every movie included. Built using react, CSS, JS, API.",
      image: "funbox.png",
      github: "https://github.com/officiallblur/funbox.",
      demo: "https://funbox-blue.vercel.app",
    },
    {
      title: "Codexis",
      description:
        "A learning application mobile ui with all functionalities working perfectly. using React, tailwindcss, and typescript",
      image: "Codexis.png",
      github: "https://github.com/officiallblur/codexis.git",
      demo: "https://codexis-seven.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="projects">
      <Reveal>
        <h2 className="projects-title">View My Works</h2>
      </Reveal>

      <div className="project-grid">
        {projects.map((project, i) => (
          <Reveal key={i} delay={i * 0.2}>
            <motion.div
              className="project-card"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description.substring(0, 80)}...</p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

    
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />


            <motion.div
              className="modal"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-image"
              />
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              <div className="project-links">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  GitHub
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-btn"
                >
                  Live Demo
                </a>
              </div>

              <button className="close-btn" onClick={() => setSelectedProject(null)}>
                ✕
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
