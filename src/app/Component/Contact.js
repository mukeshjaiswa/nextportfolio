"use client"
import React, { useState, useContext } from 'react'
import { toast } from 'react-toastify'
import { ThemeContext } from '../Context/ThemeContext'


export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const { mode } = useContext(ThemeContext)

    const submit = () => {
        if (!name || !email || !number || !message) {
            toast.warn("Please enter all fields")
        }
        else if (number.length != 10) {
            toast.warning("Number must be 10 digits")
        }
        else {
            toast.success("Sucessfully submit ")
            console.log("Full Name: ", name)
            console.log("Email:", email)
            console.log("Number:", number)
            console.log("subject:", subject)
            console.log("Message:", message)
            setEmail("")
            setName("")
            setNumber("")
            setSubject("")
            setMessage("")
        }
    }
    return (

        <div id='contact' className='px-5 sm:px-10 lg:px-15 mt-15'>
            <h1 className='text-center font-bold md:text-4xl text-xl'>Contact me</h1>
            <p className='text-center font-light  mt-3 px-10' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, excepturi laboriosam sapiente corporis est odit libero obcaecati voluptas omnis consequatur architecto quae modi voluptate alias, molestiae ullam ea nulla! Libero.</p>
            <div className={`${mode === 'dark' ? 'bg-gray-100  text-zinc-800' :
                "bg-zinc-800 text-white"} w-full  rounded-xl mt-10 p-10 px-10`}>

                <div className='w-full flex flex-col md:flex-row gap-5 items-center justify-between md:gap-10'>

                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Mukesh Jaiswal' className='rounded-md p-3 bg-white font-semibold text-lg outline-none border border-gray-200 w-full' />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='12example@gmail.com' className='rounded-md p-3 bg-white font-semibold  text-lg outline-none border border-gray-200 w-full' />

                </div>
                <div className='w-full flex flex-col md:flex-row gap-5 items-center justify-between md:gap-10 mt-5'>
                    <input value={number} onChange={(e) => setNumber(e.target.value)} type="number" placeholder='98xxxxxx76' className='rounded-md p-3 bg-white font-semibold  text-lg outline-none border border-gray-200 w-full' />
                    <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" placeholder='Frontend Developer' className='rounded-md p-3 bg-white font-semibold  text-lg outline-none border border-gray-200 w-full' />
                </div>

                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your Message' rows={5} className='rounded-md p-3 bg-white mt-5 font-semibold  text-lg outline-none border border-gray-200 w-full'></textarea>

                <button className='rounded-md p-3 bg-linear-to-tl from-blue-500 to-blue-600 text-white font-semibold mt-5  text-lg outline-none   w-full cursor-pointer hover:from-blue-500 hover:to-blue-700 duration-600 transition-all' onClick={submit}>Submit</button>

            </div>
        </div>
    )
}
