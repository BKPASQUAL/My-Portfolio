import React from "react";
import AmerctIcon from "../../assets/images/Amerck.jpeg";
import FairfirstIcon from "../../assets/images/fairfirst-logo.webp";

const experiences = [
  {
    title: "Software Engineer, Intern",
    company: "Amerck Inc.",
    location: "Stratford Ave, Colombo",
    responsibilities: [
      "During my 12-week internship, I developed full-stack applications using React, Redux, RTK Query, Tailwind CSS, Node.js, Sequelize, and Express for real-time ICU patient monitoring and continuous patient assessment. I designed and implemented intuitive, responsive user interfaces and RESTful APIs, ensuring efficient back-end data management and system reliability. Collaborated with the team on UI/UX design using Figma and Miro to prototype and optimize workflows. Implemented features such as real-time patient vitals tracking, digital record-keeping, and role-based access control for secure and compliant data handling. Followed Agile methodologies using Jira for task tracking, GitLab for version control, and Confluence for team documentation, while engaging in CI/CD workflows for efficient development and deployment.",
    ],
    icon: AmerctIcon,
  },
  {
    title: "Training Network Engineer",
    company: "Fairfast Insurance (Pvt) Ltd",
    location: "Colombo",
    responsibilities: [
      "As a Training Network Engineer at Fairfast Insurance (Pvt) Ltd, I contributed to network operations and system optimization over a 12-week period. I gained hands-on experience with cloud-based infrastructure solutions using Microsoft Azure and AWS, configured and managed Linux and Windows servers, and oversaw firewall replacements to enhance data center security. Additionally, I developed expertise in network security protocols, system optimization practices, and corporate-level network architecture.",
    ],
    icon: FairfirstIcon,
  },
];

function WorkExperience() {
  return (
    <div className="bg-bgcolour text-black px-4 md:px-16 lg:px-72 py-10 md:py-20 w-full">
      <div className="text-3xl md:text-5xl font-extrabold text-center mb-10 md:mb-20">
        Work Experience
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 border bg-white border-gray-300 rounded-md shadow-md flex flex-col justify-between transition-transform duration-300 hover:bg-navy group"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold transition-colors duration-300 group-hover:text-white">
                    {exp.title}
                  </h2>
                  <p className="text-navy text-lg md:text-xl font-semibold transition-colors duration-300 group-hover:text-white">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-white">
                    {exp.location}
                  </p>
                </div>
                <div>
                  <img
                    src={exp.icon}
                    alt={exp.company}
                    className={`w-12 md:w-16 ${
                      exp.company === "Amerck Inc." ? "rounded-full" : ""
                    }`}
                  />
                </div>
              </div>

              <div className="list-disc list-inside mt-4 space-y-2">
                {exp.responsibilities.map((resp, respIndex) => (
                  <div
                    key={respIndex}
                    className="text-sm md:text-base text-blue-gray-800 transition-colors duration-300 group-hover:text-white"
                  >
                    {resp}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;