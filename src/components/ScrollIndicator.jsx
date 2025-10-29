import React, { useEffect, useState } from "react";
import "./ScrollIndicator.css";

const sections = ["home", "about", "skills", "projects", "experience", "contact"];

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = window.innerHeight / 2;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - offset;
          const bottom = top + section.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-indicator">
      {sections.map((id) => (
        <div
          key={id}
          className={`dot ${activeSection === id ? "active" : ""}`}
          onClick={() => scrollToSection(id)}
          title={id.charAt(0).toUpperCase() + id.slice(1)}
        ></div>
      ))}
    </div>
  );
};

export default ScrollIndicator;
