import React, { useState } from "react";

import plusIcon from "../assets/plus-icon.png";
import chevronDown from "../assets/chevron-down.png";

const faqs = [
  {
    question: "How do I get a Referral Code?",
    answer: "You can obtain a referral code by signing up on the platform.",
  },
  {
    question: "Do I get rewarded in tokens or ETH when I refer buyers?",
    answer:
      "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
  },
  {
    question: "How do I get a Referral Code?",
    answer: "You can obtain a referral code by signing up on the platform.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-[#0A0F24] to-[#0A0F1E] px-4 py-16 sm:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto bg-[#111827] text-white rounded-lg p-6 shadow-lg">
        <h2
          className="text-center text-yellow-400 text-3xl font-semibold mb-8 font-machina"
          style={{ fontFamily: "Neue Machina, sans-serif" }}
        >
          FAQs
        </h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-700 py-4 last:border-b-0"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3
                className={`text-lg ${
                  activeIndex === index ? "text-white" : "text-white"
                } font-medium`}
              >
                {faq.question}
              </h3>
              <span
                className={`text-2xl transition-transform ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                {activeIndex === index ? (
                  <img src={chevronDown} alt="Minus" className="w-6 h-6" />
                ) : (
                  <img src={plusIcon} alt="Plus" className="w-6 h-6" />
                )}
              </span>
            </div>
            {activeIndex === index && (
              <p className="text-gray-400 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
