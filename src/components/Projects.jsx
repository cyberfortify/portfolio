import React from "react";
import Slider from "react-slick";
import "../styles/Projects.css";
import Project1 from "../assets/images/project1.jpg";
import Project2 from "../assets/images/project2.png";
import Project3 from "../assets/images/project3.png";

const projects = [
  {
    id: 1,
    title: "Expense Tracker",
    description: "A web app to track your expenses efficiently.",
    image: Project1,
    link: "#",

  },
  {
    id: 2,
    title: "Weather App",
    description: "A weather forecasting app using OpenWeatherMap API.",
    image: Project2,
    link: "#",
  },
  {
    id: 3,
    title: "Real-Time Chat App",
    description: "A chat app built with Socket.IO and Python Flask.",
    image: Project3,
    link: "#",
  },
  {
    id: 4,
    title: "Task Manager",
    description: "A task management app with deadlines and reminders.",
    image: "/assets/project4.jpg",
    link: "#",
  },
  // Add more projects as needed in the future
];

const Projects = () => {
  // Settings for the carousel
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <Slider {...settings} className="project-carousel">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-inner">
              {/* Front of the Card */}
              <div className="card-front">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <h3 className="project-title">{project.title}</h3>
              </div>

              {/* Back of the Card */}
              <div className="card-back">
                <h2>{project.title}</h2><br />
                <p className="project-description">{project.description}</p>
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;
