import React from "react";
import AmerctIcon from "../../assets/images/Amerck.jpeg";
import FairfirstIcon from "../../assets/images/fairfirst-logo.webp";

const experiences = [
  {
    title: "Software Engineer, Intern",
    company: "Amerck Inc.",
    location: "Stratford Ave, Colombo",
    responsibilities: [
      " Developed user interfaces using React, Redux, RTK Query, and Tailwind CSS for real-time ICU patient monitoring",
      " Created an intuitive and responsive front-end design for continuous patient assessment",
      " Collaborated with the team on UI/UX design and prototyping using Figma and Miro",
      " Contributed to back-end development for efficient data management and system reliability",
      " Implemented real-time patient vitals tracking, digital record-keeping, and role-based access control for secure, compliant data handling",
      " Followed Agile methodologies using Jira for task tracking, GitLab for version control, and Confluence for team documentation, while engaging in CI/CD workflows for efficient development and deployment.",
    ],
    icon: AmerctIcon,
  },
  {
    title: "Training Network Engineer",
    company: "Fairfast Insurance (Pvt) Ltd",
    location: "Colombo",
    responsibilities: [
      "Contributed to network operations and infrastructure support",
      "Assisted in maintenance and optimization of network system",
      "Worked with Microsoft Azure and AWS for enhanced system management",
      "Oversaw firewall replacements to improve data center security",
      "Gained experience in cloud-based infrastructure solutions and network architecture",
      "Developed knowledge of network security protocols and system optimization practices within a corporate setting",
    ],
    icon: FairfirstIcon,
  },
];

function WorkExperience() {
  return (
    <div className="bg-bgcolour text-black px-4 md:px-16 lg:px-72 py-10 md:py-20 w-full dark:bg-darkBg">
      <div className="text-3xl md:text-5xl font-extrabold text-center mb-10 md:mb-20 dark:text-white">
        Work Experience
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 border bg-white border-gray-300 rounded-md shadow-md flex flex-col justify-between transition-transform duration-300 hover:bg-navy group dark:bg-black dark:hover:bg-white"
          >
            <div>
              <div className="flex justify-between items-center mb-4 ">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                    {exp.title}
                  </h2>
                  <p className="text-navy text-lg md:text-xl font-semibold transition-colors duration-300 group-hover:text-white dark:group-hover:text-navy">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">
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

              <ul className="list-disc list-inside mt-4 space-y-2">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li
                    key={respIndex}
                    className="text-sm md:text-sm text-blue-gray-800 transition-colors duration-300 group-hover:text-white text-justify dark:text-darkPrimary dark:group-hover:text-black"
                  >
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
