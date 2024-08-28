import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#fafafa]">
      <div className="">
        <div className="py-10 flex px-3 sm:px-10 bg-indigo-600 items-center justify-between">
          <p className="text-3xl text-white">Spaajman</p>
          <div className="flex text-gray-100">
            <div className="px-2 ">
            <a href="#" target="_blank">
              <FaFacebook className="cursor-pointer text-[25px] duration-150 hover:text-[#e0e0e0]" />
              </a>
            </div>
            <div className="px-2">
              <a href="#" target="_blank">
              <FaInstagram className="cursor-pointer text-[25px] duration-150 hover:text-[#e0e0e0]" />
              </a>
            </div>
            <div className="px-2">
            <a href="#" target="_blank">
              <FaSquareXTwitter className="cursor-pointer text-[25px] duration-150 hover:text-[#e0e0e0]" />
            </a>
            </div>
            <div className="px-2">
            <a href="#" target="_blank">
              <FaWhatsapp className="cursor-pointer text-[25px] duration-150 hover:text-[#e0e0e0]" />
            </a>
            </div>
          </div>
        </div>
        <hr className="h-px border-0 bg-gray-200 dark:bg-indigo-600" />
        <div className="py-16 px-10 bg-[#1d2331] text-white grid gap-16 sm:grid-cols-2 lg:grid-cols-2 lg:gap-10 xl:grid-cols-4">
          <ul className="flex flex-col">
            <li className="list-none text-xl">Services</li>
            <li className="py-3 text-gray-400">
              Lorem ipsum dolor sit amet.
            </li>
            <li className="py-3 text-gray-400">
              Lorem ipsum dolor sit amet.
            </li>
            <li className="py-3 text-gray-400">
              Lorem ipsum dolor sit amet.
            </li>
          </ul>
          <ul className="flex flex-col">
            <li className="list-none text-xl">Company</li>
            <li className="py-3 text-gray-400">
              Lorem ipsum dolor sit amet.
            </li>
            <li className="py-3 text-gray-400">
              Lorem ipsum dolor sit amet.
            </li>
            <li className="py-3 text-gray-400">
              Lorem ipsum dolor sit amet.
            </li>
          </ul>
          <ul className="flex flex-col">
            <li className="list-none text-2xl">Helpful Links</li>
            <li className="py-3 text-gray-400">
              Lorem ipsum dolor sit amet.
            </li>
            <li className="py-3 text-gray-400">
              Lorem ipsum dolor sit amet.
            </li>
            <li className="py-3 text-gray-400">
              Lorem ipsum dolor sit amet.
            </li>
          </ul>
          <ul className="flex flex-col">
            <li className="list-none text-xl">Contact Info</li>
            <li className="py-3 text-gray-400">
            Address
            </li>
            <li className="py-3 text-gray-400">
              Lorem ipsum dolor sit amet.
            </li>
            <li className="py-3 text-gray-400">
              Lorem ipsum dolor sit amet.
            </li>
          </ul>
        </div>
        <p className="text-white py-5 px-10 bg-[#151c24]">© 2024. Spaajman. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer ;