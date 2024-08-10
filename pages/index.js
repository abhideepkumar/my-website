import Image from 'next/image';
import Head from 'next/head';
import { SocialIcon } from 'react-social-icons';
import Projects from '<>/components/projects';
import Experience from '<>/components/experience';
import Achievements from '<>/components/achievements';

export default function Home() {
    const onResumeDownload = () => {
        window.open(
            'https://drive.google.com/drive/folders/1Ki6Jl84hvH4MJR-JGcme0wTQBp2uFuSs?usp=drive_link',
            '_blank',
        );
    };

    return (
        <main className="container">
            <Head>
                <title>Abhideep Kumar</title>
                <meta name="description" content="Portfolio website of Abhideep Kumar" />
            </Head>
            <div className="w-screen h-1 bg-teal-600"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10">
                <div className="-5 md:ml-5">
                    <div className="flex items-center">
                        <Image
                            src="/img/profile.jpg"
                            alt="Me"
                            width={500}
                            height={500}
                            className="rounded-full aspect-square w-16 h-16"
                        />
                        <div className="mx-2">
                            <h1 className="px-5 text-3xl text-teal-600">Abhideep Kumar</h1>
                            <h1 className="px-5 text-sm text-gray-600"> Full-Stack Web Developer</h1>
                        </div>
                    </div>
                    <div className="py-5 text-lg">
                        <button
                            onClick={onResumeDownload}
                            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 my-5 rounded text-center"
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
                        <div className="tracking-wide text-gray-700">
                            <p className=''>
                                Hi! I&apos;m <span className="font-semibold">Abhideep Kumar</span>, a passionate{' '}
                                <span className="font-semibold">Full-Stack Developer</span> pursuing my B.E. in
                                Information Science & Engineering at{' '}
                                <span className="font-semibold">The National Institute of Engineering, Mysore</span>. My
                                journey in tech is driven by a relentless curiosity and a knack for innovative
                                problem-solving.
                            </p>

                            <p className='mt-2'>
                                With expertise in{' '}
                                <span className="font-semibold">Next.js, React.js, Node.js, and Express.js</span>, I
                                craft seamless digital experiences from front to back. My toolkit includes{' '}
                                <span className="font-semibold">JavaScript, Java, Python, C, and C++</span>, allowing me
                                to tackle diverse challenges with versatility. I&apos;m well-versed in database management
                                with <span className="font-semibold">MongoDB, Supabase, SQL, and Firebase</span>, and
                                deployment strategies using <span className="font-semibold">Netlify and Firebase</span>.
                            </p>

                            <p className='mt-2'>
                                I&apos;ve had the privilege of contributing to impactful projects like{' '}
                                <span className="font-semibold">Notefy</span>, where I led a team to revolutionize
                                student learning through AI-powered PDF summarization, and{' '}
                                <span className="font-semibold">Pratigya</span>, a MERN stack application addressing
                                women&apos;s safety for over 650 million users. These experiences have honed my skills in
                                creating robust data architecture and bringing ideas to life in the digital realm.
                            </p>

                            <p className='mt-2'>
                                As a part of GDSC, NIE, I&apos;ve mentored 150+ students and contributed to numerous
                                projects. My achievements, including placing third in the{' '}
                                <span className="font-semibold">Girl Geek IEEE Hackathon</span> and selection for{' '}
                                <span className="font-semibold">Social Winter of Code 2024</span>, fuel my drive to push
                                technological boundaries.
                            </p>

                            <p className='mt-2'>
                                I&apos;m always eager to take on new challenges and collaborate on projects that make a
                                real-world impact. Let&apos;s connect and explore how we can innovate together!
                            </p>
                        </div>
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
