import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Resume from "./Resume";

const MainPage = () => {
  return (
    <div className="space-y-20">
      <Home />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
};

export default MainPage;
