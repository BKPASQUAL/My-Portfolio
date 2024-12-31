import React from "react";
import img from "../../assets/images/dommy-image.jpg";
import Divider from '@mui/material/Divider';

import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

function HeroSection() {
  return (
    <div
      className="bg-bgcolour text-black p-8"
      style={{ height: "calc(90vh)" }}
    >
      <div className="flex flex-col items-center text-center mt-20">
        <img
          src={img}
          alt="Hero Section"
          className="w-full max-w-md rounded-md shadow-xl border-blue-gray-50 mb-10"
        />
        <h1 className="text-4xl font-bold mb-4 text-navy">
          Hi, I'M Bawantha Pasqual
        </h1>
        <p className="text-black text-xl w-2/3 mb-14">
        I’m passionate about learning and growing as a developer, with a love
          for coding and creating impactful projects. Outside work, I enjoy
          cricket and unwinding with Netflix. Skilled in JavaScript and the MERN
          stack, I’m excited to keep evolving in the world of software
          engineering. Let's connect!
        </p>
        <div className="flex space-x-6">
          <button
            className="flex items-center bg-white p-2 shadow-xl border-blue-gray-50 rounded-md hover:scale-110 hover:shadow-2xl transition-transform duration-300 hover:bg-black"
            title="LinkedIn"
          >
            <FaLinkedin size={25} style={{ color: "#0A66C2" }} />
          </button>
          <button
            className="flex items-center bg-white p-2 shadow-xl border-blue-gray-50 rounded-md hover:scale-110 hover:shadow-2xl transition-transform duration-300 hover:bg-black"
            title="Facebook"
          >
            <FaFacebook size={25} style={{ color: "#1877F2" }} />
          </button>
          <button
            className="flex items-center bg-white p-2 shadow-xl border-blue-gray-50 rounded-md hover:scale-110 hover:shadow-2xl transition-transform duration-300 hover:bg-black"
            title="Instagram"
          >
            <FaInstagram size={25} style={{ color: "#E4405F" }} />
          </button>
          <button
            className="flex items-center bg-white p-2 shadow-xl border-blue-gray-50 rounded-md hover:scale-110 hover:shadow-2xl transition-transform duration-300 hover:bg-black"
            title="WhatsApp"
          >
            <FaWhatsapp size={25} style={{ color: "#25D366" }} />
          </button>
          <button
            className="flex items-center bg-white p-2 shadow-xl border-blue-gray-50 rounded-md hover:scale-110 hover:shadow-2xl transition-transform duration-300 hover:bg-black"
            title="Email"
          >
            <FaEnvelope size={25} style={{ color: "#D44638" }} />
          </button>
        </div>
        <div>
        <Divider cl/>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
