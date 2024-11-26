import Image from 'next/image';
import React from 'react';
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button"


const Hero = () => {
  return (
    <>
      <section className="bg-[#EBFEFF]">
        <div className="flex flex-wrap items-center justify-center md:justify-between py-12 md:py-0 h-screen px-6 md:px-12 lg:px-24 w-full">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h4 className="text-lg font-medium">Hi Everyone, I am</h4>
            <h1 className="text-3xl lg:text-4xl font-bold my-4">Rizfan Herlaya</h1>
            <p className="my-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              excepturi voluptas officia perferendis obcaecati minus.
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 mt-6">
            

              <Button variant="outline" className="text-xl bg-blue-500 text-white px-6 py-2 rounded-sm flex items-center justify-center gap-2 border border-blue-500">
                Download CV <IoCloudDownloadOutline size={18} />
              </Button>
              <Button variant="outline" className="bg-gray-500 text-white px-6 py-2 rounded-sm border border-gray-500 text-xl">
                Explore More
              </Button>
          </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <Image
              src={'/figma.png'}
              width={200}
              height={200}
              alt="figma"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
