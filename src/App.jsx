import React, { useState, useEffect } from "react";
import Introduction from "./components/Introduction";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const App = () => {
  return (
    <div>
      <Introduction />

      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <About />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Projects />
      </motion.section>
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
