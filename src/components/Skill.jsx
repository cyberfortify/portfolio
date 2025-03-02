import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "../styles/Skill.css";

const SkillsSection = () => {
  const skills = [
    "Python", "JavaScript", "React", "HTML5", "CSS3",
    "Node.js", "SQL", "Git", "Flask", "Cybersecurity",
    "AI/ML", "Java", "REST APIs", "Linux"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <motion.div
        ref={ref}
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-item"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;