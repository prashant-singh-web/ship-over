import Image from "next/image";
import React from "react";
import Testimonial_Section from "../Components/Home/Testimonial_Section";
import Contact_Detail_Section from "../Components/Contact_Detail_Section";

function ContectUs() {
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
          <h1 className="text-3xl font-black text-white">Contact us</h1>
          <p className="text-sm text-gray-300 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            quibusdam doloribus facilis eos cum quaerat, facere dicta,
            recusandae molestiae est sed? Necessitatibus atque dignissimos
            magnam.
          </p>
        </div>
        <form action="/#" method="post" >
            <div className="w-full grid grid-cols-2 gap-5 bg-white p-10">
                <div className="grid-span">
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <input id="first_name" type="text" placeholder="Your First Name" className="form-input" />
                </div>
                <div className="grid-span">
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <input id="last_name" type="text" placeholder="Your Last Name" className="form-input" />
                </div>
                <div className="grid-span">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input id="email" type="email" placeholder="Your Email" className="form-input" />
                </div>
                <div className="grid-span">
                    <label htmlFor="number" className="form-label">Number</label>
                    <input id="number" type="text"  placeholder="Your Number" className="form-input" />
                </div>
                <div className="flex flex-col col-span-2">
                    <label htmlFor="textMsg" className="form-label">Your Text</label>
                    <textarea name="" id="textMsg" cols={5} rows={5} placeholder="Enter Your Text" className="form-input " ></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 py-2 rounded-md text-white shadow-md hover:bg-blue-700">Send</button>
            </div>
        </form>
        <div className="bg-white">
          <Contact_Detail_Section/>
        <Testimonial_Section/>
        </div>
      </div>
    </div>
  );
}

export default ContectUs;
