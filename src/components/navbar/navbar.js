import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar({ backgroundColor }) {
  const navigate = useNavigate();
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 150) return setColorchange(true);
    return setColorchange(false);
  };
  
  window.addEventListener("scroll", changeNavbarColor);
  useEffect(() => {
    if (colorChange) {
      
        document.getElementsByClassName(
          "navbar-container"
        )[0].style.backgroundColor = backgroundColor;
      
    } else {
    
        document.getElementsByClassName(
          "navbar-container"
        )[0].style.backgroundColor = "";
     
    }
  }, [colorChange, backgroundColor]);

  return (
    <motion.div
      className="navbar-container"
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ duration: 1 }}
    >
      <div style={{ marginLeft: "1rem", marginRight: "0.5rem" }}>
        <div
          className="link"
          onClick={() => {
            navigate("/");
          }}
        >
          {"<liav />"}
        </div>
      </div>
      <div className="nav-btns">
        <div
          className="link"
          onClick={() => {
            navigate("./projects");
          }}
        >
          Projects
        </div>
      </div>
    </motion.div>
  );
}
