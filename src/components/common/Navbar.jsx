import React, { useState } from "react";
import logo from "../../assets/images/bk.jpg";
import { Link } from 'react-scroll'; // Importing Link from react-scroll for smooth scrolling

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-20 bg-bgcolour fixed top-0 left-0 w-full shadow-md z-20 flex justify-between items-center px-4 md:px-8 dark:bg-black">
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
      <div className="hidden lg:flex space-x-6 justify-center text-sm md:text-lg">
        {["About", "Skills", "Expertise", "Projects", "Work", "Education", "Certificates"].map((link) => (
          <Link
            key={link}
            to={link.toLowerCase()} // This is the section id you want to scroll to
            smooth={true}  // Enables smooth scrolling
            duration={500} // Sets the duration for smooth scrolling
            className="relative group cursor-pointer hover:text-navy"
            activeClass="font-bold text-navy     " // Apply active class when this section is in view
            spy={true}  // This enables the activeClass functionality
            offset={-100} // This is to adjust the offset so that the nav link gets active a bit before the section is at the top
          >
            {link}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-navy font-semibold transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex lg:hidden">
        <button
          className="p-2 text-navy"
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
        {["About", "Skills", "Expertise", "Projects", "Work", "Education", "Certificates"].map((link) => (
          <Link
            key={link}
            to={link.toLowerCase()}
            smooth={true}
            duration={500}
            onClick={() => setIsMenuOpen(false)} // Close the menu when an item is clicked
            className="cursor-pointer text-lg font-semibold hover:text-gray-400"
            activeClass="font-bold text-navy" // Active class for mobile menu
            spy={true}  // Enables active class on scroll
            offset={-100} // Similar offset adjustment as for desktop
          >
            {link}
          </Link>
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
