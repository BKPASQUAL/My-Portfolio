import React from "react";
import img from "../../assets/images/School_dp.jpg";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

function HeroSection() {
  return (
    <div className="bg-bgcolour text-black px-4 sm:px-8 mt-20 sm:mt-32 md:mt-20 md:px-16 lg:px-72 lg:mt-0 h-screen flex flex-col-reverse lg:flex-row items-center">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
          <span className="text-black">Hey, I'M </span>
          <span className="text-navy">Bawantha Pasqual</span>
        </h1>

        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-black">
          Full Stack Developer
        </h1>

        <p className="text-secondaryText text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-justify">
          I’m passionate about learning and growing as a developer, with a love
          for coding and creating impactful projects. Outside work, I enjoy
          cricket and unwinding with Netflix. Skilled in
          <b className="text-black"> JavaScript </b> and the
          <b className="text-black"> MERN stack </b>, I’m excited to keep
          evolving in the world of software engineering. Let's connect!
        </p>

        <div className="flex space-x-3 sm:space-x-4 md:space-x-6">
          <button
            className="flex items-center bg-white p-2 sm:p-3 md:p-4 shadow border-blue-gray-50 rounded-md cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-navy group"
            title="LinkedIn"
          >
            <FaLinkedin
              size={24}
              className="transition-colors duration-250 text-[#0A66C2] group-hover:text-white"
            />
          </button>
          <button
            className="flex items-center bg-white p-2 sm:p-3 md:p-4 shadow border-blue-gray-50 rounded-md cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-navy group"
            title="GitHub"
          >
            <FaGithub
              size={24}
              className="transition-colors duration-250 text-[#171515] group-hover:text-white"
            />
          </button>
          <button
            className="flex items-center bg-white p-2 sm:p-3 md:p-4 shadow border-blue-gray-50 rounded-md cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-navy group"
            title="Email"
          >
            <FaEnvelope
              size={24}
              className="transition-colors duration-250 text-[#D44638] group-hover:text-white"
            />
          </button>
          <button
            className="flex items-center bg-white p-2 sm:p-3 md:p-4 shadow border-blue-gray-50 rounded-md cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-navy group"
            title="WhatsApp"
          >
            <FaWhatsapp
              size={24}
              className="transition-colors duration-250 text-[#25D366] group-hover:text-white"
            />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mb-10 lg:mb-0">
        <img
          src={img}
          alt="Hero Section"
          className="w-2/3 sm:w-3/4 md:w-full max-w-xs sm:max-w-md rounded-md shadow-xl border-blue-gray-50"
        />
      </div>
    </div>
  );
}

export default HeroSection;
