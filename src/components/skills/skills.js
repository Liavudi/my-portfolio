import { forwardRef } from "react";
import "./skills.css";

const Skills = forwardRef((props,ref) => {
    const skillsList = [
        { name: "Python", width: "130px" },
        { name: "TypesScript", width: "100px" },
        { name: "Reactjs", width: "130px" },
        { name: "Angular", width: "110px" },
        { name: "ReactNative", width: "120px" },
        { name: "MongoDB", width: "120px" },
        { name: "Flask", width: "110px" },
        { name: "Nodejs", width: "100px" },
        { name: "Postman", width: "110px" },
        { name: "git", width: "120px" },
        { name: "NoSQL", width: "120px" },
        { name: "HTML & CSS", width: "130px" },
      ];
    
      return (
        <div className="skills-container" ref={ref}>
            <div className='skills-title-container'>
          <h1 className="skills-title" >{"<Skills />"}</h1> 
          <p className='skills-subtitle'>Click to reveal</p>

            </div>
          <div className="skills">
            <div className="tech-skills-container">
              {skillsList.map((data, key) => {
                return (
                  <div
                    className="tech-skills"
                    key={key}
                    onClick={() => {
                      document.getElementById(`bar${key}`).style.width = data.width;
                    }}
                  >
                    {data.name}
                    <div
                      style={{
                        width: "150px",
                        backgroundColor: "grey",
                        height: "10%",
                        borderRadius: "20px",
                      }}
                    >
                      <div className="loading-bar" id={`bar${key}`}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    
}) 


export default Skills;
