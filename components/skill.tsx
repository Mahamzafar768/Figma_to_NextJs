import React from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";

const Skill = () => {
  return (
    <>
      <section className="bg-[#EBFEFF]">
        {/* Header */}
        <div className="pt-10 text-center">
          <h2 className="text-3xl md:text-4xl text-[#457B9D] py-2 font-bold">
            Skills
          </h2>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold py-2">
            What I am capable of?
          </h1>
        </div>
        {/* Skills Icons */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 py-6 px-4">
          {/* Individual Skill Icons */}
          <div className="flex flex-col items-center text-[#E34C26]">
            <FaHtml5 className="text-5xl md:text-6xl lg:text-7xl" />
            <p className="text-sm md:text-base mt-2">HTML5</p>
          </div>
          <div className="flex flex-col items-center text-[#1572B6]">
            <FaCss3Alt className="text-5xl md:text-6xl lg:text-7xl" />
            <p className="text-sm md:text-base mt-2">CSS3</p>
          </div>
          <div className="flex flex-col items-center text-[#563D7C]">
            <FaBootstrap className="text-5xl md:text-6xl lg:text-7xl" />
            <p className="text-sm md:text-base mt-2">Bootstrap</p>
          </div>
          <div className="flex flex-col items-center text-[#06B6D4]">
            <RiTailwindCssFill className="text-5xl md:text-6xl lg:text-7xl" />
            <p className="text-sm md:text-base mt-2">Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center text-[#8993BE]">
            <SiPhp className="text-5xl md:text-6xl lg:text-7xl" />
            <p className="text-sm md:text-base mt-2">PHP</p>
          </div>
          <div className="flex flex-col items-center text-[#FF2D20]">
            <FaLaravel className="text-5xl md:text-6xl lg:text-7xl" />
            <p className="text-sm md:text-base mt-2">Laravel</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
