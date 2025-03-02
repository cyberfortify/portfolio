import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import MyImage from "../assets/images/selfie.jpg";
import ResumePDF from "../assets/Pdf/AdityaGeneralResume.pdf";
import "../styles/Introduction.css";

const Introduction = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="introduction">
      {/* Floating Navigation */}
      <motion.nav
        className="floating-nav"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="logo">
          <a href="/">AV Portfolio</a>
        </div>
        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <Link to="about" smooth={true} offset={-50} onClick={handleToggle}>
            About
          </Link>
          <Link to="projects" smooth={true} offset={-50} onClick={handleToggle}>
            Projects
          </Link>
          <Link to="skills" smooth={true} offset={-50} onClick={handleToggle}>
            Skills
          </Link>
          <Link to="contact" smooth={true} offset={-50} onClick={handleToggle}>
            Contact
          </Link>
        </div>
        <div className="menu-toggle" onClick={handleToggle}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="intro-content">
        <div className="intro-left">
          <motion.h1
            className="intro-heading"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span>Aditya Vishwakarma</span>
          </motion.h1>
          <motion.p
            className="intro-description"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A passionate developer crafting innovative solutions.
          </motion.p>
          <motion.div
            className="intro-buttons"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="primary-btn">
              <a href="#contact">Hire Me</a>
            </button>
            <button className="secondary-btn">
              <a href={ResumePDF} download="Aditya_General_Resume.pdf">
                View Resume
              </a>
            </button>
          </motion.div>
        </div>
        <div className="intro-right">
          <motion.img
            src={MyImage}
            alt="Aditya"
            className="intro-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
