"use client"
import Link from 'next/link';
import React, { useContext } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { ThemeContext } from '../Context/ThemeContext'

export default function Footer() {
    const { mode } = useContext(ThemeContext)
    const navlinks = [
        {
            name: "Home",
            url: '/',
        },
        {
            name: "About",
            url: "#about"
        },
        {
            name: "Skill",
            url: "#skill"
        },
        {
            name: "Project",
            url: '#project'
        },

        {
            name: "Contact",
            url: "#contact"
        },




    ]
    return (
        <div id='skill' className={`px-5 sm:px-10 lg:px-15 mt-15 ${mode === 'dark' ? "bg-white text-zinc-800" : "bg-zinc-800 text-white"} h-auto py-5  sm:h-50 flex flex-col items-center justify-center  `}>
            {/* socials link */}
            <div className='w-full text-center '>
                <div className='flex items-center justify-center gap-2 sm:gap-5'>

                    {socailinks.map((item, index) => {
                        const SocialIcon = item.icon;
                        return (
                            <Link href={item.socaillink} key={index} className={`w-12 h-12 ${mode === 'dark' ? "bg-zinc-800 text-white hover:bg-white hover:border hover:text-black" : "bg-white hover:bg-zinc-800 hover:border hover:text-white text-black"} rounded-full flex items-center justify-center  cursor-pointer transition-all duration-300 `}>
                                <SocialIcon size={25} />
                            </Link>
                        )

                    })}

                </div>
            </div>
            {/* nav links */}
            <div className='flex gap-1 flex-wrap xl:gap-5 mt-5'>
                {navlinks.map((items, index) => (
                    <div key={index}>
                        <Link href={items.url} className={`font-semibold text-xl cursor-pointer p-2 hover:text-zinc-600 rounded-md`} >{items.name}</Link>
                    </div>
                ))}


            </div>

            <h1 className={`text-md ${mode === 'dark' ? "text-zinc-400" : "text-zinc-600"} mt-3 font-light `}>  &copy; {new Date().getFullYear()} Mukesh Kumar Chaudhary. All rights reserved.</h1>

        </div >
    )
}

const socailinks = [
    {
        icon: FaFacebookF,
        socaillink: 'https://www.facebook.com/mukesh.chaudshary'
    },
    {
        icon: FaInstagram,
        socaillink: 'https://www.instagram.com/jaiswalmukesh07/'
    },
    {
        icon: MdCall,
        socaillink: 'https://wa.me/9779817361906'
    },

    {
        icon: FiGithub,
        socaillink: 'https://github.com/mukeshjaiswa'
    },
    {
        icon: FaLinkedinIn,
        socaillink: 'https://www.linkedin.com/in/mukesh-jaiswal-583801248/'
    }
]