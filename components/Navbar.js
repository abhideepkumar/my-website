import React from "react";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
const font1 = Playfair_Display({ subsets: ["latin"] });
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faBrain, faLaptopCode, faUserGraduate, faHouse } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div>
      <div className="p-4 flex justify-between md:hidden"></div>
      <div className="p-4 justify-between hidden md:flex">
        <div className={`${font1.className}`}>
          <Link className="text-xl py-2 px-2 mx-6 text-yellow-400 underline-offset-8 rounded-md" href="/">
            Abhideep Kumar
          </Link>
        </div>
        <div className="flex justify-end">
          <nav className="flex justify-between">
            <Link className="text-white font-bold py-2 px-2 mx-6 hover:text-yellow-500 hover:underline underline-offset-8 rounded-md" href="/about">
              About me
            </Link>
            <Link className="text-white font-bold py-2 px-2 mx-6 hover:text-yellow-500 hover:underline underline-offset-8 rounded-md" href="/skills">
              Skills
            </Link>
            <Link
              className="text-white font-bold py-2 px-2 mx-6 hover:text-yellow-500 hover:underline underline-offset-8 rounded-md"
              href="/Projects"
            >
              Projects
            </Link>
            <Link
              className="text-white font-bold py-2 px-2 mx-6 hover:text-yellow-500 hover:underline underline-offset-8 rounded-md"
              href="https://www.linkedin.com/in/abhideepkumar/"
            >
              Contact Me
            </Link>
          </nav>
        </div>
      </div>
      <div className="min-h-min">
        <nav className="md:hidden text-center pb-5">
          <Link className="text-white font-bold py-2 px-1 mx-5 hover:text-yellow-500 hover:underline underline-offset-8 rounded-md" href="/">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
          <Link className="text-white font-bold py-2 px-1 mx-5 hover:text-yellow-500 hover:underline underline-offset-8 rounded-md" href="/about">
            <FontAwesomeIcon icon={faUserGraduate} />
          </Link>
          <Link className="text-white font-bold py-2 px-1 mx-5 hover:text-yellow-500 hover:underline underline-offset-8 rounded-md" href="/skills">
            <FontAwesomeIcon icon={faBrain} />
          </Link>
          <Link className="text-white font-bold py-2 px-1 mx-5 hover:text-yellow-500 hover:underline underline-offset-8 rounded-md" href="/Projects">
            <FontAwesomeIcon icon={faLaptopCode} />
          </Link>
          <Link
            className="text-white font-bold py-2 px-1 mx-5 hover:text-yellow-500 hover:underline underline-offset-8 rounded-md"
            href="https://www.linkedin.com/in/abhideepkumar/"
          >
            Contact Me
          </Link>
        </nav>
        <hr className="text-white py-2" />
      </div>
    </div>
  );
};

export default Navbar;
