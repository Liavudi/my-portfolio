import { Home, Projects } from "./pages";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";
import Footer from "./components/footer/footer";
import { useState } from "react";

function App() {
  const [backgroundColor, setBackgroundColor] = useState(null);
  const location = useLocation();
  return (
    <div className="App">
      <Navbar backgroundColor={backgroundColor} />
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
        <Footer />
      </AnimatePresence>
    </div>
  );
}

export default App;
