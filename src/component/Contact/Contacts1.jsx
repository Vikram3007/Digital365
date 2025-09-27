import React from 'react'

const Contacts1 = () => {
  return (
   <>
        {/* Hero Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20">
          <div className="flex-1 space-y-6 text-center md:text-left text-white">
            <p className="font-serif text-sm md:text-base tracking-wide uppercase">Always by your side</p>
            <h2 className="font-sans text-3xl md:text-5xl font-bold">Contact Us</h2>
            <p className="font-medium text-sm  font-roboto md:text-lg leading-relaxed max-w-xl mx-auto md:mx-48">
              The Digital365 team would love to hear from you!
            </p>
          </div>
        </div>
      </section>

   </>
  )
}

export default Contacts1