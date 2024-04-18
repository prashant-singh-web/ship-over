import Image from "next/image";
import React from "react";

function About_Section() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 md:p-10">
      <div className="w-full flex flex-col p-5 space-y-5">
        <h4 className="text-sm font-semibold text-gray-600">Misson</h4>
        <h2 className="text-3xl font-extrabold">About Us</h2>
        <p className="text-sm leading-5 text-gray-900/80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          aliquam assumenda, quo provident ad alias, laudantium vero saepe
          adipisci nulla esse, libero facilis distinctio iusto.
        </p>
        <div className="flex flex-col md:flex-row p-5 md:space-x-5">
            <Image src={`/plane.png`} alt="ship" width={0} height={0} unoptimized className=" size-24 rounded-2xl my-3  "/>
            <div className="flex flex-col space-y-3">
                <h2 className="text-base font-bold">Air Freight</h2>
                <p className="text-sm leading-5 text-gray-900/80">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ullam temporibus saepe quia laborum omnis. Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row p-5 md:space-x-5">
            <Image src={`/cargo-ship.png`} alt="ship" width={0} height={0} unoptimized className=" size-24 rounded-2xl my-3  " />
            <div className="flex flex-col space-y-3">
                <h2 className="text-base font-bold">Sea Freight</h2>
                <p className="text-sm leading-5 text-gray-900/80">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ullam temporibus saepe quia laborum omnis. Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
      </div>
      <Image src={`/logistics.jpg`} alt="ship" width={100} height={100} unoptimized className="w-full hidden lg:block"/>
    </div>
  );
}

export default About_Section;
