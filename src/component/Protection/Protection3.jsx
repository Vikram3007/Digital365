import React from 'react'

const Protection3 = () => {
  return (
    <>
      {/* Intro Section */}
      <div className="bg-gray-50 py-16 px-6 md:px-20 text-center space-y-6">
        <p className="text-lg md:text-2xl font-lora text-gray-800">
          <span className='md:font-bold'>Digital.³⁶⁵™</span> is the perfect CRM for:
        </p>
        <p className="text-md md:text-lg font-semibold text-gray-600 max-w-3xl mx-auto">
          Protection advisers seeking an intuitive interface, Mortgage advisers exploring the protection arena, 
          or those wanting an all-in-one solution.
        </p>
        <button className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-blue-500 transition">
          Book a demo
        </button>
      </div>

      {/* YouTube Video */}
      <div className="mt-6 flex justify-center px-6 md:px-20">
        <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.youtube.com/embed/XaGOsx9kSJw?si=j0p9dU5vUj7WC_3z"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Testimonial Heading */}
      <div className="flex justify-center items-center py-8">
        <p className="font-bold text-sm md:text-base italic tracking-widest text-gray-500">
          TESTIMONIAL
        </p>
      </div>
      
      {/* Testimonial Card */}
      <div className="flex justify-center px-6 md:px-20 pb-16">
        <div className="w-full max-w-3xl rounded-xl p-6 md:p-10 text-center flex flex-col items-center gap-4 shadow-lg hover:shadow-xl transition">
          <p className="text-sm md:text-lg text-gray-700 leading-relaxed italic">
            “We have a number of advisers within Pure Protect that all required
            on-boarding at the same time. Smartr365 provided fantastic training
            and support to our team. We had expected there to be a significant
            time impact to the business in learning and implementing a new
            system, however due to the ease of the system and support we have
            received, the impact has been minimal.”
          </p>

          <p className="italic font-medium text-gray-800">
            – Alan McConville, Adviser at Pure Protect Ltd
          </p>

          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-blue-700 transition mt-4">
            Book a demo
          </button>
        </div>
      </div>
    </>
  )
}

export default Protection3
