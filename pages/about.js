import React from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
const font1 = Playfair_Display({ subsets: ["latin"] });

const About = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col-reverse items-center md:flex-row">
        <div className="mb-5 md:mb-0 md:mr-10 flex justify-center items-center">
          <Image src="/img/main.png" alt="Me" width={500} height={500} />
        </div>
        <div className="text-center md:text-left">
          <h1 className={`${font1.className} text-4xl md:text-5xl text-yellow-500 my-5`}>Who is Abhideep?</h1>
          <p className="text-lg my-5">
            I am a <span className="text-yellow-500">Full Stack Web Developer</span>, pursuing B.E in Information Science from
            <span className="text-yellow-500">The National Institute of Engineering</span> and currently in 1st year.
          </p>
          <p className="text-lg">
            I am also an A.I enthusiast, with hobbies like playing <span className="text-green-500">chess</span> and watching{" "}
            <span className="text-red-500">movies</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
