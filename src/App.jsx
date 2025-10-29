import React from "react";
import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Portfolio from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollIndicator from "./components/ScrollIndicator";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        
      </main>
      <Footer />
      <ScrollIndicator />
    </div>
  );
}

export default App;
