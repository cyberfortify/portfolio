import React, { useRef } from "react";
import Draggable from "react-draggable";

const SkillBall = ({ skill, position, color }) => {
  const ballRef = useRef(null);

  return (
    <Draggable nodeRef={ballRef}>
      <div
        ref={ballRef}
        style={{
          position: "absolute",
          left: `${position[0]}%`,
          top: `${position[1]}%`,
          cursor: "grab",
        }}
      >
        <div
          style={{
            animation: "float 5s ease-in-out infinite", // Floating animation
          }}
        >
          <div
            style={{
              width: "clamp(50px, 8vw, 80px)", // Responsive size
              height: "clamp(50px, 8vw, 80px)",
              borderRadius: "50%",
              backgroundColor: color || "#000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
              userSelect: "none",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              fontSize: "clamp(10px, 2vw, 16px)", // Responsive font size
            }}
          >
            {skill || "N/A"}
          </div>
        </div>
      </div>
    </Draggable>
  );
};

const SkillsSection = () => {
  const skills = [
    { name: "Python", color: "#3776AB", position: [10, 10] },
    { name: "HTML", color: "#E34C26", position: [30, 10] },
    { name: "CSS", color: "#1572B6", position: [50, 10] },
    { name: "JavaScript", color: "#F7DF1E", position: [70, 10] },
    { name: "React.js", color: "#61DAFB", position: [60, 20] },
    { name: "Gen AI", color: "#339933", position: [40, 20] },
    { name: "SQL", color: "#4479A1", position: [20, 20] },
  ];

  return (
    <section
      id="skills"
      style={{
        height: "90vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <h2
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "10px",
          fontSize: "clamp(1.5rem, 3vw, 2rem)", // Responsive heading
        }}
      >
        I have experience with these technologies
      </h2>
      <div
        style={{
          position: "relative",
          width: "100%",
          marginTop: "6rem",
          height: "calc(100% - 60px)",
        }}
      >
        {skills.map((skill, index) => (
          <SkillBall
            key={index}
            skill={skill.name}
            position={skill.position}
            color={skill.color}
          />
        ))}
      </div>
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
            100% {
              transform: translateY(0px);
            }
          }
        `}
      </style>
    </section>
  );
};

export default SkillsSection;
