// import React from "react";

// const Hero = () => {
//   return (
//     <section className="relative bg-black min-h-screen overflow-hidden">
//       {/* Header */}
//       <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 sm:px-12 py-4 z-20">
//         {/* Logo */}
//         <div className="text-yellow-400 font-bold text-2xl">
//           <span>MyLogo</span>
//         </div>
//         {/* Navigation Links */}
//         <nav className="hidden sm:flex space-x-6 text-white text-sm lg:text-base">
//           <a href="#home" className="hover:text-yellow-400 transition">
//             Home
//           </a>
//           <a href="#about" className="hover:text-yellow-400 transition">
//             About Us
//           </a>
//           <a href="#roadmap" className="hover:text-yellow-400 transition">
//             Roadmap
//           </a>
//           <a href="#faqs" className="hover:text-yellow-400 transition">
//             FAQs
//           </a>
//           <a href="#contact" className="hover:text-yellow-400 transition">
//             Contact Us
//           </a>
//         </nav>
//         {/* Connect Wallet Button */}
//         <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition text-sm lg:text-base">
//           Connect Wallet
//         </button>
//       </header>

//       {/* Hero Section */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 min-h-screen">
//         <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
//           Trusted Multi-Chain <span className="text-yellow-400">DEX Platform</span>
//         </h1>
//         <p className="text-gray-300 text-sm sm:text-base lg:text-lg mt-4 max-w-2xl">
//           Trade, earn, and own crypto on the all-in-one multi-chain DEX
//         </p>
//         <div className="flex flex-wrap justify-center space-x-4 mt-6">
//           <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition">
//             Connect Wallet
//           </button>
//           <button className="bg-transparent border border-yellow-400 text-yellow-400 px-6 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition">
//             Trade Crypto
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import logo from "../assets/logo.png";
import bg from "../assets/bg.png";
import circle from "../assets/circles.png";
import ellipse from "../assets/bg-gradient-img.png";
import star from "../assets/star-img.png";
import star1 from "../assets/star-img (1).png";

const Hero = () => {
  return (
    <section className="relative bg-[#051422] min-h-screen overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 sm:px-12 py-4 z-20">
        {/* Logo */}
        <div className="text-yellow-400 font-bold text-1xl">
          <img src={logo} alt="logo" />
        </div>
        {/* Navigation Links */}
        <nav className="hidden sm:flex space-x-6 text-white text-sm lg:text-base">
          <a
            href="#home"
            className="hover:text-yellow-400 transition text-yellow-400"
          >
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
        {/* Connect Wallet Button */}
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-[100px] hover:bg-yellow-500 transition text-sm lg:text-base">
          Connect Wallet
        </button>
      </header>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-start justify-center text-left px-4 sm:px-12 lg:px-20 min-h-screen">
        {/* Background Images */}
        <div className="absolute inset-0">
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
            className="absolute top-[7rem] left-[8rem] z-0"
          />
        </div>

        {/* Hero Content */}
        <h1 className="relative text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight z-20 mt-20">
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
        {/* <div className="absolute bg-yellow-500 w-[200px] h-[200px] rounded-full top-[20%] right-[10%] z-10 "></div> */}
        <span className="absolute  w-[300px] h-[300px] rounded-full top-[2%] right-[1%] z-10">
          <img src={ellipse} />
          <img
            src={star}
            alt="star"
            className="absolute top-[5rem] left-[10rem] z-0"
          />
          <img
            src={star1}
            alt="star"
            className="absolute top-[20rem] left-[10rem] z-0"
          />
        </span>
      </div>
    </section>
  );
};

export default Hero;
