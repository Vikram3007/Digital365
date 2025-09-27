import React, { useState } from "react";

const Mortgage2 = () => {
  const items = [
    {
      title: "Monitor cases on the move",
      text: "With our innovative workflow, you can drag and drop and filter on cases.",
      img: "/mort1.svg",
    },
    {
      title: "Share client information and documents",
      text: "Share client information and documents easily via our secure online portal.",
      img: "/mort2.svg",
    },
    {
      title: "Submit and store time-stamped documents",
      text: "Securely with ISO-certified protection.",
      img: "/mort-3.svg",
    },
  ];

  const items2 = [
    {
      title: "Automate efficient email communication",
      text: "Stay in touch and send information requests with the click of a button. Track your tasks within each case.",
      img: "/mort4.svg",
    },
    {
      title: "Receive automatic client notifications",
      text: "Key stages during the buying process.",
      img: "/mort5.svg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);

  return (
    <div className="space-y-20 md:space-y-32 px-6 md:px-20">
      
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 mt-20 md:mt-32">
        {/* Content */}
        <div className="flex flex-col space-y-4 md:w-1/2 order-1 text-center md:text-left">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`p-4 cursor-pointer rounded-lg border-l-4 transition-all duration-300 transition-colors ${
                activeIndex === index
                  ? "border-blue-500 bg-blue-50"
                  : "border-transparent hover:bg-gray-100"
              }`}
            >
              <h3
                className={`text-lg md:text-xl ${
                  activeIndex === index ? "text-blue-700 font-roboto" : "text-gray-800"
                }`}
              >
                {item.title}
              </h3>
              <p className="text-sm md:text-base font-lora">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center order-2">
          <img
            src={items[activeIndex].img}
            alt={items[activeIndex].title}
            className="w-72 md:w-full max-w-md h-auto rounded-lg shadow-lg transition-all duration-500"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row-reverse items-start gap-8 md:gap-16 mt-20 md:mt-32">
        {/* Content */}
        <div className="flex flex-col space-y-4 md:w-1/2 order-1 text-center md:text-left">
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
                  activeIndex2 === index ? "text-blue-700 font-bold font-roboto"  : "text-gray-800"
                }`}
              >
                {item.title}
              </h3>
              <p className="text-sm md:text-base font-lora">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Image */}
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

export default Mortgage2;
