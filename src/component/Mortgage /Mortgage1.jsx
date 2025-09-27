import React from 'react'

const Mortgage1 = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-600 py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 px-6 md:px-20">
          
          {/* Left side: Text */}
          <div className="flex-1 space-y-4 text-center md:text-left text-white">
            <p className="font-lora text-sm md:text-lg tracking-wide uppercase">
              ADVISE QUICKLY AND EFFECTIVELY
            </p>
            <h2 className="font-roboto text-2xl md:text-4xl font-bold">
              Mortgage CRM
            </h2>
            <p className="font-medium text-sm md:text-md leading-relaxed max-w-lg mx-auto md:mx-0">
              Streamline case workflows, submit mortgages seamlessly, and analyse 
              performance to drive growth with integrated tools. Enhance visibility, 
              save time, cross-sell protection, and track crucial details effortlessly.
            </p>
          </div>

          {/* Right side: Image */}
          <div className="flex-1 flex justify-center mt-6 md:mt-0">
            <img
              src="homegif1.gif"
              alt="Mortgage CRM"
              className="max-w-xs md:max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <div className="space-y-4 px-6 md:px-20 py-8 md:py-16 max-w-7xl mx-auto text-center md:text-left">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight md:ml-0">
          Stay on top of your workflow{" "}
          <span className="font-normal">with a fully integrated suite of software, CRM,</span>
        </p>

        <p className="text-xl md:text-2xl lg:text-3xl font-serif leading-tight md:ml-0">
          app and client/introducer portals.
        </p>
      </div>
    </>
  )
}

export default Mortgage1
