import React from "react";
import Reveal from "./Reveal";

const Skills = () => {
  const skills = ["React", "Node.js", "JavaScript", "HTML", "CSS", "Typescript", "Git", "APIs"];

  return (
    <section id="skills" className="skills">
      <Reveal>
        <h2>My Skills</h2>
      </Reveal>

      <div className="skill-grid">
        {skills.map((skill, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="skill-card">{skill}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
