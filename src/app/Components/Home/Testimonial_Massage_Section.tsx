import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Testimonial_Massage_Section() {
  const [current, setCurrent] = useState(0)

  const testimonialJson = [
    {
      id:1,
      logo:"/person_1.jpg",
      name:"John Doe",
      position:"Web Developer",
      testimonialMsg:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
      id:2,
      logo:"/person_2.jpg.webp",
      name:"John",
      position:"Web",
      testimonialMsg:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roa"
    },
    {
      id:3,
      logo:"/person_3.jpg.webp",
      name:"doe",
      position:"Developer",
      testimonialMsg:"A small river named Duden flows by their place and supplies it with the necessary regeliali"
    },
  ]
  const handlePrev = () => setCurrent(current > 0 ? current - 1 : testimonialJson.length - 1);
  const handleNext = () => setCurrent(current < testimonialJson.length - 1 ? current + 1 : 0);
  useEffect(() => {
    const slideInterval = setTimeout(() => {
      handleNext(); // Call the function here
    }, 2000);
  
    return () => {
      clearTimeout(slideInterval);
    }
  }, [current]);
  
  return (
    <div data-aos="fade-right" className="w-full flex flex-col space-y-4 justify-center items-center md:items-start md:justify-normal ">
      <h5 className="text-xs font-semibold text-gray-300">TESTIMONIALS</h5>
      <h2 className="text-3xl font-black">Happy Customer</h2>
      <div className="w-full h-fit overflow-hidden">
      <div className={`w-full md:w-3/4 min-h-[25rem]  mx-auto md:mx-0
       flex flex-col py-10 justify-center items-center p-5 space-y-2`}>
        <Image
          src={testimonialJson[current]?.logo}
          alt={"logo"}
          width={0}
          height={0}
          unoptimized
          className="size-24 rounded-full"
        />
        <h2 className="text-lg font-bold">{testimonialJson[current]?.name}</h2>
        <h4 className="text-xs text-gray-500">{testimonialJson[current]?.position}</h4>
        <p className="text-sm leading-6 text-gray-600 text-center">
          “{testimonialJson[current]?.testimonialMsg}”
        </p>
      </div>
      </div>
      <div className="flex flex-row  justify-evenly w-3/4">
        <div className="flex flex-row space-x-2">
          <button onClick={handlePrev} className="text-gray-500 text-xl shadow p-2 rounded-md hover:bg-gray-100"><FaArrowLeft/></button>
          <button onClick={handleNext} className="text-gray-500 text-xl shadow p-2 rounded-md hover:bg-gray-100"><FaArrowRight/></button>
        </div>
      
      </div>
    </div>
  );
}

export default Testimonial_Massage_Section;
