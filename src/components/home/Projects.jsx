import React from "react";
import ProjectData from "../../assets/data/ProjectsData";

function Projects() {
  return (
    <div className="bg-bgcolour text-black px-72 py-28">
      <div className="text-5xl font-extrabold text-center mb-20">
        My Projects
      </div>
      <div className="grid grid-cols-3 gap-8">
        {ProjectData.map((project) => (
          <div
            key={project.title}
            className="bg-white w-full h-auto shadow px-6 py-8 flex flex-col rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group cursor-pointer"
          >
            <img
              src={project.images[0]} 
              alt="Project image"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <div className="text-xl flex justify-start font-bold group-hover:text-navy">
              {project.title}
            </div>
            <div className="mt-1 text-secondaryText">
              {project.shortDescription}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
