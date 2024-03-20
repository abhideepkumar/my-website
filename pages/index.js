import Image from "next/image";
import Head from "next/head";
import { SocialIcon } from "react-social-icons";
import Projects from "<>/components/projects";
import Experience from "<>/components/experience";
import Achievements from "<>/components/achievements";

export default function Home() {
  const onResumeDownload = () => {
    window.open(
      "https://drive.google.com/drive/folders/1Ki6Jl84hvH4MJR-JGcme0wTQBp2uFuSs?usp=drive_link",
      "_blank"
    );
  };

  return (
    <main className="container">
      <Head>
        <title>Abhideep Kumar</title>
        <meta name="description" content="Portfolio website of Abhideep Kumar" />
      </Head>
      <div className="w-screen h-1 bg-purple-600"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10">
        <div className="p-5 md:ml-5">
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
              <span className="font-semibold">
                {" "}
                The National Institute of Engineering, Mysore.
              </span>{" "}
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
        <div className="md:col-span-2 md:ml-5">
          <div className="text-2xl p-3">Projects</div>
          <Projects />
          <div className="text-2xl p-3">Experiences</div>
          <Experience />
          <div className="text-2xl p-3">Achievements</div>
          <Achievements />
        </div>
      </div>
    </main>
  );
}
