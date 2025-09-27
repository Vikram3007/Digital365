import React from 'react'

const SmartrConnect4 = () => {
  return (
    <>
      {/* Testimonial Card */}
      <div className="flex justify-center px-4 md:px-20 py-8">
        <div className="w-full max-w-3xl rounded-xl p-6 md:p-10 text-center flex flex-col items-center gap-4 md:gap-6 shadow-lg hover:shadow-xl transition">
          
          {/* Testimonial Heading */}
          <p className="font-lora text-sm md:text-base italic tracking-widest mb-2">
            TESTIMONIAL
          </p>    

          {/* Testimonial Text */}
          <p className="text-sm md:text-lg text-gray-700 leading-relaxed italic">
            “It saves me so much time, especially if I’ve got 6–8 appointments on the same day. Also, if the application is declined by one lender, I can switch to another rather quickly, without duplicating the effort of typing all the information.”
          </p>

          {/* Author */}
          <p className="italic font-medium text-gray-800 mt-2">
            – Alan McConville, Adviser at Pure Protect Ltd
          </p>

          {/* Button */}
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-blue-700 transition mt-4">
            Book a demo
          </button>
        </div>
      </div>
    </>
  )
}

export default SmartrConnect4
