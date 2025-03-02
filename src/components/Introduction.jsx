import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/introduction.css";
import MyImage from "../assets/images/selfie.jpg";

const Introduction = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="introduction">
      {/* Floating Navigation */}
      <div className="floating-nav">
        <div className="logo">
          <Link to="home" smooth={true}>
            Home
          </Link>
        </div>
        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <Link to="about" smooth={true} offset={-50}>
            About
          </Link>
          <Link to="projects" smooth={true} offset={-50}>
            Projects
          </Link>
          <Link to="skills" smooth={true} offset={-50}>
            Skills
          </Link>
          <Link to="contact" smooth={true} offset={-50}>
            Contact
          </Link>
        </div>
        <div className="menu-toggle" onClick={handleToggle}>
          ☰
        </div>
      </div>

      {/* Main Content */}
      <div className="intro-left">
        <h1 className="intro-heading">Hi, I'm Aditya Vishwakarma</h1>
        <p className="intro-description">
          A passionate developer crafting innovative solutions.
        </p>
        <div className="intro-buttons">
          <button className="primary-btn">
            <a href="#contact">Hire Me</a>
          </button>
          <button className="secondary-btn">View Resume</button>
        </div>
      </div>
      <div className="intro-right">
        {/* Replace the image URL below with your preferred one */}
        <img src={MyImage} alt="Aditya" className="intro-image" />
      </div>
    </div>
  );
};

export default Introduction;
