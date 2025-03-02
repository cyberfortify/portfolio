import React, { useState } from "react";
import "../styles/Projects.css";
import Project1 from "../assets/images/project1.jpg";
import Project2 from "../assets/images/project2.png";
import Project3 from "../assets/images/project3.png";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Expense Tracker",
    description: "A web app to track your expenses efficiently.",
    image: Project1,
    link: "#",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "#"
  },
  {
    id: 2,
    title: "Weather App",
    description: "Real-time weather forecasting using OpenWeatherMap API.",
    image: Project2,
    link: "#",
    tech: ["React", "API Integration", "CSS3"],
    github: "#"
  },
  {
    id: 3,
    title: "Real-Time Chat",
    description: "Chat app with Socket.IO & Python Flask.",
    image: Project3,
    link: "#",
    tech: ["Python", "Flask", "Socket.IO"],
    github: "#"
  }
  // Add new projects here
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="card-content">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
              />
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="demo-link"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="github-link"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Project Modal */}
      {selectedProject && (
        <div className="project-modal">
          {/* Modal content here */}
        </div>
      )}
    </section>
  );
};

export default Projects;