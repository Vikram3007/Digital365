import React from "react";

const Leads2 = () => {
  const items = [
    {
      text: (
        <>
          Introducers can effortlessly{" "}
          <span className="font-bold text-sm md:text-base">
            create leads on your behalf
          </span>
          , streamlining the lead generation process.
        </>
      ),
      img: "/Leads1.svg",
    },
    {
      title: "Inform introducers",
      text: "Send applications directly to lenders, saving up to 20 minutes per application. Save up to 1 hour with our fully integrated SmartrConnect.",
    },
    {
      title: "Ensure transparency",
      text: "Send applications directly to lenders, saving up to 20 minutes per application. Save up to 1 hour with our fully integrated SmartrConnect.",
    },
  ];

  return (
    <div className="space-y-16 md:space-y-32 mt-8 md:mt-24 px-4 md:px-20">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
        {/* Left: Content */}
        <div className="md:w-1/2 flex flex-col space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-4 border-b border-gray-200 last:border-b-1 hover:bg-gray-50 transition rounded-md"
            >
              <p className="text-sm md:text-base text-black font-roboto leading-relaxed">
                {item.title && (
                  <span className="font-semibold text-lg md:text-xl block mb-1">
                    {item.title}
                  </span>
                )}
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={items[0].img}
            alt={items[0].title || "Leads Image"}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Leads2;
