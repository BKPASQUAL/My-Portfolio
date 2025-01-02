import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Education() {
  const education = [
    {
      institution: "NSBM Green University Town",
      degree: "B.Sc. Engineering Honours in Computer Systems Engineering",
      town: "Homagama",
      year: "2024",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMusNEftMbTRViAvsf9E2hevtoFoTcYmxHA&s",
    },
    {
      institution: "Richmond College",
      degree: "G.C.E. Advanced Level - Physical Science",
      year: "2019",
      town: "Galle",
      logo: "https://pbs.twimg.com/profile_images/1485903050317647876/wLIsadjz_400x400.jpg",
    },
    {
      institution: "Richmond College",
      degree: "G.C.E. Ordinary Level",
      year: "2016",
      town: "Galle",
      logo: "https://pbs.twimg.com/profile_images/1485903050317647876/wLIsadjz_400x400.jpg",
    },
  ];

  return (
    <div className="bg-bgcolour text-black pt-28 pb-28">
      <div className="text-5xl font-extrabold text-center mb-20">
        Education
      </div>
      <VerticalTimeline lineColor="black"  animate={false}>
        {education.map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "white",
              color: "#1f2937",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              border: "1px solid #d1d5db",
            }}
            contentArrowStyle={{ borderRight: "none" }}
            date={edu.year}
            iconStyle={{
              background: "black",
              color: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            icon={
              <img
                src={edu.logo}
                alt={`${edu.institution} logo`}
                className="w-full h-full rounded-full object-cover p-1"
              />
            }
          >
            <div>
              <h2 className="font-bold text-lg">{edu.institution}</h2>
              {edu.town && (
                <h3 className="text-gray-600 text-base">{edu.town}</h3>
              )}
              <h4 className="text-gray-700 text-sm mt-2">{edu.degree}</h4>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Education;