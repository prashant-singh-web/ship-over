"use client"
import React from 'react'
import Testimonial_Massage_Section from './Testimonial_Massage_Section'
import WhyUs_Section from './WhyUs_Section'

function Testimonial_Section() {
    
  return (
    <div className="w-full overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-0 p-10">
   <Testimonial_Massage_Section/>
   <WhyUs_Section/>
  
  </div>
  )
}

export default Testimonial_Section