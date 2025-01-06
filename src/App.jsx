import { Routes, Route } from "react-router-dom";
// import { Analytics } from "@vercel/analytics/react";
import Home from "./components/pages/Home";
import AnimatedCursor from "react-animated-cursor";
import { useEffect, useState } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <>
      {!isMobile && (
        <AnimatedCursor
          color="0, 0, 255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Analytics /> */}
    </>
  );
}

export default App;
