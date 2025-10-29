import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Port<span>folio</span></h2>
      <ul className="nav-links">
        {["home", "about", "skills", "services", "portfolio", "contact"].map((sec) => (
          <li key={sec}>
            <button onClick={() => scrollToSection(sec)}>{sec.charAt(0).toUpperCase() + sec.slice(1)}</button>
          </li>
        ))}
      </ul>
      <button className="cv-btn">Download CV</button>
    </nav>
  );
};

export default Navbar;
