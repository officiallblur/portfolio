import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import "./Experience.css"

const experiences = [
  {
    role: "Frontend Developer",
    company: "Barnksforte Technologies",
    period: "Feb 2026 – Present",
    description:
      "Developed responsive and scalable user interfaces using React.js and modern frontend tools also acquired Knowledge on FrontEnd Development using React, Typescript and Knowledge in Quality Assurance(QA).",
  },
  {
    role: "Fullstack developer (Instructor)",
    company: "Techminds Academy",
    period: "Jan 2024 – Feb 2025",
    description:
      "Taught HTML, CSS, JavaScript and PHP to aspiring developers, Developed curriculum and learning materials for fullstack development and i also mentored students through projects and career development.",
  },
  {
    role: "Trainee",
    company: "Industrial Training Fund (ITF)",
    period: "Sep 2022 – Mar 2023",
    description:
      "Learned computer hardware maintenance and troubleshooting, Gained knowledge in networking fundamentals and configurations also participated in real-world IT infrastructure projects.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <Reveal>
        <h2 className="experience-title">My Experience</h2>
      </Reveal>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span className="timeline-period">{exp.period}</span>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
