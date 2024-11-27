import React from "react";
import txIcon from "../assets/tx-icon.png";
import certikIcon from "../assets/certik-icon.png";
import noContractIcon from "../assets/no-contract-icon.png";
import crossDexIcon from "../assets/cross-dex-icon.png";

const Features = () => {
  return (
    <section className="bg-[#051422] text-white px-4 py-16 sm:px-12 lg:px-20">
      <h2 className="text-white text-3xl lg:text-4xl font-bold text-center mb-12">
        Our <span className="text-yellow-400">Features</span>
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: txIcon,
            title: "Cheapest TXs",
            description:
              "Exchange popular digital currencies at the cheapest possible transaction price.",
          },
          {
            icon: certikIcon,
            title: "CertiK",
            description:
              "We are audited by CertiK, the leading security-focused ranking platform.",
          },
          {
            icon: noContractIcon,
            title: "No Contract Sells",
            description: "No contract sells to fund the marketing wallets.",
          },
          {
            icon: crossDexIcon,
            title: "CrossDex Support",
            description:
              "Exchange popular digital currencies at the cheapest possible transaction price.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 text-start hover:bg-gray-700 transition"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-12 h-12   mb-4 "
            />
            <h3 className="text-white-50 text-lg font-semibold mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
