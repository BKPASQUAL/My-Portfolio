import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      className="fixed bottom-4 right-4 p-3 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 dark:from-gray-700 dark:to-gray-900 text-white shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 dark:focus:ring-gray-400 hover:scale-110 transition-all duration-500 z-50"
      onClick={() => setDarkMode(!darkMode)}
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className="flex items-center justify-center">
        {darkMode ? (
          <FaSun size={24} className="animate-spin-slow" />
        ) : (
          <FaMoon size={24} />
        )}
      </div>
    </button>
  );
}

export default DarkModeToggle;
