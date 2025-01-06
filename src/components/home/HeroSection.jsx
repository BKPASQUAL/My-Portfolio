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
    <div className="bg-bgcolour text-black px-4 md:px-16 lg:px-72 h-screen flex flex-col-reverse lg:flex-row items-center">
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ">
          <span className="text-black ">Hey, I'M </span>
          <span className="text-navy">Bawantha Pasqual</span>
        </h1>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-black">
          Full Stack Developer
        </h1>
        <p className="text-secondaryText text-base md:text-lg lg:text-xl mb-10 text-justify">
          I’m passionate about learning and growing as a developer, with a
          love for coding and creating impactful projects. Outside work, I
          enjoy cricket and unwinding with Netflix. Skilled in
          <b className="text-black"> JavaScript </b> and the
          <b className="text-black"> MERN stack </b>, I’m excited to keep
          evolving in the world of software engineering. Let's connect!
        </p>
        <div className="flex space-x-4 md:space-x-6">
          <button
            className="flex items-center bg-white p-3 md:p-4 shadow border-blue-gray-50 rounded-md cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-navy group"
            title="LinkedIn"
          >
            <FaLinkedin
              size={30}
              className="transition-colors duration-250 text-[#0A66C2] group-hover:text-white"
            />
          </button>
          <button
            className="flex items-center bg-white p-3 md:p-4 shadow border-blue-gray-50 rounded-md cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-navy group"
            title="GitHub"
          >
            <FaGithub
              size={30}
              className="transition-colors duration-250 text-[#171515] group-hover:text-white"
            />
          </button>
          <button
            className="flex items-center bg-white p-3 md:p-4 shadow border-blue-gray-50 rounded-md cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-navy group"
            title="Email"
          >
            <FaEnvelope
              size={30}
              className="transition-colors duration-250 text-[#D44638] group-hover:text-white"
            />
          </button>
          <button
            className="flex items-center bg-white p-3 md:p-4 shadow border-blue-gray-50 rounded-md cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-navy group"
            title="WhatsApp"
          >
            <FaWhatsapp
              size={30}
              className="transition-colors duration-250 text-[#25D366] group-hover:text-white"
            />
          </button>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mb-10 lg:mb-0">
        <img
          src={img}
          alt="Hero Section"
          className="w-3/4 md:w-full max-w-md rounded-md shadow-xl border-blue-gray-50"
        />
      </div>
    </div>
  );
}

export default HeroSection;
