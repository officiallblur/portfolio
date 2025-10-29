import React from "react";

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <h1 className="logo">Abdulrahman</h1>
      <nav>
        <ul>
          {["home", "about", "skills", "projects", "experience", "contact"].map((section) => (
            <li key={section} onClick={() => scrollToSection(section)}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
