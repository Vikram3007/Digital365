import React from 'react'

const SmartrConnect1 = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-600 py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20">
          
          {/* Left side: Text */}
          <div className="flex-1 space-y-4 text-center md:text-left text-white">
            <p className="font-lora text-sm md:text-lg tracking-wide uppercase">
              Automated instant mortgage submission
            </p>
            <h2 className="font-roboto text-2xl md:text-4xl font-bold">
              SmartrConnect
            </h2>
            <p className="font-medium text-sm md:text-md leading-relaxed max-w-lg mx-auto md:mx-0">
              Source, submit & process, all at the touch of a button. Save time, improve accuracy and focus on advice.
            </p>

            {/* Image only visible on mobile */}
            <img 
              src="SConnect1.svg" 
              alt="SmartrConnect"  
              className="block w-full max-w-xs md:hidden mx-auto mt-4 rounded-lg"  
            />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <div className="px-6 md:px-20 py-16 flex justify-center">
        <p className="font-lora text-xl md:text-2xl text-center md:text-left leading-relaxed max-w-3xl">
          Our platform <span className="font-extrabold">empowers you</span> 
          to process more applications efficiently,
          <br className="hidden md:block" />
          <span className="block md:ml-10">
            giving you a competitive edge in the mortgage market.
          </span>
        </p>
      </div>
    </>
  )
}

export default SmartrConnect1
