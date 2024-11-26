import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section className="bg-[#EBFEFF]">
        {/* Contact Section */}
        <div className="px-4 md:px-12 lg:px-24 py-10 md:py-12 lg:py-16">
          <h2 className="text-2xl md:text-3xl text-[#457B9D] font-bold">
            Contacts
          </h2>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold py-2">
            Get in touch
          </h1>
          <p className="text-lg md:text-xl py-2 text-gray-700">
            rizfanher@gmail.com
          </p>
          {/* Social Links */}
          <div className="flex items-center gap-4 text-3xl md:text-4xl py-4">
            <Link href="https://www.linkedin.com/in/rizfanher/" passHref target="_blank"
                className="text-[#0A66C2] hover:scale-110 transition-transform">
              
                
              
                <FaLinkedin />
              
            </Link>
            <Link href="https://github.com/rizfanher/" passHref target="_blank"
                className="text-black hover:scale-110 transition-transform">
            
                
            
                <FaGithub />
              
            </Link>
            <Link href="https://www.instagram.com/rizfanher/" passHref target="_blank"
                className="text-[#E4405F] hover:scale-110 transition-transform" >
              
                
              
                <FaInstagram />
             
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
