import React from "react";
import img from "../../assets/images/dommy-image.jpg";
import Divider from "@mui/material/Divider";

import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

function HeroSection() {
  return (
    <div className="bg-bgcolour text-black px-72 h-screen flex items-center">
      <div className="flex w-full h-full items-center">
        <div className="w-1/2">
          <h1 className="text-7xl font-bold mb-6">
            <span className="text-black">Hey, I'M </span>
            <span className="text-navy">Bawantha Pasqual</span>
          </h1>

          {/* <div className="flex items-center mb-4">
            <SiMongodb size={35} style={{ color: "#47A248", marginRight: "10px" }} />
            <SiExpress size={35} style={{ color: "#000000", marginRight: "10px" }} />
            <SiReact size={35} style={{ color: "#61DBFB", marginRight: "10px" }} />
            <SiNodedotjs size={35} style={{ color: "#43853D", marginRight: "10px" }} />
          </div> */}

          <h1 className="text-4xl font-bold mb-6 text-black">
            Full Stack Developer
          </h1>
          <p className="text-black text-xl mb-10">
            I’m passionate about learning and growing as a developer, with a
            love for coding and creating impactful projects. Outside work, I
            enjoy cricket and unwinding with Netflix. Skilled in{" "}
            <b>JavaScript</b> and the <b>MERN stack</b>, I’m excited to keep
            evolving in the world of software engineering. Let's connect!
          </p>
          <div className="flex space-x-6">
            <button
              className="flex items-center bg-white p-4 shadow-xl border-blue-gray-50 rounded-md hover:scale-110 hover:shadow-2xl transition-transform duration-300 hover:bg-black"
              title="LinkedIn"
            >
              <FaLinkedin size={35} style={{ color: "#0A66C2" }} />
            </button>
            <button
              className="flex items-center bg-white p-4 shadow-xl border-blue-gray-50 rounded-md hover:scale-110 hover:shadow-2xl transition-transform duration-300 hover:bg-black"
              title="Facebook"
            >
              <FaGithub size={35} style={{ color: "#1877F2" }} />
            </button>
            <button
              className="flex items-center bg-white p-4 shadow-xl border-blue-gray-50 rounded-md hover:scale-110 hover:shadow-2xl transition-transform duration-300 hover:bg-black"
              title="Instagram"
            >
              <FaEnvelope size={35} style={{ color: "#D44638" }} />
            </button>
            <button
              className="flex items-center bg-white p-4 shadow-xl border-blue-gray-50 rounded-md hover:scale-110 hover:shadow-2xl transition-transform duration-300 hover:bg-black"
              title="WhatsApp"
            >
              <FaWhatsapp size={35} style={{ color: "#25D366" }} />
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
