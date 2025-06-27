import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import "../styles/About.css";

const About = () => {
  const education = [
    {
      institution: "Pune Vidyarthi Griha's College of Science & Technology",
      duration: "2022-2025",
      details: "BSc IT - CGPA: 9.63"
    },
    {
      institution: "PVG Vidya Bhavan College of Science & Commerce",
      duration: "2021-2022",
      details: " 12th HSC (Higher Secondary Certificate)"
    },
    {
      institution: "Joymax English High School & JR. College",
      duration: "2020",
      details: "10th SSC (Senior Secondary Certificate)"
    }
  ];

  const experiences = [
    {
      company: "Oasis Infobyte",
      role: "Python Developer Intern",
      duration: "2023",
      details: [
        "Developed BMI Calculator and Weather App",
        "Built Real-Time Chat Application using Socket.IO",
        "Gained expertise in Flask, MySQL, and API integration"
      ]
    },
    {
      company: "Hex Softwares",
      role: "Python Programming Intern",
      duration: "2023",
      details: [
        "Developed Expense Tracker and Geolocation Tracker",
        "Improved problem-solving and debugging skills",
        "Received letter of recommendation for quality work"
      ]
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="intro-card">
              <h3>Hello, I'm Aditya Vishwakarma</h3>
              <p className="intro-text">
                A passionate third-year BSc IT student specializing in full-stack development, 
                AI, and cybersecurity. I thrive on building innovative solutions and constantly 
                expanding my technical expertise.
              </p>
              <div className="skills-highlight">
                <span>Python</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>AI/ML</span>
                <span>Cybersecurity</span>
              </div>
            </div>

            <div className="education-section">
              <h4><FaGraduationCap className="icon" /> Education</h4>
              {education.map((edu, index) => (
                <div key={index} className="education-card">
                  <h5>{edu.institution}</h5>
                  <p className="duration">{edu.duration}</p>
                  <p className="details">{edu.details}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="divider"></div>

          <motion.div 
            className="about-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="experience-section">
              <h4><FaBriefcase className="icon" /> Experience</h4>
              {experiences.map((exp, index) => (
                <div key={index} className="experience-card">
                  <div className="experience-header">
                    <h5>{exp.company}</h5>
                    <span className="duration">{exp.duration}</span>
                  </div>
                  <p className="role">{exp.role}</p>
                  <ul className="experience-details">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;