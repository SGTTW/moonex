import React, { useState } from "react";
import logo from "../assets/logo.png";
import bg from "../assets/bg.png";
import circle from "../assets/circles.png";
import ellipse from "../assets/bg-gradient-img.png";
import star from "../assets/star-img.png";
import star1 from "../assets/star-img (1).png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";  

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <section className="relative bg-[#051422] min-h-screen overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 sm:px-12 py-4 z-20">
        {/* Logo */}
        <div className="text-yellow-400 font-bold text-1xl pt-2">
          <img src={logo} alt="logo" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden sm:flex space-x-6 text-white text-sm lg:text-base">
          <a href="#home" className="hover:text-yellow-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-400 transition">
            About Us
          </a>
          <a href="#roadmap" className="hover:text-yellow-400 transition">
            Roadmap
          </a>
          <a href="#faqs" className="hover:text-yellow-400 transition">
            FAQs
          </a>
          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact Us
          </a>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } sm:hidden absolute rounded-sm  top-16 left-[15rem] w-[10rem] bg-white text-black px-6 py-4 flex-col space-y-4 transition-all duration-300 ease-in-out z-20`}
      >
        <a href="#home" className="hover:text-yellow-400 transition block">
          Home
        </a>
        <a href="#about" className="hover:text-yellow-400 transition block">
          About Us
        </a>
        <a href="#roadmap" className="hover:text-yellow-400 transition block">
          Roadmap
        </a>
        <a href="#faqs" className="hover:text-yellow-400 transition block">
          FAQs
        </a>
        <a href="#contact" className="hover:text-yellow-400 transition block">
          Contact Us
        </a>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 mt-20 flex flex-col items-start justify-center text-left px-4 sm:px-12 lg:px-20 min-h-screen">
        {/* Background Images */}
        <div className="absolute inset-0 ">
          <img
            src={bg}
            alt="background"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <img
            src={circle}
            alt="circle"
            className="absolute top-0 left-0 w-full h-full object-cover z-10 opacity-75"
          />
          <img
            src={star1}
            alt="star"
            className="absolute top-[7rem] left-[8rem] z-0 "
          />
        </div>

        {/* Hero Content */}
        <h1 className="relative text-white text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight z-20 lg:mt-20">
          Trusted Multi-Chain <br />
          <span className="text-yellow-400">DEX Platform</span>
        </h1>
        <p className="relative text-gray-300 text-sm sm:text-base lg:text-lg mt-4 max-w-2xl z-20">
          Trade, earn, and own crypto on the all-in-one multi-chain DEX
        </p>
        <div className="relative flex space-x-4 mt-6 z-20">
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-[100px] hover:bg-yellow-500 transition">
            Connect Wallet
          </button>
          <button className="bg-transparent border border-yellow-400 text-yellow-400 px-6 py-2 rounded-[100px] hover:bg-yellow-400 hover:text-black transition">
            Trade Crypto
          </button>
        </div>

        {/* Ellipse-like Div */}
        <span className="absolute w-[200px] h-[200px] sm:w-[150px] sm:h-[150px] rounded-full top-[5%] right-[2%] sm:top-[10%] sm:right-[5%] z-10">
          <img src={ellipse} alt="ellipse" className="w-full h-full" />
          <img
            src={star}
            alt="star"
            className="absolute top-[5rem] left-[6rem] sm:top-[2rem] sm:left-[3rem] z-0"
            style={{ transform: "scale(0.6)" }} 
          />
          <img
            src={star1}
            alt="star"
            className="absolute top-[15rem] left-[8rem] sm:top-[12rem] sm:left-[4rem] z-0"
            style={{ transform: "scale(0.6)" }}  
          />
        </span>
      </div>
    </section>
  );
};

export default Hero;
