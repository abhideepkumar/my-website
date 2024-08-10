import React from "react";
import data from "/public/data/projects.json";
import toast from "react-hot-toast";

const Projects = () => {
  return (
    <div>
      {data.projects.map((project) => (
        <div key={project.title} className="p-3 border-b-2 border-gray-200">
          <h2 className="text-2xl text-teal-600">{project.title}</h2>
          <p className="text-lg text-gray-600">{project.description}</p>
          <ul className="list-disc list-inside">
            {project.achievements &&
              project.achievements.map((achievement) => (
                <li key={achievement} className="text-gray-600">
                  {achievement}
                </li>
              ))}
            {project.features &&
              project.features.map((feature) => (
                <li key={feature.featureTitle} className="text-gray-600">
                  {feature.featureTitle}: {feature.featureDescription}
                </li>
              ))}
          </ul>
          <button
            onClick={() => {
              project.link
                ? window.open(project.link)
                : toast.error("Link not found but you can lookup in Github", {
                    duration: 5000,
                  });
            }}
          >
            <p className="text-teal-600 hover:underline">View Project</p>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Projects;
