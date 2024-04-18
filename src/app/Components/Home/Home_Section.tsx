import Image from 'next/image'
import React from 'react'

function Home_Section() {
  return (
    <div className="w-full h-[100vh] bg-[#070D59] relative grid place-items-center  ">
      <Image
        src={`/world-dotted-map.png.webp`}
        alt="homw"
        unoptimized
        width={400}
        height={300}
        className="absolute top-10 md:top-36  left-[50%] w-[50rem] translate-x-[-50%]
    "
      />
      <div className="flex w-full lg:w-[60%] p-2 sm:px-10 md:px-20 flex-col space-y-7 justify-center items-center z-10 ">
        <h2 className="text-white font-extrabold text-5xl md:text-7xl md:px-10">
          Find logistic services
        </h2>
        <p className="text-sm text-gray-400/80 px-3 md:px-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos hic enim
          beatae obcaecati voluptatem recusandae necessitatibus natus tenetur a
          doloribus!
        </p>
        <div className="flex flex-row w-full space-x-5 md:px-10 ">
          <input type="text" className="w-3/4 bg-transparent outline-none border border-gray-500 p-3 rounded-md text-sm focus-within:ring-2 focus-within:ring-blue-900 focus-within:ring-offset-1 focus-within:border-blue-800 text-white/80" placeholder="Your Zip Code" />
      
          <button className="text-sm px-10 rounded-md py-3 bg-white text-blue-700 hover:scale-90  ease-in-out duration-300 font-semibold">Search</button>
        </div>
      </div>
    </div>
  )
}

export default Home_Section