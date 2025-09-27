import React from 'react'

const Protection1 = () => {
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
            <h2 className="font-roboto text-2xl md:text-4xl font-bold mb-2">
              Protection
            </h2>
            <p className="font-medium text-sm md:text-md leading-relaxed max-w-lg mx-auto md:mx-0">
              Simplify client interactions with intuitive demands and needs capture, efficient joint applications, and integrated quotes.
            </p>
          </div>

          {/* Right side: Image */}
          <div className="flex-1 flex justify-center mt-6 md:mt-0">
            <img
              src="homegif1.gif"
              alt="Protection CRM"
              className="max-w-xs md:max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <div className='text-2xl flex justify-center items-center py-16 px-6 md:px-20'>
        <p className='font-lora text-center md:text-left'>
          Our <span className='font-extrabold'>Protection Experience</span> mirrors real-world client interactions.
        </p>
      </div>
    </>
  )
}

export default Protection1
