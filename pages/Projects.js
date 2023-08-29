import React from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
const font1 = Playfair_Display({ subsets: ["latin"] });

const Projects = () => {
  const projects = [
    {
      name: "Sigma Events",
      image: "/img/sigma.jpg",
      link: "https://sigmaevents.netlify.app/",
      description: `This website brings an experience of easy event planning and signing ups. Instead of struggling with scattered event news in WhatsApp groups and filling in the same details for each event in Google Forms, this centralized platform makes it simple.`,
    },
    {
      name: "Admin Portal-Sigma Events",
      image: "/img/admin.jpg",
      link: "https://sigmaforclubs.netlify.app/",
      description: `The Admin Portal is to schedule events for college clubs and manage attendees and this is a part of the project "Sigma Events".`,
    },
    {
      name: "News Hunter",
      image: "/img/news-hunter.jpg",
      link: "https://newshunter0.netlify.app/",
      description: `This is a website that uses News API to fetch news in infinite scrolling. The Best part of this news platform is that you will enter
      your desired keyword and based on your keyword, it will show you news.`,
    },
    {
      name: "Quiz Project",
      image: "/img/quiz.jpg",
      link: "https://mongoquiz.netlify.app/",
      description: `A Quiz website which has 20 questions pre-set. It will take input of your details like Name, USN and email address and then on submitting it will let you give quiz with timer of 15 seconds each and will show result.`,
    },
  ];

  return (
    <main className="">
      <h1 className={`${font1.className} text-4xl md:text-6xl text-yellow-500 m-5`}>My Projects</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-14 mx-5 p-5 sm:p-10 sm:mx-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl">
            <a href={project.link} className="">
              <h1 className="text-xl font-semibold mb-2 text-white">{project.name}</h1>
              <Image src={project.image} alt={project.name} width={500} height={500} className="aspect-video rounded-lg" />
              <p className="my-3 mx-5 text-sm text-gray-300">{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
