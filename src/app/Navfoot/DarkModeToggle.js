"use client"
import React, { useState, useContext } from 'react'
import { IoMoonSharp } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { ThemeContext } from '../Context/ThemeContext';

export default function DarkModeToggle() {
    const { toggle, mode } = useContext(ThemeContext)


    return (
        <div onClick={toggle} className='w-12 h-6 rounded-3xl cursor-pointer border relative border-gray-400 items-center px-1 flex justify-between'>
            <IoMoonSharp className='text-yellow-400' />
            <MdOutlineWbSunny className='text-yellow-400' />
            <div className='w-4 h-4 bg-green-400 rounded-full transition-all duration-200 absolute' style={{ left: mode === 'dark' ? '4px' : '27px' }}
            >
            </div>

        </div >
    )
}
