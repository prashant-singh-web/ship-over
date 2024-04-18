import Image from 'next/image'
import React from 'react'

function Get_Started_Section() {
  return (
    <div className='w-full sm:h-[30vh] md:h-[50vh] lg:h-[80vh]  relative bg-blue-700 '>
        <Image src={`/woman-2.jpg`} alt='' width={300} height={300} unoptimized className=' absolute w-full h-full  '/>
        <div className="w-full h-full py-5 px-4 space-y-6 relative bg-[#070D59]/50 z-70 flex flex-col justify-center items-center">
            <h2 className='text-xl text-center md:text-3xl text-white font-bold'>Delivering Results for Industry Leaders</h2>
            <p className='md:w-1/2 text-center text-sm  text-white/80 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium itaque earum voluptas facere, facilis aut officiis dolor officia assumenda, beatae eius fugit autem, animi ipsam odio magni iste numquam. Quasi.</p>
            <button className='text-sm px-10 py-3 bg-[#070D59] text-white rounded hover:scale-90 ease-in-out duration-200'>Get Started</button>
        </div>
    </div>
  )
}

export default Get_Started_Section