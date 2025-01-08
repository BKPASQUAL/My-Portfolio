import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AnimatedCursor from "react-animated-cursor";
import DarkModeToggle from "./components/common/DarkModeToggle";
import { Analytics } from "@vercel/analytics/react";

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
    <div className="bg-bgcolour text-black dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      <header className="flex  justify-end p-4">
        <DarkModeToggle />
      </header>
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
      <Analytics />
    </div>
  );
}

export default App;

