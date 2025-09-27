import React, { useState } from "react";

const Homebuyer2 = () => {
  const items = [
    {
      title: "Save time and connect ",
      text: "with homebuyers instantly, with the simple scan of a generated QR code, text or email.",
      img: "/HomeBuyer2.svg",
    },
    {
      title: "Easily provide",
      text: "Easily provide essential information through the intuitive Fact Find for tailored advice.",
      img: "/HomeBuyer3.svg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-20 md:space-y-32 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 mt-20 md:mt-32">
        {/* Image on left */}
        <div className="md:w-1/2 flex justify-center order-1 md:order-1">
          <img
            src={items[activeIndex].img}
            alt={items[activeIndex].title}
            className="w-72 md:w-full max-w-md h-auto rounded-lg shadow-lg transition-all duration-500"
          />
        </div>

        {/* Content on right */}
        <div className="flex flex-col space-y-4 md:w-1/2 order-2 md:order-2 text-center md:text-left">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`p-4 cursor-pointer rounded-lg transition-all duration-300 border-l-4 ${
                activeIndex === index
                  ? "border-blue-500 bg-blue-50"
                  : "border-transparent bg-white hover:bg-gray-100"
              }`}
            >
              <h3
                className={`text-lg md:text-xl ${
                  activeIndex === index
                    ? "text-blue-700 font-roboto"
                    : "text-gray-800"
                }`}
              >
                {item.title}
              </h3>
              <p className="text-sm md:text-base font-lora">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homebuyer2;
