import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Project = () => {
  return (
    <>
      <section className="bg-white">
        {/* Header */}
        <div className="pt-10 text-center">
          <h2 className="text-3xl md:text-4xl text-[#457B9D] py-2 font-bold">
            Projects
          </h2>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold py-2">
            What I have made?
          </h1>
        </div>
        {/* Project Cards */}
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10 w-full py-8 px-4 lg:px-20">
          {/* Card Template */}
          {[
            {
              src: '/port.png',
              title: 'Portfolio Website Design',
              description: 'Lorem ipsum dolor sit amet consectetu',
              link: 'https://github.com/Abhishek-0804/Portfolio-Website',
            },
            {
              src: '/exchange.png',
              title: 'LitterCycle Exchange',
              description: 'Lorem ipsum dolor sit amet consectetu',
              link: 'https://github.com/Abhishek-0804/Portfolio-Website',
            },
            {
              src: '/edubix.png',
              title: 'Edubix',
              description: 'Lorem ipsum dolor sit amet consectetu',
              link: 'https://github.com/Abhishek-0804/Portfolio-Website',
            },
            {
              src: '/bekasi.png',
              title: 'PPDB SMK Telesandi Bekasi',
              description: 'Lorem ipsum dolor sit amet consectetu',
              link: 'https://github.com/Abhishek-0804/Portfolio-Website',
            },
            {
                src: '/bekasi.png',
                title: 'PPDB SMK Telesandi Bekasi',
                description: 'Lorem ipsum dolor sit amet consectetu',
                link: 'https://github.com/Abhishek-0804/Portfolio-Website',
              },
              {
                src: '/bekasi.png',
                title: 'PPDB SMK Telesandi Bekasi',
                description: 'Lorem ipsum dolor sit amet consectetu',
                link: 'https://github.com/Abhishek-0804/Portfolio-Website',
              },
          ].map((project, index) => (
            <div
              key={index}
              className="w-[90%] sm:w-[320px] md:w-[350px] bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={project.src}
                width={350}
                height={100}
                alt={project.title}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <h1 className="font-bold text-lg md:text-xl">{project.title}</h1>
                <p className="py-2 text-sm md:text-base text-gray-600">
                  {project.description}
                </p>
                <Link
                  className="text-[#457B9D] hover:underline"
                  href={project.link}
                >
                  Figma
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
