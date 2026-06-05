"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

export default function Skill() {
    const { mode } = useContext(ThemeContext)
    return (
        <div id='skill' className='px-5 sm:px-10 lg:px-15 mt-15'>
            <h1 data-aos="fade-up" data-aos-duration="1000" className='text-center font-bold md:text-4xl text-xl'>My Skills</h1>
            <p data-aos="fade-up" data-aos-duration="1500" className='text-center font-light  mt-3'>Technologies I use to build modern web application</p>
            <div className=' mx-10  px-0 sm:px-5 md:px-10 mt-5'>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-16'>
                    {skillsdata.map((items, index) => (
                        <div data-aos="fade-up" data-aos-duration="2000" key={index} className={`  border-2 border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.6)] cursor-pointer flex flex-col justify-center items-center py-5  rounded-xl  transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]`}>
                            <Image width={100} height={100} src={items.img} alt='logo' className='object-center h-auto w-20' />
                            <h4 className='text-lg font-semibold mt-3'>{items.name}</h4>
                            <p className='text-center font-normal text-md  '>{items.lang}</p>

                        </div>
                    ))}


                </div>
            </div>

        </div>
    )
}

const skillsdata = [
    {
        name: "HTML",
        lang: "Markup",
        img: '/html.png',

    },
    {
        name: "CSS",
        lang: "Styling",
        img: '/css.png',

    },
    {
        name: "React",
        lang: "Frontend",
        img: '/react.png',

    },
    {
        name: "NextJs",
        lang: "Framework",
        img: '/nextlogo.png',

    },
    {
        name: "Javascript",
        lang: "Language",
        img: '/javascript.png',

    },
    {
        name: "TailWind",
        lang: "Css Framework",
        img: '/tail.png',

    },
    {
        name: "Firebase",
        lang: " Database",
        img: '/firebase.png',

    },
    {
        name: "Git",
        lang: "version Control",
        img: '/gitversion.png',

    },

]