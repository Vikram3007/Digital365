import React from 'react'

const Homebuyer5 = () => {

  const items = [
    {
      title: "Grow your business",
      text: "with marketing asset creation software, QR codes and smart links.",
      img: "/Homebuyer10.svg",
    },
    {
      title: "Gather vital customer details,",
      text: "ensure a seamless Fact Find process and establish clear engagement guidelines",
    },
    {
      title: "Enhance lead quality",
      text: "through smart data capture. See Homebuyer App & Portal.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <div className='flex justify-center items-center py-20 text-2xl font-bold'>
        <p className='font-lora'>
          Attract an audience, build trust and capture vital information using the  <br />
          <span className='flex justify-center font-bold font-roboto text-center'>
            Marketing Hub
          </span>
        </p>
      </div>

      {/* Features Section */}
      <div className="space-y-16 md:space-y-32 mt-8 md:mt-24 px-4 md:px-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          
          {/* Left: Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={items[0].img}
              alt={items[0].title || "Feature Image"}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg"
            />
          </div>

          {/* Right: Features List */}
          <div className="md:w-1/2 flex flex-col space-y-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="p-4 border-b border-gray-200 last:border-b-1 hover:bg-gray-50 transition rounded-md"
              >
                <p className="text-sm md:text-base text-black font-roboto leading-relaxed">
                  <span className="font-semibold">{item.title}</span> {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Testimonial Section */}
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

export default Homebuyer5
