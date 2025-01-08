import React, { useState, useEffect } from "react";
import ProjectData from "../../assets/data/ProjectsData";
import ProjectDetails from "../Models/ProjectDetails";
import { AiOutlineClose } from "react-icons/ai"; // Import close icon from react-icons

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeDetails = () => {
    setSelectedProject(null);
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset the overflow style
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <div className="bg-bgcolourtwo text-black px-4 md:px-16 lg:px-72 py-10 md:py-20 relative dark:bg-black">
      <div className="text-3xl md:text-5xl font-extrabold text-center mb-10 md:mb-20 dark:text-white">
        My Projects
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ">
        {ProjectData.map((project) => (
          <div
            key={project.title}
            className="bg-white w-full h-auto shadow px-4 md:px-6 py-6 md:py-8 flex flex-col rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group cursor-pointer dark:bg-darkBg"
            onClick={() => handleProjectClick(project)}
          >
            <img
              src={project.images[0]}
              alt="Project image"
              className="w-full h-40 md:h-48 object-cover rounded-md mb-4"
            />
            <div className="text-lg md:text-xl flex justify-start font-bold group-hover:text-navy dark:text-white">
              {project.title}
            </div>
            <div className="mt-1 text-sm md:text-base text-secondaryText dark:text-darkPrimary">
              {project.shortDescription}
            </div>
          </div>
        ))}
      </div>

      {/* Slide-in ProjectDetails */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 bg-white shadow-xl z-50 transition-transform duration-500  ${
          selectedProject ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {selectedProject && (
          <>
            {/* Close Icon */}
            <button
              className="absolute top-4 right-4 text-black text-2xl p-2 hover:text-red-600 dark:text-white"
              onClick={closeDetails}
            >
              <AiOutlineClose />
            </button>
            <ProjectDetails project={selectedProject} />
          </>
        )}
      </div>

      {/* Overlay */}
      {selectedProject && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={closeDetails}
        />
      )}
    </div>
  );
}

export default Projects;
