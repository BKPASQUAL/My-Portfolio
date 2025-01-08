import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi"; // Import icons

function ProjectDetails({ project }) {
  return (
    <div className="bg-bgcolourtwo h-screen w-full p-8 overflow-y-auto dark:bg-darkBg">
      <h2 className="text-xl font-bold mb-6 mt-2 w-11/12 dark:text-white">{project.title}</h2>
      <img
        src={project.images[0]}
        alt="Project detail"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <p className="text-base text-justify dark:text-darkPrimary">{project.description}</p>

      {/* Tech Stack Section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold dark:text-white">Tech Stack</h3>
        <div className="flex flex-wrap items-center mt-2 ">
          {project.stack.map((tech, index) => (
            <React.Fragment key={index}>
              {/* Badge for each technology */}
              <span className="text-navy font-semibold text-nowrap text-base transition transform hover:scale-105">
                {tech}
              </span>
              {/* Separator between techs */}
              {index < project.stack.length - 1 && (
                <span className="text-black px-1 dark:text-white">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold dark:text-white">Features</h3>
        <ul className="list-disc pl-5 mt-2 text-base dark:text-darkPrimary" >
          {project.features.map((feature, index) => (
            <li key={index} className="mb-2">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* GitHub and Demo Links Section */}
      <div className="mt-6 flex space-x-6">
        {project.github_fe && (
          <a
            href={project.github_fe}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xl text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600"
          >
            <FiGithub className="mr-2" />
            Frontend Repo
          </a>
        )}
        {project.github_be && (
          <a
            href={project.github_be}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xl text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600"
          >
            <FiGithub className="mr-2" />
            Backend Repo
          </a>
        )}
        {project.github_management && (
          <a
            href={project.github_management}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xl text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600"
          >
            <FiGithub className="mr-2" />
            Management Repo
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xl text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-600"
          >
            <FiExternalLink className="mr-2" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectDetails;
