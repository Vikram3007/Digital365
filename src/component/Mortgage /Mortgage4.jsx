import React from "react";

const Mortgage4 = () => {
  return (
    <>
      {/* Voice Section */}
      <div className="py-8 flex justify-center items-center px-4">
        <p className="italic text-center md:text-left max-w-2xl md:max-w-4xl text-gray-700 leading-relaxed">
          <span className="font-roboto font-semibold text-black">
            Your voice shapes our innovation.
          </span>{" "}
          Share suggestions through User Voice. <br />
          <span className="block mt-2">
            20% of development efforts focus on implementing partner firms’ feedback.
          </span>
        </p>
      </div>

      {/* Testimonial Heading */}
      <div className="flex justify-center items-center py-8">
        <p className="font-bold text-sm md:text-base italic tracking-widest text-gray-500">
          TESTIMONIAL
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="flex justify-center px-4 pb-16">
        <div className="rounded-xl p-6 md:p-10 max-w-3xl text-center flex flex-col space-y-4 items-center">
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

          {/* Button */}
          <button className="bg-black text-white px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-blue-700 transition">
            Book a demo
          </button>
        </div>
      </div>
    </>
  );
};

export default Mortgage4;
