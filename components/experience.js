import React from "react";
import data from "/public/data/projects.json";
import toast from "react-hot-toast";

const Experience = () => {
  return (
    <div>
      {data.experiences.map((experience) => (
        <div key={experience.role} className="p-3 border-b-2 border-gray-200">
          <h2 className="text-2xl text-purple-600">{experience.role}</h2>
          <h3 className="text-xl text-gray-600">{experience.company}</h3>
          <p className="text-lg text-gray-600">{experience.duration}</p>
          <ul className="list-disc list-inside">
            {experience.responsibilities.map((responsibility) => (
              <li key={responsibility} className="text-gray-600">
                {responsibility}
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              experience.link
                ? window.open(experience.link)
                : toast.error("Sorry, the Link not found.", {
                    duration: 5000,
                  });
            }}
          >
            <p className="text-purple-600 hover:underline">View Project</p>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Experience;
