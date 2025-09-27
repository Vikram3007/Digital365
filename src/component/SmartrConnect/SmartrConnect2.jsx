import React from "react";

const SmartrConnect2 = () => {
  const items = [
    {
      title: "Capture FactFind data once:",
      text: " that can be shared with lenders and avoid re-keying in different portals.",
      img: "/SConnect2 .svg",
    },
    {
      title: "Seamless DIPs and FMAs:",
      text: " Send applications directly to lenders, saving up to 20 minutes per application. Save up to 1 hour with our fully integrated SmartrConnect.",
    },
  ];

  return (
    <>
      <div className="space-y-24 md:space-y-32 mt-16 md:mt-24 px-6 md:px-20">
        {/* Section: Image Left, Content Right */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
          
          {/* Left: Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={items[0].img}
              alt={items[0].title}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="md:w-1/2 flex flex-col space-y-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="p-4 border-b last:border-b-1 rounded-lg border-l-4 border-transparent border-b-gray-600 hover:border-l-blue-600  transition"
              >
                <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                  <span className="font-semibold text-lg md:text-xl">{item.title}</span>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* YouTube Video */}
      <div className="mt-12 flex justify-center px-6 md:px-20">
        <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/uyRQ9Whqziw?si=vPNyxOYXXvfbjsaE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default SmartrConnect2;
