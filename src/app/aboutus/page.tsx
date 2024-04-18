import Image from 'next/image'
import React from 'react'
import AboutUs_Team_Section from '../Components/AboutUs_Team_Section'

function AboutUs() {
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
      <div className="img-content-box">
      <h1 className="text-3xl font-black text-white">About us</h1>
          <p className="text-sm text-gray-300 text-center w-3/4 my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            quibusdam doloribus facilis eos cum quaerat, facere dicta,
            recusandae molestiae est sed? Necessitatibus atque dignissimos
            magnam.
          </p>
          <button className='text-sm font-semibold text-blue-900 bg-white w-fit py-3 px-8 rounded-md'>Get Started</button>
      </div>
      <div className="w-full
      ">
        <AboutUs_Team_Section/>
      </div>
      </div>
  )
}

export default AboutUs