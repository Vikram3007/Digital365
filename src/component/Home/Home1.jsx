import React from "react";
import Home2 from "./Home2";



const Home1 = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative min-h-screen bg-blue-500 bg-cover bg-center flex flex-col justify-center"
        style={{ backgroundImage: "url('/home1.svg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between h-full px-6 md:px-12 lg:px-20 py-10 md:py-0">
          {/* Left Side - Text */}
          <div className="flex-1 text-center md:text-left mt-8 md:mt-0">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold font-lora max-w-xl mx-auto md:mx-0 leading-snug">
              Join the most extensive mortgage & protection platform in the UK
            </h1>
          </div>

          {/* Right Side - GIF */}
          <div className="flex-1 flex justify-center mb-6 md:mb-0">
            <img
              src="/homegif1.gif"
              alt="Mortgage Platform"
              className="w-[250px] sm:w-[320px] md:w-[400px] lg:w-[480px] object-contain"
            />
          </div>
        </div>

       
        {/* Home2 absolute inside Home1 */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[500px] w-full px-4 z-20">
          <Home2 />
        </div>
      </div>

      {/* Space for Home2 overlap */}
      <div className="h-[250px] sm:h-[280px] md:h-[300px] "></div>

      {/* Next Section */}
    
    </>
  );
};

export default Home1;
