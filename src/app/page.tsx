import Image from "next/image";
import Home_Section from "./Components/Home/Home_Section";
import About_Section from "./Components/Home/About_Section";
import Get_Started_Section from "./Components/Home/Get_Started_Section";
import Testimonial_Section from "./Components/Home/Testimonial_Section";

export default function Home() {
  return (
    <div  className="w-full">
      <Home_Section/>
      <About_Section/>
      <Get_Started_Section/>
      <Testimonial_Section/>
    </div>
  );
}
