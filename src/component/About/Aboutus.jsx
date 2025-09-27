import React from 'react'
import Footer from '../Footer'
const Aboutus = () => {
  return (
    <>
          {/* Hero Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20">
          
          {/* Left side: Text */}
          <div className="flex-1 space-y-6 text-center md:text-left text-white">
            <p className="font-lora text-sm md:text-base tracking-wide uppercase">
           Digital.³⁶⁵™
            </p>
            <h2 className="font-roboto text-3xl md:text-5xl font-bold">
              About
            </h2>
            <p className="font-medium text-sm md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
           At Digital365, we believe in the power of innovation to 
           transform the mortgage and protection journey for brokers.


            </p>
          </div>
        </div>
      </section>
      
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-500">Our Commitment</h1>
      <div className="space-y-4 ">
        <p className='font-lora'> 
          <span className="font-semibold font-roboto">Customer-Obsessed Approach:</span> Our clients are at the heart of everything we do. We are passionate about delighting our customers.
        </p>
        <p className='font-lora'>
          <span className="font-semibold font-roboto">Innovation:</span> We are committed to pushing the boundaries of what's possible in the mortgage industry. Through continuous innovation, we strive to provide our clients with smart, efficient, and user-friendly solutions that simplify the mortgage journey.
        </p>
      </div>
    </div>

      <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-500">Why Digital365</h1>
      <div className="space-y-4 ">
        <p className='font-lora'> 
          <span className="font-semibold font-roboto">Technology at the Core: </span> 
        We leverage state-of-the-art technology to streamline and enhance the mortgage experience, making it faster, smarter, and more accessible for everyone.

        </p>
        <p className='font-lora'>
          <span className="font-semibold font-roboto">Expertise You Can Trust: </span>
      Our team is dedicated to providing guidance and support at every step of the journey. You can trust us to navigate the complexities and ensure a smooth process.

        </p>

          <p className='font-lora'>
          <span className="font-semibold font-roboto">Future-Ready Solutions:</span>
    
 The mortgage landscape is constantly evolving, and so are we.
  By staying ahead of the curve, we offer future-ready solutions that 
  anticipate and adapt to the changing needs of our clients.

        </p>
      </div>
    </div>
<Footer />
    </>
  )
}

export default Aboutus