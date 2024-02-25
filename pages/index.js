import Image from "next/image";
import Head from "next/head";
import data from "/public/data/projects.json";
import toast from "react-hot-toast";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  const onResumeDownload = () => {
    window.open("/data/resume.pdf", "_blank");
  };

  return (
    <main className="container">
      <Head>
        <title>Abhideep Kumar</title>
        <meta name="description" content="Portfolio website of Abhideep Kumar" />
      </Head>
      <div className="w-screen h-1 bg-purple-600"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10">
        <div className="p-5">
          <div className="flex items-center">
            <Image
              src="/img/pic.jpg"
              alt="Me"
              width={500}
              height={500}
              className="rounded-md aspect-square w-12 h-12"
            />
            <div className="mx-5">
              <h1 className="px-5 text-2xl text-purple-600">Abhideep Kumar</h1>
              <h1 className="px-5 text-sm text-gray-600"> Full-Stack Web Developer</h1>
            </div>
          </div>
          <div className="py-5 text-lg">
            <button
              onClick={onResumeDownload}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 my-5 rounded text-center"
            >
              Download Resume
            </button>
            <p className="font-light py-5">
              <SocialIcon
                url="https://github.com/abhideepkumar"
                className="mr-4 hover:brightness-75 my-2"
                target="_blank"
                fgColor="#fff"
              />
              <SocialIcon
                url="https://www.linkedin.com/in/abhideepkumar/"
                className="mr-4 hover:brightness-75 my-2"
                target="_blank"
                fgColor="#fff"
              />
              <SocialIcon
                url="https://www.instagram.com/abhideepharsh/"
                className="mr-4 hover:brightness-75 my-2"
                target="_blank"
                fgColor="#fff"
              />
            </p>
            <p className="font-light tracking-wide">
              Greetings! I am <span className="font-semibold">Abhideep Kumar,</span> currently
              pursuing my B.E at
              <span className="font-semibold"> The National Institute of Engineering, Mysore.</span>{" "}
              With a passion for technology and innovation, I have honed my skills as a{" "}
              <span className="font-semibold">full-stack web developer</span>, proficient in
              <span className="font-semibold"> Javascript, Python, C,</span> and frameworks like
              <span className="font-semibold"> React.js, Next.js, Express, Node.js.</span> My
              hands-on experience with <span className="font-semibold">MongoDB, Firebase,</span> and
              deployment on platforms like<span className="font-semibold"> Netlify</span> has
              empowered me to build efficient and scalable applications. My journey includes roles
              as a Frontend and Backend Developer where creativity met code to create user-centric
              solutions.
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="text-3xl p-5">Projects</div>
          {data.projects.map((project) => (
            <div key={project.title} className="p-5 border-b-2 border-gray-200">
              <h2 className="text-2xl text-purple-600">{project.title}</h2>
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
                <p className="text-purple-600 hover:underline">View Project</p>
              </button>
            </div>
          ))}
          <div className="text-3xl p-5">Experiences</div>
          {data.experiences.map((experience) => (
            <div key={experience.role} className="p-5 border-b-2 border-gray-200">
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
                    : toast.error("Link not found but you can lookup in Github", {
                        duration: 5000,
                      });
                }}
              >
                <p className="text-purple-600 hover:underline">View Project</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
