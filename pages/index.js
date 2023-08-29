import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Playfair_Display } from "next/font/google";

const font1 = Playfair_Display({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={`${font1.className}`}>
      <Head>
        <title>Abhideep Kumar</title>
        <meta name="description" content="Portfolio website of Abhideep Kumar" />
      </Head>
      <div className="flex flex-col md:flex-row h-full">
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-6xl md:text-6xl lg:text-8xl xl:text-7xl mb-4 text-center">I am Abhideep!</h1>
          <h2 className="text-4xl md:text-3xl  text-yellow-400">A Full Stack Developer</h2>
          <div className="flex justify-evenly px-5 py-2 my-10  bg-white rounded-lg ">
            <Link href="https://github.com/abhideepkumar" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="text-6xl text-gray-500 hover:text-black" />
            </Link>
            <Link href="https://www.linkedin.com/in/abhideepkumar/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="text-6xl text-gray-500 hover:text-blue-600  mx-12" />
            </Link>
            <Link href="https://www.instagram.com/abhideep_harsh/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="text-6xl text-gray-500 hover:text-pink-600" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="w-4/5 h-3/4 md:w-full md:h-full">
            <Image src="/img/main.png" alt="Me" width={500} height={500} />
          </div>
        </div>
      </div>
    </main>
  );
}
