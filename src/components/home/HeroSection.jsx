import React from "react";
import img from "../../assets/images/dommy-image.jpg";
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
    <div className="bg-bgcolour text-black px-72 h-screen flex items-center">
      <div className="flex w-full h-full items-center">
        <div className="w-1/2">
          <h1 className="text-7xl font-bold mb-6">
            <span className="text-black">Hey, I'M </span>
            <span className="text-navy">Bawantha Pasqual</span>
          </h1>

          <h1 className="text-4xl font-bold mb-6 text-black">
            Full Stack Developer
          </h1>
          <p className="text-secondaryText text-xl mb-10">
            I’m passionate about learning and growing as a developer, with a
            love for coding and creating impactful projects. Outside work, I
            enjoy cricket and unwinding with Netflix. Skilled in{" "}
            <b className="text-black">JavaScript</b> and the{" "}
            <b className="text-black">MERN stack</b>, I’m excited to keep
            evolving in the world of software engineering. Let's connect!
          </p>
          <div className="flex space-x-6">
            <button
              className="flex items-center bg-white p-4 shadow border-blue-gray-50 rounded-md hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-navy group"
              title="LinkedIn"
            >
              <FaLinkedin
                size={35}
                className="transition-colors duration-250 text-[#0A66C2] group-hover:text-white"
              />
            </button>
            <button
              className="flex items-center bg-white p-4 shadow border-blue-gray-50 rounded-md hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-navy group"
              title="GitHub"
            >
              <FaGithub
                size={35}
                className="transition-colors duration-250 text-[#171515] group-hover:text-white"
              />
            </button>
            <button
              className="flex items-center bg-white p-4 shadow border-blue-gray-50 rounded-md hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-navy group"
              title="Email"
            >
              <FaEnvelope
                size={35}
                className="transition-colors duration-250 text-[#D44638] group-hover:text-white"
              />
            </button>
            <button
              className="flex items-center bg-white p-4 shadow border-blue-gray-50 rounded-md hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-navy group"
              title="WhatsApp"
            >
              <FaWhatsapp
                size={35}
                className="transition-colors duration-250 text-[#25D366] group-hover:text-white"
              />
            </button>
          </div>
        </div>

        <div className="w-1/2 flex justify-end items-center">
          <img
            src={img}
            alt="Hero Section"
            className="w-full max-w-md rounded-md shadow-xl border-blue-gray-50"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
