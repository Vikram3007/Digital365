import React from "react";
import { Link } from "react-router-dom";

const Home2 = () => {
  return (
    <>
    <div
      className="max-w-6xl min-h-[550px] mx-auto my-12 p-8 md:p-12 rounded-2xl text-white 
      bg-[url('/home2.svg')] bg-blue-600 bg-cover bg-center flex flex-col md:flex-row items-center gap-10"
    >
      {/* Left Content */}
      <div className="flex-1">
        <h2 className="relative text-2xl font-roboto mt-10 md:mt-0 md:text-2xl mb-4">
          <p className="font-lora text-lg uppercase">Advise quickly and effectively</p>
          Mortgages
        </h2>
        <p className="relative text-sm md:text-base leading-relaxed font-lora w-[40ch] line-clamp-6">
          Streamline case workflows, submit mortgages seamlessly, and analyse
          performance to drive growth with integrated tools. Enhance visibility,
          save time, cross-sell protection, and track crucial details effortlessly.
        </p>

        {/* Buttons */}
        <div className="relative mt-6 flex flex-col sm:flex-row gap-4">
          <Link
            to="/learn-more"
            className="px-6 py-3 font-roboto rounded-lg font-semibold bg-white text-blue-600 hover:opacity-85 transition text-center"
          >
            Learn more
          </Link>
          <Link
            to="/book-demo"
            className="px-6 py-3 rounded-lg font-roboto font-semibold bg-black text-white hover:opacity-85 transition text-center"
          >
            Book a demo
          </Link>
        </div>
      </div>

      {/* Right GIF */}
      <div className="flex-1 flex justify-center">
        <img src="homegif2.gif" alt="Mortgage Demo" className="w-full max-w-md rounded-lg" />
      </div>
    </div>


    </>
  );
};

export default Home2;
