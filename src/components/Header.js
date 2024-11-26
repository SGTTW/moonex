import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Roadmap
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-2 px-6 rounded-md">
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Header;
