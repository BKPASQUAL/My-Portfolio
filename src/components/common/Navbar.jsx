import React, { useState } from "react";
import logo from "../../assets/images/bk.jpg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-20 bg-bgcolour fixed top-0 left-0 w-full shadow-md z-20 flex justify-between items-center px-4 md:px-8 ">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover p-1"
        />
        <h1 className="font-bold text-xl md:text-2xl">Bawantha Pasqual</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex space-x-6 justify-center font-semibold text-sm md:text-lg">
        {["About", "Skills", "Projects", "Work", "Education", "Certificates"].map((link) => (
          <p
            key={link}
            className="relative group cursor-pointer hover:text-navy"
          >
            {link}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-navy transition-all duration-300 group-hover:w-full"></span>
          </p>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex lg:hidden">
        <button
          className="p-2 text-black hover:text-navy"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu with Transparent Background */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black text bg-opacity-80 backdrop-blur-md text-white justify-center shadow-md transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col items-center space-y-4 py-10 z-50`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-white hover:text-gray-400"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Menu Links */}
        {["About", "Skills", "Projects", "Work", "Education", "Certificates"].map((link) => (
          <p
            key={link}
            className="cursor-pointer text-lg font-semibold hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            {link}
          </p>
        ))}

        {/* Social Links */}
        <div className="flex flex-col items-center gap-6 mt-4">
          {["LinkedIn", "GitHub", "Resume"].map((link) => (
            <p
              key={link}
              className="cursor-pointer text-lg font-semibold hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {link}
            </p>
          ))}
        </div>
      </div>

      {/* Desktop Links (Right Side) */}
      <div className="hidden lg:flex gap-x-4 justify-end font-semibold text-sm md:text-lg">
        {["LinkedIn", "GitHub", "Resume"].map((link) => (
          <p key={link} className="cursor-pointer hover:text-navy">
            {link}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
