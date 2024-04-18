"use client"
import Home_Section from "./Components/Home/Home_Section";
import About_Section from "./Components/Home/About_Section";
import Get_Started_Section from "./Components/Home/Get_Started_Section";
import Testimonial_Section from "./Components/Home/Testimonial_Section";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    }),
      AOS.refresh();
  }, []);
  return (
    <div  className="w-full">
      <Home_Section/>
      <About_Section/>
      <Get_Started_Section/>
      <Testimonial_Section/>
    </div>
  );
}
