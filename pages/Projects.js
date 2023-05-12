import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <main className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 text-white mx-10">
        <a className="bg-gray-800 rounded-xl px-10 py-3" href='https://newshunter0.netlify.app/'>
            <h1 className='text-center text-3xl'>News Hunter</h1>
            <Image
              src="/img/project1.jpeg"
              alt="UI"
              layout="responsive"
              width={500}
              height={500}
              className='aspect-video rounded-lg'
            />
            <p className='text-center text-xl'>This is a Project which calls an API to fetch news based on your Search Keyword.</p>
        </a>
        </main>
  )
}

export default Projects