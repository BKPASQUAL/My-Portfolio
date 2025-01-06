import React from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloudUploadAlt,
  FaPencilRuler,
  FaLayerGroup,
} from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    description:
      "Crafting responsive, user-focused applications using modern frameworks like React and Vue.js. Specializing in performance optimization, cross-browser compatibility, and accessibility. Incorporating state management, animations, and reusable components to deliver engaging, high-quality user interfaces tailored to client needs",
    icon: <FaCode size={50} className="text-blue-500 group-hover:text-white dark:group-hover:text-blue-500" />,
  },
  {
    title: "Backend Development",
    description:
      "Building scalable server-side solutions using Node.js, Express, and APIs. Expertise in authentication, database integration, and cloud services. Ensuring secure, efficient logic for seamless frontend integration and reliable backend performance.",
    icon: (
      <FaServer size={40} className="text-green-500 group-hover:text-white dark:group-hover:text-green-500" />
    ),
  },
  {
    title: "Full Stack Applications",
    description:
      "Developing end-to-end solutions with robust frontend-backend integration. Creating scalable architectures, implementing dynamic features like real-time updates, and delivering full-stack applications optimized for performance, security, and user engagement.",
    icon: (
      <FaLayerGroup
        size={40}
        className="text-purple-500 group-hover:text-white dark:group-hover:text-purple-500"
      />
    ),
  },
  {
    title: "Database Management",
    description:
      "Designing and managing relational and non-relational databases like MySQL and MongoDB. Expertise in schema design, optimized queries, data security, and scalability. Ensuring reliable integration with applications for seamless data handling.",
    icon: (
      <FaDatabase size={40} className="text-red-500 group-hover:text-white dark:group-hover:text-red-500" />
    ),
  },
  {
    title: "Figma to React",
    description:
      "Transforming design prototypes from Figma into interactive, pixel-perfect React components. This includes ensuring responsiveness, maintaining design fidelity, and integrating reusable components for scalable and efficient UI development.",
    icon: (
      <FaPencilRuler
        size={40}
        className="text-orange-500 group-hover:text-white dark:group-hover:text-orange-500"
      />
    ),
  },
  {
    title: "Deployment & Hosting",
    description:
      "Deploying applications using AWS, Vercel, and Docker. Setting up automated pipelines, scalable environments, and performance optimizations. Managing DNS, SSL, and monitoring to ensure uptime, security, and reliability.",
    icon: (
      <FaCloudUploadAlt
        size={40}
        className="text-teal-500 group-hover:text-white dark:group-hover:text-teal-500"
      />
    ),
  },
];

function MyServices() {
  return (
    <div className="bg-bgcolour text-black px-6 md:px-16  py-10 md:py-16 lg:py-28 lg:px-72 dark:bg-darkBg">
      <div className="text-3xl md:text-5xl lg:mb-12 font-extrabold text-center dark:text-white">
        Areas of Expertise
      </div>
      <div className="flex flex-col gap-6 p-4 md:p-10">
        {/* First Section */}
        <div className="flex flex-col lg:flex-row gap-6 ">
          <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-lg flex flex-col p-8 group hover:bg-navy transition duration-300 hover:scale-105 dark:bg-black dark:text-white dark:hover:bg-white   ">
            {services[0].icon}
            <div className="font-bold text-start mt-4 text-lg md:text-xl group-hover:text-white dark:group-hover:text-black">
              {services[0].title}
            </div>
            <p className="text-sm text-gray-500 text-start mt-4 group-hover:text-white  dark:text-darkSecondary dark:group-hover:text-black">
              {services[0].description}
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full lg:w-2/4">
            <div className="h-full bg-white rounded-lg shadow-lg flex flex-col p-8 group hover:bg-navy transition duration-300 hover:scale-105 dark:bg-black dark:text-white dark:hover:bg-white ">
              {services[4].icon}
              <div className="font-bold text-start mt-4 text-lg md:text-xl group-hover:text-white  dark:group-hover:text-black">
                {services[4].title}
              </div>
              <p className="text-sm text-gray-500 mt-4 group-hover:text-white dark:group-hover:text-black">
                {services[4].description}
              </p>
            </div>
            <div className="h-full bg-white rounded-lg shadow-lg flex flex-col p-8 group hover:bg-navy transition duration-300 hover:scale-105 dark:bg-black dark:text-white dark:hover:bg-white">
              {services[1].icon}
              <div className="font-bold text-start mt-4 text-lg md:text-xl group-hover:text-white dark:group-hover:text-black">
                {services[1].title}
              </div>
              <p className="text-sm text-gray-500 mt-4 group-hover:text-white dark:group-hover:text-black">
                {services[1].description}
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-lg flex flex-col p-8 group hover:bg-navy transition duration-300 hover:scale-105 dark:bg-black dark:text-white dark:hover:bg-white">
            {services[3].icon}
            <div className="font-bold text-start mt-4 text-lg md:text-xl group-hover:text-white dark:group-hover:text-black">
              {services[3].title}
            </div>
            <p className="text-sm text-gray-500 mt-4 group-hover:text-white dark:group-hover:text-black">
              {services[3].description}
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg flex flex-col p-8 group hover:bg-navy transition duration-300 hover:scale-105 dark:bg-black dark:text-white dark:hover:bg-white">
            {services[2].icon}
            <div className="font-bold text-start mt-4 text-lg md:text-xl group-hover:text-white dark:group-hover:text-black">
              {services[2].title}
            </div>
            <p className="text-sm text-gray-500 mt-4 group-hover:text-white dark:group-hover:text-black">
              {services[2].description}
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg flex flex-col p-8 group hover:bg-navy transition duration-300 hover:scale-105 dark:bg-black dark:text-white dark:hover:bg-white">
            {services[5].icon}
            <div className="font-bold text-start mt-4 text-lg md:text-xl group-hover:text-white dark:group-hover:text-black">
              {services[5].title}
            </div>
            <p className="text-sm text-gray-500 mt-4 group-hover:text-white dark:group-hover:text-black">
              {services[5].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyServices;
