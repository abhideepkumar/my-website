import React from "react";
import data from "/public/data/projects.json";

const Achievements = () => {
  return (
    <main>
      {data.achievements.map((achievement) => (
        <div key={achievement.title} className="p-3 border-b-2 border-gray-200">
          <h2 className="text-2xl text-purple-600">{achievement.title}</h2>
          <ul className="list-disc list-inside">
            {achievement.description.map((description) => (
              <li key={description} className="text-gray-600">
                {description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
};

export default Achievements;
