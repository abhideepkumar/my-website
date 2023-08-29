import React from "react";
import { Playfair_Display } from "next/font/google";
const font1 = Playfair_Display({ subsets: ["latin"] });

const Skills = () => {
  return (
    <div className="px-5 py-10 md:grid md:grid-cols-2 gap-6 md:px-20">
      <h1 className={`${font1.className} text-4xl md:text-6xl text-yellow-500 mb-5`}>My Skills</h1>
      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl md:text-3xl font-semibold mb-2">Front-End</h2>
          <ul className="list-disc pl-5">
            <li className="flex items-center text-gray-400">⚡HTML & CSS</li>
            <li className="flex items-center text-gray-400">⚡Javascript</li>
            <li className="flex items-center text-gray-400">⚡Tailwind CSS</li>
            <li className="flex items-center text-gray-400">⚡REACT.JS</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl md:text-3xl font-semibold mb-2">Back-End</h2>
          <ul className="list-disc pl-5">
            <li className="flex items-center text-gray-400">⚡NEXT.JS </li>
            <li className="flex items-center text-gray-400">⚡Git & Github</li>
            <li className="flex items-center text-gray-400">⚡Netlify </li>
            <li className="flex items-center text-gray-400">⚡Firebase </li>
            <li className="flex items-center text-gray-400">⚡MongoDB </li>
            <li className="flex items-center text-gray-400">⚡NextAuth </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
