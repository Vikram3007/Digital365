import React from "react";

const Home2 = () => {
  return (
    <>
    <section className="bg-blue-50 md:bg-blue-600 py-10 mx-5 md:mx-20 mb-20 md:-mt-[2%] p-5 md:py-16 rounded-xl shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Right Content */}
        <div className="flex-1 text-center mx-2 md:mx-5 md:text-left px-4 md:px-0">
          <p className="text-blue-600 md:text-blue-50 font-medium mb-2">
            Advise quickly and effectively
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900 md:text-white">
            Mortgages
          </h2>
          <p className="text-gray-700 md:text-gray-200 mb-6">
            Streamline case workflows, submit mortgages seamlessly, and analyse performance 
            to drive growth with integrated tools. Enhance visibility, save time, cross-sell 
            protection, and track crucial details effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 md:bg-white text-white md:text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 md:hover:bg-blue-100 transition">
              Learn more
            </button>
            <button className="border border-blue-600 bg-white md:bg-blue-900 text-blue-600 md:text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-100 md:hover:bg-blue-700 transition">
              Book a demo
            </button>
          </div>
        </div>

        {/* Left Section with background + gif */}
        <div
          className="flex-1 relative flex items-center justify-center  md:p-10"
          style={{
            backgroundImage: "url('/home2.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src="/homegif2.gif"
            alt="Workflow Animation"
            className="w-3/4 md:w-1/2 h-auto object-contain relative z-10"
          />
        </div>

      </div>
    </section>


     <section className="bg-blue-50 md:bg-blue-600 py-10 mx-6 md:mx-20 mb-20 md:-mb-[5%]    md:py-16 rounded-xl shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Content */}
         <div
          className="flex-1 relative flex items-center justify-center p-6 md:p-0"
          style={{
            backgroundImage: "url('/home3.svg')", // your new svg
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src="/homegif3.gif" // your new gif
            alt="Protection Workflow"
            className="w-3/4 md:w-1/2 h-auto object-contain relative z-10"
          />
        </div>


        {/* Right Section with background + gif */}
       
         <div className="flex-1 text-center mx-2 md:mx-5 md:text-left px-4 md:px-0">
          <p className="text-blue-600 md:text-blue-50 font-medium mb-2">
            Digitise your protection admin
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900 md:text-white">
            Protection
          </h2>
          <p className="text-gray-700 md:text-gray-200 mb-6">
            Simplify client interactions with intuitive demands and needs capture, 
            efficient joint applications, and integrated quotes. Allows advisers 
            to focus on nurturing client relationships and providing tailored 
            protection solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 md:bg-white text-white md:text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 md:hover:bg-blue-100 transition">
              Learn more
            </button>
            <button className="border border-blue-600 bg-white md:bg-blue-900 text-blue-600 md:text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-100 md:hover:bg-blue-700 transition">
              Book a demo
            </button>
          </div>
        </div>


      </div>
    </section>
    </>
  );
};

export default Home2;
