"use client"
import Link from 'next/link'
import React, { useState, useContext } from 'react'
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import DarkModeToggle from './DarkModeToggle';
import { ThemeContext } from '../Context/ThemeContext';

export default function Navbar() {

    const { mode } = useContext(ThemeContext)

    const [openmenu, setOpenMenu] = useState(false)

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
        <>

            <div className={` h-16 flex items-center justify-between px-5 sm:px-10 lg:px-15 xl:px-30 fixed  z-10 ${mode === 'dark' ? "bg-white text-zinc-800" : "bg-zinc-800 text-white"} w-full  top-0 left-0`}>
                <div>
                    <Link href='/' className="text-xl font-bold sm:text-2xl cursor-pointer">Portfolio</Link>
                </div>

                <div className='hidden  md:flex gap-2 xl:gap-5'>
                    {navlinks.map((items, index) => (
                        <div key={index}>
                            <Link href={items.url} className={`font-semibold text-xl cursor-pointer ${mode==='dark'?'hover:text-white hover:bg-black':'hover:text-black hover:bg-white'} p-2   rounded-md`} >{items.name}</Link>
                        </div>
                    ))}


                </div>
                <div className='flex items-center justify-center gap-1   lg:gap-5'>
                    {/* button download cv */}
                    <div className='bg-linear-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-500 cursor-pointer p-2 rounded-md  items-center justify-center font-semibold hidden  md:flex  text-white '>
                        <Link href='/files/MukeshCV.pdf' download>DownLoad CV</Link>
                    </div>
                    <div className='flex gap-2'>
                        <h1 className='hidden lg:block'> {mode === 'dark' ? "Dark" : "Light"}</h1>
                        <DarkModeToggle />
                    </div>
                </div>
                <div className='md:hidden block '>

                    <IoMenu size={35} onClick={() => setOpenMenu(true)} />


                </div>

            </div>
            {/* mobile menu */}
            {openmenu ?
                <div className='fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden'>
                    <div className={`h-[calc(100vh-4rem)] md:hidden w-[80%] sm:w-[50%] ${mode === 'light' ? "bg-white text-black" : 'bg-zinc-800 text-white'}   place-self-end duration-500 transition-all`}>
                        <div className='flex h-16  border-b  border-gray-300 items-center justify-between px-5'>
                            <h1 className="text-xl font-bold sm:text-2xl">Portfolio</h1>
                            <RxCross1 size={25} onClick={() => setOpenMenu(false)} />
                        </div>
                        <div className='mt-5'>
                            {navlinks.map((items) => (
                                <div className={`flex flex-col h-10 hover:bg-white ${pathname === items.url ? "bg-zinc-600" : ''} px-5 mt-2 rounded-md`}>
                                    <Link href={items.url} className={`font-semibold text-xl cursor-pointer hover:bg-white p-2 hover:text-black rounded-md `} >{items.name}</Link>
                                </div>
                            ))}
                            <div className='bg-linear-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-500 cursor-pointer p-2 rounded-md  items-center justify-center font-semibold   flex  text-white mx-5 mt-5 '>
                                <Link href='/files/resume.pdf' download>DownLoad CV</Link>
                            </div>
                        </div>

                    </div>
                </div>
                : ""
            }


        </>
    )
}
