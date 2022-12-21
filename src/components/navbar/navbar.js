import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar({ backgroundColor, bottomRef }) {
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
      key={"nav-bar"}
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ duration: 1 }}
    >
      <div style={{ marginLeft: "1rem" }}>
        <div
          className="link"
          id="liav-wrapper"
          onClick={() => {
            navigate("/");
          }}
        >
          <div id="liav-top">Liavudi</div>
          <div id="liav-bottom">Liavudi</div>
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
        <div
          className="link"
          onClick={() => {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact
        </div>
      </div>
    </motion.div>
  );
}
