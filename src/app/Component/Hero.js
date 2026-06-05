"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

export default function Hero() {
    const { mode } = useContext(ThemeContext)
    return (
        <div id='#home' className='px-5 sm:px-10 lg:px-15 xl:px-30 py-16 '>
            <div className='flex flex-col md:flex-row items-center justify-between h-auto md:h-100   mt-16   w-full gap-5'>
                {/* content section */}
                <div className=' flex-1 '>
                    <h1 data-aos="fade-up" className='text-gray-400 text-xl md:text-2xl font-semibold'>Hi There I am</h1>
                    <h1 data-aos="fade-up" className={`${mode == 'dark' ? "text-white" : "text-black"} font-bold text-2xl md:text-4xl py-2`}>Mukesh Chaudhary</h1>
                    <h4 data-aos="fade-up" className='text-gray-400 text-xl md:text-2xl font-semibold'>Frontend Developer</h4>
                    <p data-aos="fade-up" data-aos-duration="2000" className={`${mode == 'dark' ? "text-gray-300" : "text-zinc-600"} text-xl mt-3`} >I design and develop modern web apps using React, Next.js, and Tailwind CSS.</p>
                    <p data-aos="fade-up" data-aos-duration="2000" className={`${mode == 'dark' ? "text-gray-400" : "text-zinc-500"} text-md mt-2 `}>Clean UI. Fast Performance. Better User Experience.</p>
                    <div data-aos="fade-up" data-aos-duration="3000" className='mt-10 flex items-center w-full justify-center gap-3 flex-wrap '>
                        <Link href='/files/MukeshCV.pdf' download className=' bg-linear-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-500 cursor-pointer rounded-lg py-3 px-5 text-white font-semibold'>📄 Download Resume</Link>
                        <Link href="https://github.com/mukeshjaiswa?tab=repositories" className={`${mode === 'dark' ? "bg-white text-black" : "bg-black text-white"} cursor-pointer rounded-lg py-3 px-5 font-semibold`}>🚀 View Projects</Link>
                        <Link href="#contact" className={`${mode === 'dark' ? "bg-white text-black" : "bg-black text-white"} cursor-pointer rounded-lg py-3 px-5 font-semibold`}>💬 Contact Me</Link>

                    </div>
                </div>
                {/* Image section */}
                <div data-aos="fade-left" data-aos-duration="3000" className=' flex-1 h-100 w-full md:h-100 hidden md:block place-self-end relative '>
                    <div className={`${mode === 'dark' ? "bg-white" : "bg-linear-to-b from-blue-500 to-blue-600"} w-80 h-80 rounded-full absolute right-5 z-5 top-18 flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.7)] border-2 border-white/30`}>
                        <Image src='/mukesh.png' width={300} height={300} alt='profile' className=' object-center absolute -right-12 -bottom-2 origin-bottom rotate-2 h-auto w-100' />
                    </div>



                </div>
            </div>
        </div>
    )
}
