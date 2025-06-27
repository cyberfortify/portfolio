import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useInView } from 'react-intersection-observer';
import "../styles/Skill.css";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const skillsRef = useRef(null);

  const skillsData = {
    languages: [
      { name: "Python", icon: "🐍", color: "#3776AB", proficiency: 90, projects: [1, 2] },
      { name: "JavaScript", icon: "🚀", color: "#F7DF1E", proficiency: 80, projects: [1, 3] },
      { name: "HTML", icon: "📄", color: "#E34F26", proficiency: 90, projects: [1, 4] }, 
      { name: "CSS", icon: "🎨", color: "#1572B6", proficiency: 85, projects: [1, 4] }
      
    ],
    frameworks: [
      { name: "React.js", icon: "⚛️", color: "#61DAFB", proficiency: 95, projects: [1, 3] },
      { name: "Flask", icon: "🍵", color: "#000000", proficiency: 85, projects: [2] }
    ],
    tools: [
      { name: "Git", icon: "🔀", color: "#F54D27", proficiency: 95, projects: [1, 2, 3] },
      { name: "GitHub", icon: "🐱", color: "#181717", proficiency: 80, projects: [1, 2, 3, 4] }
      
    ],
    databases: [
      { name: "MySQL", icon: "🐬", color: "#00758F", proficiency: 85, projects: [1, 2, 4] },
      { name: "Firebase", icon: "🔥", color: "#FFCA28", proficiency: 80, projects: [2, 4] }
    ]    
  };

  const allSkills = [...skillsData.languages, ...skillsData.frameworks, ...skillsData.tools, ...skillsData.databases]
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Technical Expertise
      </motion.h2>

      <div className="skill-tabs">
        {['all', 'languages', 'frameworks', 'tools','databases'].map(tab => (
          <button
            key={tab}
            className={`skill-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <motion.div 
        className="skills-grid"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {(activeTab === 'all' ? allSkills : skillsData[activeTab]).map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            style={{ '--skill-color': skill.color }}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              delay: index * 0.05
            }}
            onClick={() => handleSkillClick(skill)}
          >
            <div className="skill-sphere">
              <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Sphere args={[1, 32, 32]}>
                  <MeshDistortMaterial
                    color={skill.color}
                    attach="material"
                    distort={0.5}
                    speed={2}
                  />
                </Sphere>
              </Canvas>
            </div>
            <div className="skill-content">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-progress">
                <div 
                  className="progress-bar"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedSkill && (
        <div className="skill-details-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setSelectedSkill(null)}>
              &times;
            </button>
            <h3>{selectedSkill.name} Projects</h3>
            <div className="related-projects">
              {selectedSkill.projects.map(projectId => (
                <div key={projectId} className="project-card">
                  Project {projectId} Details
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SkillsSection;