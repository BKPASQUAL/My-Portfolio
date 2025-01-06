import React from "react";
import ProjectData from "../../assets/data/ProjectsData";

function Projects() {
  return (
    <div className="bg-bgcolourtwo text-black px-4 md:px-16 lg:px-72 py-10 md:py-20">
      <div className="text-3xl md:text-5xl font-extrabold text-center mb-10 md:mb-20">
        My Projects
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {ProjectData.map((project) => (
          <div
            key={project.title}
            className="bg-white w-full h-auto shadow px-4 md:px-6 py-6 md:py-8 flex flex-col rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group cursor-pointer"
          >
            <img
              src={project.images[0]} 
              alt="Project image"
              className="w-full h-40 md:h-48 object-cover rounded-md mb-4"
            />
            <div className="text-lg md:text-xl flex justify-start font-bold group-hover:text-navy">
              {project.title}
            </div>
            <div className="mt-1 text-sm md:text-base text-secondaryText">
              {project.shortDescription}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
