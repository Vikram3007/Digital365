import React from 'react';
import Home2 from '../Home/Home2'

const Home1 = () => {
  return (
    <>
      {/* Content Section */}
      <div className="md:absolute w-full md:w-auto top-20 md:top-20 md:left-20 z-10">
        <div className="bg-blue-700 md:bg-transparent px-6 py-4 md:px-0 text-center md:text-left text-white font-bold">
          <h1 className="text-2xl w-88 md:text-3xl ">
            Join the most extensive mortgage & protection platform in the UK
          </h1>
        </div>
      </div>

      {/* Main Section */}
      <div className="md:bg-blue-900 bg-blue-500 flex flex-col items-center text-white">
        {/* Images Section */}
        <div className="flex flex-col-reverse md:flex-row w-full">
          {/* Left Image (shows last on mobile) */}
          <div className="md:h-full md:w-1/2">
            <img
              src="/home1.svg"
              alt="Dashboard Preview"
              className="w-full h-full md:h-96 object-cover"
            />
          </div>
          {/* Right Image (shows first on mobile) */}
          <div className="md:h-full md:w-1/2">
            <img
              src="/homegif1.gif"
              alt="Workflow Animation"
              className="w-full h-auto md:h-96 object-cover"
            />
          </div>
        </div>
      </div>
      <Home2/>
    </>
  );
};

export default Home1;
