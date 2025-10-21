import React from "react";
import Home6 from "./Home6";

const Home5 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full gap-6 p-5 md:p-10">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-start rounded-3xl bg-gray-100 text-left p-8 md:p-10 md:w-1/2 shadow-lg">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-800 font-lora font-semibold">
            Integrated lender submission
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-roboto text-gray-900 mt-2">
            SmartrConnect
          </h2>
          <p className="text-gray-800 font-lora font-medium mt-4 leading-relaxed text-sm sm:text-base">
            Submit & process all at the touch of a button.
          </p>
          <button className="mt-6 px-5 py-2 text-sm sm:text-base font-roboto font-semibold bg-blue-600 text-white hover:bg-blue-700 rounded-lg shadow transition-all duration-300">
            Learn more
          </button>
          <img
            src="/home5.svg"
            alt="Compliance illustration"
            className="mt-8 w-full max-w-xs sm:max-w-sm mx-auto"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center items-start rounded-3xl bg-blue-600 bg-[url('/home2.svg')] bg-cover bg-center text-left p-8 md:p-10 md:w-1/2 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-800/50 rounded-3xl"></div>
          <div className="relative z-10">
            <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-100 font-lora font-semibold">
              Engaging & nurturing
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold font-roboto text-white mt-2">
              SmartrRetain
            </h2>
            <p className="text-gray-100 font-lora font-medium mt-4 leading-relaxed text-sm sm:text-base">
              Stay connected. Send case updates, property valuations and
              remortgage reminders automatically.
            </p>
            <button className="mt-6 px-5 py-2 text-sm sm:text-base font-roboto font-semibold bg-white text-blue-700 hover:bg-blue-800 hover:text-white rounded-lg shadow transition-all duration-300">
              Learn more
            </button>
            <img
              src="/home6.svg"
              alt="Administration illustration"
              className="mt-8 w-full max-w-xs sm:max-w-sm mx-auto"
            />
          </div>
        </div>
      </div>
      <Home6 />
    </>
  );
};

export default Home5;
