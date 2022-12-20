import { motion } from "framer-motion";

import StackedProjects from "../../components/project/project";
import "./projects-page.css";
export default function Projects({ setBackgroundColor }) {
  setTimeout(() =>{
    setBackgroundColor("#1f1a35");
  }, 0)

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
      <StackedProjects />
    </motion.div>
  );
}
