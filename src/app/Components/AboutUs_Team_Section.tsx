import Image from "next/image";
import React from "react";
import About_Section from "./Home/About_Section";
import Testimonial_Section from "./Home/Testimonial_Section";

function AboutUs_Team_Section() {
  const teamJson = [
    {
      id: 1,
      logo: "/person_1.jpg",
      name: "Raymond Woodward",
      position: "Engineer & Architect",
      about:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, tenetur aliquid facilis quaerat, sint numquam excepturi voluptate sed officia dolore voluptas odit iste sit dolor veritatis laudantium quo expedita fuga.",
    },
    {
      id: 2,
      logo: "/person_2.jpg.webp",
      name: "Edwin Snider",
      position: "Engineer & Architect",
      about:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, tenetur aliquid facilis quaerat, sint numquam excepturi voluptate sed officia dolore voluptas odit iste sit dolor veritatis laudantium quo expedita fuga.",
    },
    {
      id: 3,
      logo: "/person_3.jpg.webp",
      name: "Cedric Davidson",
      position: "Engineer & Architect",
      about:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, tenetur aliquid facilis quaerat, sint numquam excepturi voluptate sed officia dolore voluptas odit iste sit dolor veritatis laudantium quo expedita fuga.",
    },
    {
      id: 4,
      logo: "/person_1.jpg",
      name: "Raymond Woodward",
      position: "Engineer & Architect",
      about:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, tenetur aliquid facilis quaerat, sint numquam excepturi voluptate sed officia dolore voluptas odit iste sit dolor veritatis laudantium quo expedita fuga.",
    },
    {
      id: 5,
      logo: "/person_2.jpg.webp",
      name: "Edwin Snider",
      position: "Engineer & Architect",
      about:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, tenetur aliquid facilis quaerat, sint numquam excepturi voluptate sed officia dolore voluptas odit iste sit dolor veritatis laudantium quo expedita fuga.",
    },
    {
      id: 6,
      logo: "/person_3.jpg.webp",
      name: "Cedric Davidson",
      position: "Engineer & Architect",
      about:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, tenetur aliquid facilis quaerat, sint numquam excepturi voluptate sed officia dolore voluptas odit iste sit dolor veritatis laudantium quo expedita fuga.",
    },
  ];
  return (
    <div className="bg-white w-full  flex flex-col justify-center items-center pt-10 ">
      <h4 className="text-xs font-bold text-gray-500 my-2">AWESOME TEAM</h4>
      <h2 className="text-2xl font-bold">TEAM</h2>
      <div className="grid w-full gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mt-20 p-10">
        {teamJson.map((team) => (
          <div key={team?.id} className="w-full flex flex-col  p-5 shadow rounded-lg">
            <Image
              src={team?.logo}
              alt="logo"
              unoptimized
              width={0}
              height={0}
              className="size-36 rounded-full"
            />
            <h1 className="text-base text-black font-black mt-3">
              {team?.name}
            </h1>
            <h3 className="text-sm">{team?.position}</h3>
            <p className="text-sm my-3 text-black/70">“{team?.about}”</p>
            <button className="text-sm w-fit px-4 py-2 font-medium border border-gray-500 rounded-md hover:bg-black hover:text-white duration-300 ease-in-out shadow-xl">
              Learn More
            </button>
          </div>
        ))}
      </div>
      <About_Section/>
      <Testimonial_Section/>
    </div>
  );
}

export default AboutUs_Team_Section;
