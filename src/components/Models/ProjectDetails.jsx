import React from "react";

function ProjectDetails({ project }) {
  return (
    <div className="h-screen w-full p-8 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4 w-11/12">{project.title}</h2>
      <img
        src={project.images[0]}
        alt="Project detail"
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-lg text-justify">{project.shortDescription}</p>
    </div>
  );
}

export default ProjectDetails;
