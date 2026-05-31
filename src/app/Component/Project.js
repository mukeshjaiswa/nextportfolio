"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useContext, useEffect } from 'react'

import { ThemeContext } from '../Context/ThemeContext'

export default function Project() {
    const { mode } = useContext(ThemeContext)
    const [projectvalue, setProjectValue] = useState("all")
    const [filterprojects, setFilterProjects] = useState(works)

    useEffect(() => {
        if (projectvalue === 'all') {
            setFilterProjects(works)
        }
        else {
            const filterproject = works.filter((item) => item.language === projectvalue)
            setFilterProjects(filterproject)
            console.log(filterproject)
        }


    }, [projectvalue])
    return (

        <div id='project' className='px-5 sm:px-10 lg:px-15 mt-15'>
            <h1 data-aos="fade-up" data-aos-duration="1000" className='text-center font-bold md:text-4xl text-xl py-5'>My Recent Works</h1>
            <div data-aos="fade-up" data-aos-duration="1500" className={`flex items-center justify-center gap-5  ${mode === 'dark' ? 'text-zinc-400' : "text-zinc-600"} `}>
                <button onClick={() => setProjectValue("all")} className={`${projectvalue === 'all' ? 'text-red-500' : ''} text-xl cursor-pointer transition-all duration-300`}>All works</button>

                <button onClick={() => setProjectValue("react")} className={`${projectvalue === 'react' ? 'text-red-500' : ''} text-xl cursor-pointer transition-all duration-300`}>React</button>
                <button onClick={() => setProjectValue("next")} className={`${projectvalue === 'next' ? 'text-red-500' : ''} text-xl cursor-pointer transition-all duration-300`}>Next</button>
            </div>
            {/* project section */}
            <div  className=' mx-10  px-0 sm:px-5 md:px-10 mt-15 '>
                <div  className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 '>
                    {filterprojects.map((item) => (
                        <div data-aos="fade-up" data-aos-duration="2000" key={item.id} className={`   border-2 border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.6)] cursor-pointer flex flex-col justify-center items-center py-5  rounded-xl  transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]`}>
                            <Image width={250} height={100} src={item.img} alt='logo' className='object-cover rounded-md h-auto w-60' />
                            <h4 className='text-lg font-semibold mt-3'>{item.name}</h4>
                            <div className='mt-5 flex items-center justify-between gap-5' >
                                <Link href={item.github} className=' p-3 md:p-2 lg:p-5  rounded-md cursor-pointer  transition-all duration-300 border-2 hover:border-blue-600 sm:text-xl text-md '>GitHub</Link>
                                <Link href={item.live} className='p-3 md:p-2 lg:p-5 sm:text-xl text-md  rounded-md cursor-pointer  transition-all duration-300 border-2 hover:border-blue-600 '>Live Demo</Link>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}

const works = [
    {
        id: 1,
        name: "Weather app",
        img: "/projectimages/weather.png",
        github: "https://github.com/mukeshjaiswa/Weather-",
        live: "https://mukeshweather.vercel.app/",
        language: 'react'

    },

    {
        id: 2,
        name: "Currency Convertor",
        img: "/projectimages/currencyconvertor.png",
        github: "https://github.com/mukeshjaiswa/Currencyconvertor",
        live: "https://mukesh-currencyconvertor.vercel.app/",
        language: 'react'

    },
    {
        id: 3,
        name: "Resturant app",
        img: "/projectimages/resturant.png",
        github: "https://github.com/mukeshjaiswa/resturant",
        live: "https://resturant-eta-eight.vercel.app/",
        language: 'next'

    },
    {
        id: 4,
        name: "Blog app",
        img: "/projectimages/blogs.png",
        github: "https://github.com/mukeshjaiswa/blog",
        live: "https://blog-ebon-chi-73.vercel.app/",
        language: 'next'

    },
    {
        id: 5,
        name: "Real Estate",
        img: "/projectimages/realestate.png",
        github: "https://github.com/mukeshjaiswa/real-estate",
        live: "https://real-estate-mukesh.vercel.app/",
        language: 'react'

    },
    {
        id: 6,
        name: "Job Portal",
        img: "/projectimages/jobportal.png",
        github: "https://github.com/mukeshjaiswa/Jobportal",
        live: "https://jobportal-mukesh.vercel.app/",
        language: 'react'

    },
    {
        id: 7,
        name: "T-sewa",
        img: "/projectimages/t-sewa.png",
        github: "https://github.com/mukeshjaiswa/t-sewa",
        live: "https://t-sewa.vercel.app/",
        language: 'next'

    },

]