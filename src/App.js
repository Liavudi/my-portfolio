import { Home, Projects } from "./pages";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";
import Footer from "./components/footer/footer";
import { useRef, useState } from "react";

function App() {
  const [backgroundColor, setBackgroundColor] = useState(null);
  const bottomRef = useRef(null);
  console.log(bottomRef)
  const location = useLocation();
  return (
    <div className="App">
      <Navbar backgroundColor={backgroundColor} bottomRef={bottomRef} />
      <AnimatePresence mode="wait">
        <ScrollToTop />
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<Home setBackgroundColor={setBackgroundColor} />}
          />
          <Route
            path="/projects"
            element={<Projects setBackgroundColor={setBackgroundColor} />}
          />
        </Routes>
        <Footer ref={bottomRef}/>
      </AnimatePresence>
    </div>
  );
}

export default App;
