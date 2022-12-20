import "./about-me.css";
import { forwardRef } from "react";

const AboutMe = forwardRef((props, ref) => {
  return (
    <div className="about-me-container" ref={ref}>
      <img
        alt="liav-picture"
        className="profile-picture"
        src={require("../../assets/profile-pic.jpeg")}
      />

      <div className="about-me">
        <div className="title-container">About Me</div>
        <p>
          My name is Liav and I've started my journey as a self-taught developer
          over a year ago, I've done projects solo and collaborated with people.
          Developed Apps and Websites. I'm quietly confident, naturally curious,
          and perpetually working on improving my chops one design problem at a
          time.
        </p>

        <a
          className="resume-dl"
          href={require("../../assets/Full_Stack_Developer_Liav_Udi.pdf")}
          download
        >
          My Resume
        </a>
      </div>
    </div>
  );
});

export default AboutMe;
