import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section className="bg-white">
      <div className="flex flex-col md:flex-row justify-center gap-28 items-center py-12 md:py-20 px-6 md:px-12 lg:px-24 w-full">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
          <Image
            src="/about.png"
            width={500}
            height={300}
            alt="about"
            className="max-w-full h-auto rounded-lg"
            priority
          />
        </div>
        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h4 className="text-xl text-[#457B9D] font-bold mb-2">About</h4>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            voluptas iste odit, voluptates illo aut consequuntur aliquam culpa
            eos vel ab provident doloremque sit labore ducimus, numquam pariatur
            quos magnam? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Tempore voluptas iste odit, voluptates illo aut consequuntur
            aliquam culpa eos vel ab provident doloremque sit labore ducimus,
            numquam pariatur quos magnam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
