import React from "react";

const Protection2 = () => {
  const items = [
    {
      title: "Zero in on your client’s demands & needs",
      text: "With our Simplified FactFind.",
      img: "/port1.svg",
    },
    {
      title: "Streamline advice",
      text: "For households by capturing demands and needs for joint applicants simultaneously.",
      
    },
    {
      title: "Say goodbye to redundant data entry;",
      text: "Input our information once, and watch it populate both Solution Builder and Smartr365 seamlessly.",
     
    },
  ];

  const items2 = [
    {
      title: "Automate efficient email communication",
      text: "Stay in touch and send information requests with the click of a button. Track your tasks within each case.",
      img: "/port2.svg",
    },
    {
      title: "Receive automatic client notifications",
      text: "Key stages during the buying process.",
    },
  ];

  return (
    <div className="space-y-24 md:space-y-32 mt-16 md:mt-24 px-6 md:px-20">
      {/* First Section: Image Left, Content Right */}
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
        <div className="md:w-1/2 flex flex-col space-y-4">
          {items.map((item, idx) => (
            <img
              key={`img1-${idx}`}
              src={item.img}
              className="w-full max-w-md rounded-lg"
            />
          ))}
        </div>

        <div className="md:w-1/2 flex flex-col space-y-4">
          {items.map((item, idx) => (
            <div
              key={`content1-${idx}`}
              className="p-4 rounded-lg border-l-4 border-transparent hover:bg-gray-100 transition"
            >
              <h3 className="text-lg md:text-xl text-gray-800 font-semibold">
                {item.title}
              </h3>
              <p className="text-sm md:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Second Section: Contents Left, Image Right */}
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
        <div className="md:w-1/2 flex flex-col space-y-4">
          {items2.map((item, idx) => (
            <div
              key={`content2-${idx}`}
              className="p-4 rounded-lg border-l-4 border-transparent hover:bg-gray-100 transition"
            >
              <h3 className="text-lg md:text-xl text-gray-800 font-semibold">
                {item.title}
              </h3>
              <p className="text-sm md:text-base">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="md:w-1/2 flex flex-col space-y-4">
          {items2.map((item, idx) => (
            <img
              key={`img2-${idx}`}
              src={item.img}
              className="w-full max-w-md rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Protection2;
