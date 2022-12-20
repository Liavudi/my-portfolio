import { motion } from "framer-motion";
import { useRef } from "react";
import StackedProjects from "../../components/project/project";
import "./projects-page.css";
import Skills from "../../components/skills/skills";
export default function Projects({ setBackgroundColor }) {
  setTimeout(() =>{
    setBackgroundColor("#1f1a35");
  }, 0)
  const skillsRef = useRef(null)
  
  return (
    <motion.div
    key='project-page'
      className="projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="projects-title">My Projects</div>
      <StackedProjects skillsRef={skillsRef} />
      <Skills ref={skillsRef} />
    </motion.div>
  );
}
