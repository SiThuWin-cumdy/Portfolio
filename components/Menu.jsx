"use client";
import FooterComponent from "@/components/Footer";
import { Link, animateScroll as scroll } from "react-scroll";
import { FiHome } from "react-icons/fi";
import { BsPersonVcard } from "react-icons/bs";
import { AiOutlineLaptop } from "react-icons/ai";
import { TfiLayoutMediaOverlay } from "react-icons/tfi";
import { TbPhoneCall } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
export default function MenuComponent() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={`sticky top-0 flex flex-col h-screen bg-white rounded-sm overflow-hidden transition-all duration-300 ease-linear ${
          isOpen ? "w-56" : "w-12"
        }`}
      >
        <div className="h-full flex flex-col overflow-y-auto overflow-x-hidden">
          <div className="flex items-center justify-center h-32 ">
            <RxHamburgerMenu
              className="absolute top-0 right-0 cursor-pointer"
              onClick={handleClick}
            />
            <div
              className={`${
                !isOpen ? "w-11 h-11" : "w-24 h-24"
              } overflow-hidden rounded-full border-4 border-indigo-700 `}
            >
              <img src="images/logos/coding.png" title="" alt="" />
            </div>
          </div>
          <h3
            className={`${
              !isOpen ? "text-lg" : "text-2xl"
            } text-center uppercase text-indigo-700 pb-3 shadow-md`}
          >
            Si Thu Win
          </h3>
          <ul className="flex flex-col py-4">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={800}
                className="cursor-pointer flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-700 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg  ">
                  <FiHome />
                </span>
                <span
                  className={`text-sm font-medium ${!isOpen ? "hidden" : ""}`}
                >
                  HOME
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="aboutme"
                smooth={true}
                duration={800}
                className="cursor-pointer flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-700 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg  ">
                  <BsPersonVcard />
                </span>
                <span
                  className={`text-sm font-medium ${!isOpen ? "hidden" : ""}`}
                >
                  ABOUT ME
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={800}
                className="cursor-pointer flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-700 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg ">
                  <AiOutlineLaptop />
                </span>
                <span
                  className={`text-sm font-medium ${!isOpen ? "hidden" : ""}`}
                >
                  SERVICES
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="blogs"
                smooth={true}
                duration={800}
                className="cursor-pointer flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-700 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg ">
                  <TfiLayoutMediaOverlay />
                </span>
                <span
                  className={`text-sm font-medium ${!isOpen ? "hidden" : ""}`}
                >
                  BLOGS
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="contactme"
                smooth={true}
                duration={800}
                className="cursor-pointer flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-700 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg ">
                  <TbPhoneCall />
                </span>
                <span
                  className={`text-sm font-medium ${!isOpen ? "hidden" : ""}`}
                >
                  CONTACT ME
                </span>
              </Link>
            </li>
          </ul>

          <div className="flex items-end flex-grow w-full justify-center py-3">
            <FooterComponent isOpen={isOpen} />
          </div>
        </div>
      </div>
    </>
  );
}
