"use client"
import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

export default function About() {
    const { mode } = useContext(ThemeContext)
    return (
        <div id='about' className='px-5  sm:px-10 lg:px-15  xl:px-30 py-10'>
            <h1 className='text-center font-bold md:text-4xl text-xl'>About Me</h1>
            <div className='mt-5'>
                <p className=''>Hi, I'm Mukesh Kumar Chaudhary from Kathmandu, Nepal. I completed my  Bachelor of Computer Applications (BCA) from TU and I am frontend  developer passionate about creating modern, responsive, and user-friendly web applications.</p>
                <div className='px-5 w-full mt-5'>
                    <h1 className='text-xl font-semibold'>What I do</h1>
                    <div className='px-4 py-1'>
                        {works.map((item, index) => (
                            <li key={index} className=''>{item.work}</li>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
const works = [
    { work: 'Build responsive websites' },
    { work: 'Create React/Next.js applications' },
    { work: 'UI/UX focused development' },

]
// Build responsive websites
// Create React/Next.js applications
// Design WordPress websites using Elementor
// UI/UX focused development