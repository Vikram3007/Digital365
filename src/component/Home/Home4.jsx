import React from "react";
import Home5 from "./Home5";

const Home4 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full gap-6 p-5 md:p-10">
        {/* Right Side */}
        <div className="flex flex-col rounded-3xl justify-center items-start bg-blue-600 bg-[url('/home2.svg')] bg-cover bg-center text-left p-8 md:p-10 md:w-1/2 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-700/40 rounded-3xl"></div>
          <div className="relative z-10">
            <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-50 font-lora font-semibold">
              Stay in control
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold font-roboto text-gray-50 mt-2">
              Administration
            </h2>
            <p className="text-gray-50 font-roboto font-medium mt-4 leading-relaxed text-sm sm:text-base">
              Make administration easy with integrated communication, follow up,
              document management, and case processing.
            </p>
            <button className="mt-6 px-5 py-2 text-sm sm:text-base font-roboto font-semibold bg-white text-blue-600 hover:bg-blue-700 hover:text-white rounded-lg shadow transition-all duration-300">
              Learn more
            </button>
            <img
              src="/home3.svg"
              alt="Administration illustration"
              className="mt-8 w-full max-w-xs sm:max-w-sm mx-auto"
            />
          </div>
        </div>

        {/* Left Side */}
        <div className="flex flex-col rounded-3xl justify-center items-start bg-gray-100 text-left p-8 md:p-10 md:w-1/2 shadow-lg">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-800 font-lora font-semibold">
            Review, analyse & grow
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-roboto text-gray-800 mt-2">
            Compliance
          </h2>
          <p className="text-gray-800 font-lora font-medium mt-4 leading-relaxed text-sm sm:text-base">
            Measure the things that matter. Review sales performance through to
            compliance at the click of a button.
          </p>
          <img
            src="/home4.svg"
            alt="Compliance illustration"
            className="mt-8 w-full max-w-xs sm:max-w-sm mx-auto"
          />
        </div>
      </div>
      <Home5 />
    </>
  );
};

export default Home4;
