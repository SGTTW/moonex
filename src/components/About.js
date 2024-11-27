import React from "react";
import moonexLogo from "../assets/moon.png";
import uniswapLogo from "../assets/uniswap-logo.png";
import checkIcon from "../assets/check-icon.png";
import crossIcon from "../assets/cross-icon.png";

const About = () => {
  return (
    <section className="relative bg-[#051422] text-white px-4 py-16 sm:px-12 lg:px-20">
      {/* Section Heading */}
      <h2 className="text-white text-3xl lg:text-4xl font-bold  text-start mb-12">
        Why <span className="text-yellow-400">MoonEX</span> ?
      </h2>

      {/* Comparison Table */}
      <div className="bg-white bg-opacity-10 rounded-lg shadow-lg overflow-hidden p-6">
        <div className="grid grid-cols-3 text-center text-sm sm:text-base lg:text-lg">
          {/* Table Header */}
          <div className="font-bold text-yellow-400 text-start pl-[15px]">
            Comparison
          </div>
          <div className="font-bold flex items-center justify-center space-x-1  ">
            <img src={moonexLogo} alt="Moonex" className="w-8 h-8 pb-2" />
            <span>Moonex</span>
          </div>
          <div className="font-bold flex items-center justify-center space-x-2 text-red-400">
            <img src={uniswapLogo} alt="Uniswap" className="w-6 h-6" />
            <span>Uniswap</span>
          </div>
        </div>

        {/* Table Rows */}
        {[
          "Point no one",
          "Point no two this",
          "Point no three this",
          "Point no four this",
          "Point no four this",
        ].map((point, index) => (
          <div
            key={index}
            className="grid grid-cols-3 items-center text-start py-4 border-b border-gray-700 last:border-b-0"
          >
            <div className="text-gray-300">
              {index + 1}. {point}
            </div>
            <div className="flex justify-center">
              <img
                src={checkIcon}
                alt="Check"
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={crossIcon}
                alt="Cross"
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
