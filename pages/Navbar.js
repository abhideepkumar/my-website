import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="p-4 flex justify-end">
      {/* <ul className='flex text-3xl font-bold justify-center font-serif'>
    <Link href='/' className='px-10'>Home</Link>
    <Link href='/' className='px-10'>Qualification</Link>
    <Link href='/' className='px-10'>Skills</Link>
    <Link href='/' className='px-10'>Projects</Link>
    </ul> */}
      <Link className="text-white font-bold py-2 px-2 mx-6 hover:bg-gray-400 rounded-md" href="/Projects">
        Projects
      </Link>
      <Link
        className="bg-sky-500 hover:bg-white hover:text-sky-500 text-white font-bold py-2 px-4 rounded hover:rounded-3xl"
        href="https://www.linkedin.com/in/abhideepkumar/"
      >
        Contact Me
      </Link>
    </div>
  );
};

export default Navbar;
