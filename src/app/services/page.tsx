"use client"
import Image from 'next/image'
import React from 'react'
import All_Services_Section from '../Components/All_Services_Section'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Services() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    }),
      AOS.refresh();
  }, []);
  return (
    <div className="w-full h-fit relative">
    <Image
      src={`/woman-2.jpg`}
      alt="hii"
      width={0}
      height={0}
      unoptimized
      className="bg-image"
    />
    <div className="w-full h-full  flex flex-col">
    <div className="img-content-box">
      <h1 data-aos="fade-up" className="text-3xl font-black text-white">Services</h1>
          <p data-aos="fade-up" className="text-sm text-gray-300 text-center w-3/4 my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            quibusdam doloribus facilis eos cum quaerat, facere dicta,
            recusandae molestiae est sed? Necessitatibus atque dignissimos
            magnam.
          </p>
          <button data-aos="fade-up" className='text-sm font-semibold text-blue-900 bg-white w-fit py-3 px-8 rounded-md'>Get Started</button>
      </div>
      <All_Services_Section/>
      </div>
      </div>
  )
}

export default Services