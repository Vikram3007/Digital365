import React from 'react';
import Footer from '../Footer'

const Home6 = () => {
  return (
    <>
      {/* Section 1 */}
      <div
        className="relative bg-blue-600 bg-cover bg-center flex flex-col md:flex-row items-center justify-between h-auto md:h-[50vh] mx-4 md:mx-20 my-10 px-4 md:px-20 py-10 md:py-0"
        style={{ backgroundImage: "url('/home2.svg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

        {/* Left Text */}
        <div className="relative text-white md:w-1/2 w-full space-y-4 z-10 text-center md:text-left">
          <p className="text-sm font-lora uppercase tracking-wider">
            Complete house buying solutions
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold font-roboto">
            Essential Integrations
          </h1>
          <p className="text-base md:text-lg">
            Support your clients through the home buying process with our industry-leading integrations.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-4 justify-center md:justify-start">
            <button className="bg-transparent font-lora text-gray-200 px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Learn more
            </button>
            <button className="bg-black border border-white font-lora text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Book a demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mt-10 md:mt-0 md:w-[350px] w-full flex justify-center z-10">
          <img src="/home7.svg" alt="Home integration illustration" className="max-w-full h-auto" />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t-3 rounded-2xl border-gray-700 my-6 mx-4 md:mx-20" />

      {/* Section 2 */}
      <div className="bg-blue-600 bg-cover bg-center flex flex-col md:flex-row items-center justify-between p-10 md:p-20 mx-4 md:mx-20 my-16">
        {/* Left Text */}
        <div className="text-white md:w-1/2 space-y-4">
          <p className="text-sm uppercase px-3 tracking-wider font-lora font-semibold">
            An easy, digital journey for your buyers
          </p>
          <img
            src="/HomeBuyer1.svg"
            alt="HomeBuyer digital journey illustration"
            className="w-64 md:w-96 h-64 md:h-auto px-3 mx-auto md:mx-0"
          />
          <p className="text-base px-3 font-lora font-semibold md:text-lg">
            Homebuyer from Smartr365 delivers a unified digital journey for your buyers. They can verify their ID, download credit reports and bank statements, and complete their Fact Find – all from their phone. Save time and effort for you and your clients.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="bg-transparent border border-white font-lora px-6 py-1 rounded-2xl font-semibold hover:bg-gray-800 transition">
              Learn more
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 bg-blue-800 md:mt-0 md:w-[500px] md:h-[700px]  flex justify-center">
          <img src="/homegif1.gif" alt="Animated HomeBuyer workflow" className="max-w-full h-auto" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home6;
