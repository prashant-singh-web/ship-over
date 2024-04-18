import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function WhyUs_Section() {
  const [dropdown, setDropdown] = useState("");
  return (
    <div className="w-full flex flex-col justify-center items-center md:justify-normal md:items-start py-10 md:py-0 space-y-4">
      <h5 className="text-xs font-semibold text-gray-300">WHY US</h5>
      <h2 className="text-3xl font-black">Why Choose Us</h2>
      <div className="flex flex-col">
        <div className="w-full flex flex-col">
          <button
            onClick={() => setDropdown("logistics")}
            className={`text-left flex flex-row py-3 font-bold px-10 ${
              dropdown === "logistics"
                ? "bg-[#070D59] text-white"
                : "bg-white text-black hover:bg-gray-200"
            }  text-sm  rounded-md`}
          >
            <FaPlus className="text-sm my-auto mr-3" /> Easily Find Logistics
          </button>
          <p
            className={`text-sm ${
              dropdown === "logistics" ? "px-3 py-3 h-fit" : "px-3 py-0 h-0"
            } overflow-hidden ease-in-out duration-500 text-gray-800/70 `}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            voluptatum asperiores omnis? Quia illum veritatis error molestias
            neque tenetur, et voluptatem non nostrum. Eos repellendus sapiente,
            quia aliquam fuga ex alias sit eligendi harum exercitationem neque
            facilis adipisci, facere ipsam?
          </p>
        </div>
        <div className="w-full flex flex-col">
          <button
            onClick={() => setDropdown("industry")}
            className={`text-left flex flex-row py-3 font-bold px-10 ${
              dropdown === "industry"
                ? "bg-[#070D59] text-white"
                : "bg-white text-black hover:bg-gray-200"
            }  text-sm  rounded-md`}
          >
            <FaPlus className="text-sm my-auto mr-3" /> Delivering Results for
            industry leaders
          </button>
          <p
            className={`text-sm ${
              dropdown === "industry" ? "px-3 py-3 h-fit" : "px-3 py-0 h-0"
            } overflow-hidden ease-in-out duration-500 text-gray-800/70 `}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            voluptatum asperiores omnis? Quia illum veritatis error molestias
            neque tenetur, et voluptatem non nostrum. Eos repellendus sapiente,
            quia aliquam fuga ex alias sit eligendi harum exercitationem neque
            facilis adipisci, facere ipsam?
          </p>
        </div>
        <div className="w-full flex flex-col">
          <button
            onClick={() => setDropdown("transport")}
            className={`text-left flex flex-row py-3 font-bold px-10 ${
              dropdown === "transport"
                ? "bg-[#070D59] text-white"
                : "bg-white text-black hover:bg-gray-200"
            }  text-sm  rounded-md`}
          >
            <FaPlus className="text-sm my-auto mr-3" /> Fast and Secure
            Transport
          </button>
          <p
            className={`text-sm ${
              dropdown === "transport" ? "px-3 py-3 h-fit" : "px-3 py-0 h-0"
            } overflow-hidden ease-in-out duration-500 text-gray-800/70 `}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            voluptatum asperiores omnis? Quia illum veritatis error molestias
            neque tenetur, et voluptatem non nostrum. Eos repellendus sapiente,
            quia aliquam fuga ex alias sit eligendi harum exercitationem neque
            facilis adipisci, facere ipsam?
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs_Section;
