import React from 'react';

const Administration1 = () => {
  return (
    <>
      <section className="bg-blue-600 py-10 md:py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 my-20">
          
          {/* Left side: Text */}
          <div className="flex-1 space-y-4 text-center md:text-left text-white">
            <p className="font-lora text-sm md:text-lg tracking-wide uppercase">
              STAY IN CONTROL
            </p>
            <h2 className="font-roboto text-2xl md:text-4xl font-bold">
              Administration
            </h2>
            <p className="font-medium text-sm md:text-md leading-relaxed">
              Make administration easy with integrated communication and follow up, document management and case processing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Administration1;
