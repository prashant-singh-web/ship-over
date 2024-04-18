import Image from 'next/image'
import React from 'react'

function Contact_Detail_Section() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5">
        <div className="w-full bg-gray-50 h-56 md:h-96 justify-center items-center flex flex-col space-y-5 rounded-3xl shadow ">
            <Image src={`/phone.png`} alt='' height={100} width={100} className='mx-auto'/>
            <p className='text-lg text-center px-5  font-medium text-black/80 mx-auto'>+91-7652021778</p>
        </div>
        <div className="w-full h-56 bg-gray-50 md:h-96 justify-center items-center flex flex-col space-y-5 rounded-xl shadow">
            <Image src={`/mail.png`} alt='' height={100} width={100} className='mx-auto'/>
            <p className='text-sm sm:text-lg text-center px-5   font-medium text-black/80 mx-auto'>prashantsingh7559@gmail.com</p>
        </div>
        <div className="w-full bg-gray-50 h-56 md:h-96 justify-center items-center flex flex-col space-y-5 rounded-xl shadow">
            <Image src={`/map.png`} alt='' height={100} width={100} className='mx-auto'/>
            <p className='text-lg font-medium text-center px-5 text-black/80 mx-auto'>43 Raymouth Rd. Baltemoer, London 3910</p>
        </div>
    </div>
  )
}

export default Contact_Detail_Section