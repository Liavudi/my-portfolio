import AboutMe from "../../components/about-me/about-me";
import { motion } from "framer-motion";
import "./home.css";
import Stars from "../../components/stars/stars";
import { useRef } from "react";
export default function Home({ setBackgroundColor }) {
  const aboutRef = useRef(null);

  setTimeout(() => {
    setBackgroundColor("#0d1d31");
  }, 0);

  return (
    <motion.div
      className="home-container"
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Stars />
      <motion.div
        className="introduction"
        initial={{ y: -700 }}
        animate={{ y: 0 }}
        exit={{ y: -700 }}
        transition={{ duration: 1.3 }}
        key="intro"
      >
        <h1 id="intro-title">Liav Udi</h1>
        <p>A self-taught Full Stack Developer</p>
        <button
          id="intro-btn"
          onClick={() =>
            aboutRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          More about me
        </button>
      </motion.div>
      <AboutMe ref={aboutRef} />
    </motion.div>
  );
}
