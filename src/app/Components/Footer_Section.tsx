import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer_Section() {
  return (
    <div className="w-full flex space-y-10 flex-col p-10 bg-gray-100">
      <div className="w-full grid gap-5 grid-cols-2 md:grid-cols-12 ">
        <div className=" col-span-2 md:col-span-4  flex flex-col space-y-4">
          <h2 className="text-lg font-bold">About ShipOver</h2>
          <p className="text-sm text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id modi
            aliquam placeat veniam ea aut? Ducimus ab dicta saepe recusandae.
          </p>
          <h2 className="text-lg font-bold">Connect</h2>
          <div className="flex flex-row space-x-3">
            <a href="/#">
              <FaFacebook className="text-3xl p-1.5 bg-blue-500 text-white rounded-full" />
            </a>
            <a href="/#">
              <FaInstagram className="text-3xl p-1.5 bg-blue-500 text-white rounded-full" />
            </a>
            <a href="/#">
              <FaTwitter className="text-3xl p-1.5 bg-blue-500 text-white rounded-full" />
            </a>
            <a href="/#">
              <FaYoutube className="text-3xl p-1.5 bg-blue-500 text-white rounded-full" />
            </a>
          </div>
        </div>
        <div className="w-full col-span-1 md:col-span-2 flex flex-col px-3 space-y-2">
          <h2 className="nav-heading">Links</h2>
          <Link
            href="/"
            className="nav-Link"
          >
            Home
          </Link>
          <Link
            href="/aboutus"
            className="nav-Link"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="nav-Link"
          >
            Services
          </Link>
          <Link
            href="/contactus"
            className="nav-Link"
          >
            Contact
          </Link>
        </div>
        <div className="w-full col-span-1 md:col-span-2 flex flex-col px-3 space-y-2">
          <h2 className="nav-heading">Company</h2>
          <a
            href="/#"
            className="nav-Link"
          >
            Home
          </a>
          <a
            href="/#"
            className="nav-Link"
          >
            About Us
          </a>
          <a
            href="/#"
            className="nav-Link"
          >
            Services
          </a>
          <a
            href="/#"
            className="nav-Link"
          >
            Contact
          </a>
        </div>
        <div className="w-full col-span-2 md:col-span-4 flex flex-col space-y-3">
            <h1 className="nav-heading text-white">Contact Us</h1>
            <p className="nav-Link">43 Raymouth Rd. Baltemoer, London 3910</p>
            <p className="nav-Link">+91-7652021778</p>
            <p className="nav-Link">prashantsingh7559@gmail.com</p>
        </div>
      </div>
      <p className="text-xs md:text-sm text-center text-gray-600 mt-2 border-t pt-3">
        Copyright ©2024 All rights reserved | This template is made by Prashant
        Singh in next Js
      </p>
    </div>
  );
}

export default Footer_Section;
