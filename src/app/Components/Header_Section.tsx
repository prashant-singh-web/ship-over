"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { RxHamburgerMenu } from 'react-icons/rx'

function Header_Section() {
  const [toggle, setToggle] = useState(false)
  return (
    <div  className='bg-[#070D59] flex flex-row justify-between w-full fixed z-50 p-5 md:px-20 '>
        <h1 data-aos="fade-left" className='text-xl font-bold text-white/90'>ShipOver</h1>
        <div data-aos="fade-right" className={` absolute md:static top-16  right-0 ${toggle ? "w-full":"w-0"} md:w-fit overflow-hidden ease-in-out duration-300 h-[100vh] md:h-fit bg-[#070D59] flex-col justify-center items-center space-y-10 md:space-y-0 md:flex-row my-auto md:space-x-10 flex`}>
            <Link href="/" className='text-sm text-white/50 hover:text-white ' >Home</Link>
            <Link href="/services" className='text-sm text-white/50 hover:text-white ' >Service</Link>
            <Link href="/aboutus" className='text-sm text-white/50 hover:text-white ' >About</Link>
            <Link href="/contactus" className='text-sm text-white/50 hover:text-white ' >Contect Us</Link>
        </div>
        {toggle ? <CgClose onClick={()=>setToggle(toggle => !toggle)} className='text-2xl text-white my-auto md:hidden' data-aos="fade-right"/>:<RxHamburgerMenu onClick={()=>setToggle(toggle => !toggle)} className='text-2xl text-white my-auto md:hidden' data-aos="fade-right"/>}
    </div>
  )
}

export default Header_Section