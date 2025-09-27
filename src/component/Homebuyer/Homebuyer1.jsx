import React from 'react'

const Homebuyer1 = () => {
  return (
   <>
      {/* Hero Section */}
      <section className="bg-blue-600 py-13">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20">
          
          {/* Left side: Text */}
          <div className="flex-1 space-y-6 text-center mx-20 md:text-left text-white">
            <p className="font-lora text-sm md:text-base tracking-wide uppercase">
              COLLABORATE WITH CONFIDENCE
            </p>
            <img 
  src="/HomeBuyer1.svg" 
  alt="HomeBuyer Illustration" 
  className="w-64 md:w-96 h-64 md:h-auto mx-auto md:mx-0" 
/>

            
            <p className="font-medium text-sm md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Empower your introducers all from within Smartr365. With access to
              the QR code marketing system, even your Introducers can pass on
              more leads.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <div className="px-6 md:px-20 py-16 flex justify-center">
        <p className="font-lora text-lg md:text-2xl text-center md:text-left leading-relaxed max-w-4xl">
          <span className="font-extrabold">The Homebuyer App / Portal</span> is a revolutionary new way to connect and stay
          <br className="hidden md:block" />
          <span className='mx-5'>
      connected with clients. Digital ID&V, house valuations, credit reports, bank
          </span>
          <br className="hidden md:block" />
          <span className='mx-35'>
      statements and journey tracking are all included.
  </span>
        </p>
      </div>
   </>
  )
}

export default Homebuyer1
