"use client";
import FooterComponent from "@/components/Footer";
import { Link, animateScroll as scroll } from "react-scroll";
import { FiHome } from "react-icons/fi";
import { BsPersonVcard } from "react-icons/bs";
import { AiOutlineLaptop } from "react-icons/ai";
import { TfiLayoutMediaOverlay } from "react-icons/tfi";
import { TbPhoneCall } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";
import React from "react";

export default function MenuComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Use useEffect to handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-full mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label="Scroll to top"
            onClick={() => scroll.scrollToTop({ duration: 800 })}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                scroll.scrollToTop({ duration: 800 });
              }
            }}
          >
            <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-indigo-700">
              <img src="images/logos/coding.png" title="Si Thu Win logo" alt="Logo for Si Thu Win — Software Developer" className="w-full h-full object-cover" />
            </div>
            <h3 className="ml-3 text-xl uppercase text-indigo-700">
              Si Thu Win
            </h3>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="home"
              smooth={true}
              duration={800}
              spy={true}
              activeClass="text-indigo-700 font-semibold"
              className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-700 cursor-pointer transition-colors duration-200"
            >
              <FiHome className="mr-2" />
              <span className="text-sm font-medium">HOME</span>
            </Link>
            <Link
              to="aboutme"
              smooth={true}
              duration={800}
              spy={true}
              activeClass="text-indigo-700 font-semibold"
              className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-700 cursor-pointer transition-colors duration-200"
            >
              <BsPersonVcard className="mr-2" />
              <span className="text-sm font-medium">ABOUT ME</span>
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={800}
              spy={true}
              activeClass="text-indigo-700 font-semibold"
              className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-700 cursor-pointer transition-colors duration-200"
            >
              <AiOutlineLaptop className="mr-2" />
              <span className="text-sm font-medium">SERVICES</span>
            </Link>
            <Link
              to="blogs"
              smooth={true}
              duration={800}
              spy={true}
              activeClass="text-indigo-700 font-semibold"
              className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-700 cursor-pointer transition-colors duration-200"
            >
              <TfiLayoutMediaOverlay className="mr-2" />
              <span className="text-sm font-medium">BLOGS</span>
            </Link>
            <Link
              to="contactme"
              smooth={true}
              duration={800}
              spy={true}
              activeClass="text-indigo-700 font-semibold"
              className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-700 cursor-pointer transition-colors duration-200"
            >
              <TbPhoneCall className="mr-2" />
              <span className="text-sm font-medium">CONTACT ME</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleClick}
              className="text-gray-700 hover:text-gray-900"
            >
              <RxHamburgerMenu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 right-0 bg-white shadow-md`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="home"
              smooth={true}
              duration={800}
              spy={true}
              activeClass="text-indigo-700 bg-gray-50 font-semibold"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-700 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <FiHome className="mr-2" />
                <span className="text-sm font-medium">HOME</span>
              </div>
            </Link>
            <Link
              to="aboutme"
              smooth={true}
              duration={800}
              spy={true}
              activeClass="text-indigo-700 bg-gray-50 font-semibold"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-700 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <BsPersonVcard className="mr-2" />
                <span className="text-sm font-medium">ABOUT ME</span>
              </div>
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={800}
              spy={true}
              activeClass="text-indigo-700 bg-gray-50 font-semibold"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-700 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <AiOutlineLaptop className="mr-2" />
                <span className="text-sm font-medium">SERVICES</span>
              </div>
            </Link>
            <Link
              to="blogs"
              smooth={true}
              duration={800}
              spy={true}
              activeClass="text-indigo-700 bg-gray-50 font-semibold"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-700 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <TfiLayoutMediaOverlay className="mr-2" />
                <span className="text-sm font-medium">BLOGS</span>
              </div>
            </Link>
            <Link
              to="contactme"
              smooth={true}
              duration={800}
              spy={true}
              activeClass="text-indigo-700 bg-gray-50 font-semibold"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-700 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <TbPhoneCall className="mr-2" />
                <span className="text-sm font-medium">CONTACT ME</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}