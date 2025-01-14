import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-left">
            <p>
              Hi, I’m <strong>Aditya Vishwakarma</strong>, a third-year BSc IT
              student with a passion for web development, AI, and cybersecurity.
            </p>
            <br />
            <p>
              I specialize in building full-stack applications and am skilled in
              Python, Java, and web technologies.
            </p>
            <br />
            <hr />
            <br />
            <h3>Education</h3>
            <ul>
              <li>
                <strong>
                  Pune Vidyarthi Griha's College of <br />
                  Science & Technology
                </strong>{" "}
                <span>(2022-2025)</span>
                <br />
                <i>
                  <small>Semester 5 SGPA: 9.50</small>
                </i>
              </li>
              {/* Add more achievements or internship details */}
            </ul>
          </div>

          {/* Divider Line */}
          <div className="divider"></div>

          <div className="about-right">
            <br />
            <h3>Internship</h3>
            <details>
              <summary>Internship Experience at Oasis Infobyte</summary>
              <p>
                During my internship, I worked on a variety of projects that
                enhanced my skills in Python programming, web development, and
                API integration. Key achievements include developing a BMI
                Calculator, a Weather App integrated with OpenWeatherMap API,
                and a Real-Time Chat Application using Socket.IO and Python
                Flask. I gained hands-on experience with technologies like
                Flask, MySQL, Git, and more, solidifying my passion for software
                development.
              </p>
            </details>
            <details>
              <summary>Internship Experience at Hex Softwares</summary>
              <p>
                Completed a 4-week virtual internship focused on Python
                Programming, where I contributed to projects like Expense
                Tracker and Geolocation Tracker. Gained hands-on experience in
                problem-solving, debugging, and building Python applications.
                Collaborated with cross-department teams, strengthening
                technical skills and teamwork. Recognized for delivering quality
                code, meeting deadlines, and received commendations in a letter
                of recommendation.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
