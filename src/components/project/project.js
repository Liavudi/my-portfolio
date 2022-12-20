import { motion } from "framer-motion";
import { useState } from "react";
import YouTube from "react-youtube";
import "./project.css";

// Reminder TODO: A better implemention of the Project component also Make A projectList Component, Arrange them better and while changing check for the animations
function StackedProjects({skillsRef}) {
  const projectList = require("../../my-projects.json");
  const [clickedProject, setClickedProject] = useState(null);
  const [projectKey, setProjectKey] = useState(null);

  return (
    <div className="projects-container">
      <motion.div
        key="projects-list"
        className="projects-list"
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        exit={{ x: -1000 }}
        transition={{ duration: 1 }}
      >
        {projectList.map((data, key) => {
          return data.name.length > 0 ? (
            <div
              key={`projectID=${key}`}
              className="project-list-title"
              onClick={() => {
                setProjectKey(key);
                if (projectKey === key) {
                  setClickedProject(null);
                  return setProjectKey(null);
                }
                return setClickedProject(projectList[key]);
              }}
            >
              {data.name}
            </div>
          ) : (
            ""
          );
        })}
        <button className='skills-btn' onClick={() =>
         skillsRef.current.scrollIntoView({ behavior: "smooth" })
        }>My Skills</button>
      </motion.div>
      <div className="project-info-motion">
        <Project project={clickedProject} projectKey={projectKey} />
      </div>
    </div>
  );
}

function Project({ project, projectKey }) {
  const youtubeOptions = () => {
    if (window.innerWidth <= 360) {
      return { width: "100%", height: 250 };
    }
    return { width: "100%", height: 360 };
  };

  const animationOptions = () => {
    if (window.innerWidth <= 360) {
      return { x: 500 };
    }
    return { x: 1500 };
  };

  return project ? (
    <motion.div
      key={`projectPointerID=${projectKey}`}
      className="project-info-container"
      initial={animationOptions()}
      animate={{ x: 0 }}
      exit={animationOptions()}
      transition={{ duration: 1 }}
    >
      <div className="project-info">
        <div>
          <div className="project-title">{project.title}:</div>

          <ul className="project-desc-container">
            {project.desc.map((data, key) => {
              return (
                <li className="project-desc" key={key}>
                  {data}
                </li>
              );
            })}
          </ul>
          <div className="youtube-container">
            <YouTube videoId={project.youtubeId} opts={youtubeOptions()} />
          </div>
        </div>
      </div>

      <div className="knowledge">
        <ul className="knowledge-ul">
          <h3 className="knowledge-title">Knowledge:</h3>
          {project.code.map((data, key) => {
            return (
              <li className="project-desc" key={`codedID=${key}`}>
                {data}
              </li>
            );
          })}
          

        </ul>
        
        {project.github.map((data, key)=>{
          
            return <a className='githubLink' key={key} href={data.link}>{data.name}</a>
            
  
          })}
      </div>
    </motion.div>
  ) : (
    ""
  );
}

export default StackedProjects;
