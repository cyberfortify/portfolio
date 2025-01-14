import React, { useState, useEffect } from "react";
import Introduction from "./components/Introduction";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const App = () => {
  return (
    <div>
      <Introduction />
      <ScrollToTop />

      <About />
      <Projects />
      <Skill />

      {/* parallel effect */}
      {/* <section
        id="parallax"
        style={{
          height: "100vh",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        <h2>Experience the Depth of Parallax</h2>
      </section> */}

      <Contact />
    </div>
  );
};

export default App;
