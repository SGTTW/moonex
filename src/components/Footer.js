import React from "react";
// Import images/icons
import moon from "../assets/moon.png";
import telegramIcon from "../assets/telegram-icon.png";
import redditIcon from "../assets/reddit-icon.png";
import twitterIcon from "../assets/twitter-icon.png";

const Footer = () => {
  return (
    <section
      className="bg-gradient-to-b from-[#0A0F24] to-[#0A0F1E] 
    py-16 px-4 sm:px-12 lg:px-20"
    >
      <div
        className=" mx-auto   text-white rounded-lg p-6 shadow-lg
       flex flex-col sm:flex-row
        justify-between items-center space-y-6 sm:space-y-0"
      >
        <div className="flex flex-col items-center space-y-2 ">
          <img src={moon} alt="Moonex Logo" className="h-16 w-20" />
          <span className="text-yellow-400 text-lg font-bold">Moonex</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 text-sm sm:text-base">
          <a href="#about-us" className="hover:text-yellow-400">
            About Us
          </a>
          <a href="#roadmap" className="hover:text-yellow-400">
            Roadmap
          </a>
          <a href="#faqs" className="hover:text-yellow-400">
            FAQs
          </a>
          <a href="#contact-us" className="hover:text-yellow-400">
            Contact Us
          </a>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center space-y-2">
          <span className="text-yellow-400 font-semibold">
            Contact <span className="text-white">Us</span>
          </span>
          <div className="flex space-x-4">
            <a
              href="#telegram"
              className="hover:scale-110 transition-transform"
            >
              <img src={telegramIcon} alt="Telegram" className="w-6 h-6" />
            </a>
            <a href="#reddit" className="hover:scale-110 transition-transform">
              <img src={redditIcon} alt="Reddit" className="w-6 h-6" />
            </a>
            <a href="#twitter" className="hover:scale-110 transition-transform">
              <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
