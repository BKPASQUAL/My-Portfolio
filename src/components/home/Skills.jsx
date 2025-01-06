import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaAws } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, SiRedux, SiTailwindcss, SiSequelize, SiFigma, SiC } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai"; 

function Skills() {
  const icons = [
    { Icon: FaHtml5, name: "HTML", color: "#E34F26" },
    { Icon: FaCss3Alt, name: "CSS", color: "#1572B6" },
    { Icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
    { Icon: FaReact, name: "React", color: "#61DAFB" },
    { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { Icon: SiExpress, name: "Express", color: "green" },
    { Icon: FaNodeJs, name: "Node.js", color: "#68A063" },
    { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
    { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    { Icon: SiSequelize, name: "Sequelize", color: "#52B0E7" },
    { Icon: SiRedux, name: "Redux", color: "#764ABC" },
    { Icon: FaJava, name: "Java", color: "#007396" },
    { Icon: FaAws, name: "AWS", color: "#FF9900" },
    { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
    { Icon: SiC, name: "C", color: "#1572B6" },
    { Icon: AiOutlineApi, name: "Axios", color: "#5A9FD4" }, 
    
  ];

  return (
    <div className="bg-bgcolourtwo text-black px-6 md:px-16 lg:px-72 lg:py-28 py-10 md:py-20 dark:bg-black " >
      <div className="text-3xl md:text-5xl font-extrabold text-center mb-10 md:mb-20 dark:text-white">
        My Tech Stack
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 lg:gap-10 gap-6   md:gap-10 justify-items-center">
        {icons.map(({ Icon, name, color }, index) => (
          <div key={index} className="flex flex-col items-center">
            <Icon size={50} md:size={60} color={color} />
            <p className="mt-2 text-sm md:text-lg font-semibold text-center dark:text-white">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
