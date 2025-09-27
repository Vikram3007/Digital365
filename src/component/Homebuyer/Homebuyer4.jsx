import React, { useState } from "react";

const Homebuyer4 = () => {
  const items2 = [
    {
      title: "Share",
      text: "sourced mortgage product options within the portal.",
      img: "/Homebuyer8.svg",
    },
    {
      title: "Effortlessly submit and store documents ",
      text: "Effortlessly submit and store documents securely with ISO-certified protection.",
      img: "/Homebuyer9.svg",
    },
  ];

  const [activeIndex2, setActiveIndex2] = useState(0);

  return (
    <div className="space-y-20 md:space-y-32 px-6 md:px-20">
      {/* Section */}
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 mt-20 md:mt-32">
        {/* Content on left */}
        <div className="flex flex-col space-y-4 md:w-1/2 text-center md:text-left order-1">
          {items2.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex2(index)}
              className={`p-4 cursor-pointer rounded-lg border-l-4 transition-all duration-300 transition-colors ${
                activeIndex2 === index
                  ? "border-blue-500 bg-blue-50"
                  : "border-transparent hover:bg-gray-100"
              }`}
            >
              <h3
                className={`text-lg md:text-xl ${
                  activeIndex2 === index
                    ? "text-blue-700 font-bold font-roboto"
                    : "text-gray-800"
                }`}
              >
                {item.title}
              </h3>
              <p className="text-sm md:text-base font-lora">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Image on right */}
        <div className="md:w-1/2 flex justify-center order-2">
          <img
            src={items2[activeIndex2].img}
            alt={items2[activeIndex2].title}
            className="w-72 md:w-full max-w-md h-auto rounded-lg shadow-lg transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Homebuyer4;
