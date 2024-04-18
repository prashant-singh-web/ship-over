import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import About_Section from './Home/About_Section'
import Testimonial_Section from './Home/Testimonial_Section'

function All_Services_Section() {
    const servicesJson = [
        {
            id:1,
            servicesType:"Package Delivery",
            logoImg:"/package.png",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, facere mollitia voluptatum minima quis veritatis at modi officiis eius harum."
        },
        {
            id:2,
            servicesType:"Air Freight",
            logoImg:"/plane.png",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, facere mollitia voluptatum minima quis veritatis at modi officiis eius harum."
        },
        {
            id:3,
            servicesType:"Sea Freight",
            logoImg:"/cargo-ship.png",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, facere mollitia voluptatum minima quis veritatis at modi officiis eius harum."
        },
        {
            id:4,
            servicesType:"Land Freight",
            logoImg:"/delivery-truck.png",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, facere mollitia voluptatum minima quis veritatis at modi officiis eius harum."
        },
        {
            id:5,
            servicesType:"Tracking",
            logoImg:"/delivery.png",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, facere mollitia voluptatum minima quis veritatis at modi officiis eius harum."
        },
        {
            id:6,
            servicesType:"Fast Delivery",
            logoImg:"/chronometer.png",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, facere mollitia voluptatum minima quis veritatis at modi officiis eius harum."
        },
    ]
  return (
  
    <div className="bg-white w-full  flex flex-col justify-center items-center pt-10 md:pt-20">
    <h4 data-aos="zoom-in-up"  className="text-xs font-bold text-gray-500 my-2">Our Services</h4>
    <h2 data-aos="zoom-in-up"  className="text-2xl font-bold">SERVICES</h2>
    <div className="w-full p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white">
        {
            servicesJson.map(services => (
                <div data-aos="zoom-in-up" data-aos-duration="1500"  key={services?.id} className="w-full flex flex-col p-5 space-y-2  rounded-md shadow-md">
            <Image src={services?.logoImg} alt="logoimg" className='size-28' width={0} height={0} unoptimized/>
            <h2 className='text-base font-black text-black/85'>{services?.servicesType}</h2>
            <p className='text-sm leading-5 text-black/70'>{services?.description}</p>
            <button className='flex flex-row text-sm bg-black text-white p-2 w-fit rounded-sm px-5 font-medium group'>Learn More <FaArrowRight className='my-auto ml-2 group-hover:ml-4 ease-in-out duration-300'/></button>
        </div>
            ))
        }
    </div>
    <About_Section/>
    <Testimonial_Section/>
  </div>
  )
}

export default All_Services_Section