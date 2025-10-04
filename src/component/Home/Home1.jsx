import React from 'react'
import Home2 from './Home2'

const Home1 = () => {
  return (
    <>
      <div 
        className="h-screen bg-blue-500 bg-cover bg-center relative" 
        style={{ backgroundImage: "url('/home1.svg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* flex container */}
        <div className="relative z-10 flex items-center justify-between h-full px-10">
          
          {/* Left Side - Text */}
          <div className="flex-1 mb-28 mx-10">
            <h1 className="text-white text-5xl font-semibold font-lora max-w-xl ">
              Join the most extensive mortgage & protection platform in the UK
            </h1>
          </div>

          {/* Right Side - GIF */}
          <div className="flex-1 flex justify-center">
            <img 
              src="/homegif1.gif" 
              alt="Mortgage Platform" 
              className="max-w-md w-full"
            />
          </div>
        </div>

        {/* Home2 absolute inside Home1 */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-520px] w-full px-4 z-20">
          <Home2 />
        </div>
      </div>

      {/* space for Home2 overlap */}
      <div className="h-[250px]"></div>
    </>
  )
}

export default Home1
