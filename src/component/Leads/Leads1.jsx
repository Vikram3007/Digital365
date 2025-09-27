import React from "react";

const Leads1 = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20">
          
          {/* Left side: Text */}
          <div className="flex-1 space-y-6 text-center md:text-left text-white">
            <p className="font-lora text-sm md:text-base tracking-wide uppercase">
              COLLABORATE WITH CONFIDENCE
            </p>
            <h2 className="font-roboto text-3xl md:text-5xl font-bold">
              Leads &amp; Business Contacts
            </h2>
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
          <span className="font-extrabold">The Introducer Portal</span> offers a secure platform for your referral networks,
          <br className="hidden md:block" />
          <span className="block md:ml-56">
            ensuring data protection and trust.
          </span>
        </p>
      </div>
    </>
  );
};

export default Leads1;
