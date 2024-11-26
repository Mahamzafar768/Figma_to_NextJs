'use client'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu =()=>{
        setOpen(!open);
    }
  return (
    <header className='bg-[#EBFEFF] shadow-md w-full fixed top-0 left-0 z-50'>
        <nav className='flex justify-between items-center py-4 md:px-24 px-10'>
            <div>
                <h1 className='text-3xl font-bold'>Rizfan</h1>
            </div>

            
                <ul className='hidden md:flex space-x-8 text-xl text-[#E9E6E5]"'>
                    <li><Link href="#home">Home</Link></li>
                    <li><Link href="#home">About</Link></li>
                    <li><Link href="#home">Skill</Link></li>
                    <li><Link href="#home">Project</Link></li>
                    <li><Link href="#home">Contact</Link></li>

                </ul>
            

            <div className='md:hidden text-black p-2 rounded-md cursor-pointer hover:bg-gray-200' onClick={toggleMenu}>
                {open ? (
                    <IoMdClose size={30} />
                ) : ( 
                    <MdMenu size={30} />
                )}
            </div>
        </nav>

        {/* Mobile Menu */}
       {open && (
        <ul className='flex flex-col items-center md:hidden bg-gray-800 text-white font-bold text-lg py-6 space-y-4'>
            <li><Link href="#home" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="#home" onClick={toggleMenu}>About</Link></li>
            <li><Link href="#home" onClick={toggleMenu}>Skill</Link></li>
            <li><Link href="#home" onClick={toggleMenu}>Project</Link></li>
            <li><Link href="#home" onClick={toggleMenu}>Contact</Link></li>
        </ul>
       )}
    </header>
  )
}

export default Navbar;