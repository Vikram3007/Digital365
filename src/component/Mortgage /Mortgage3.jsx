import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Mortgage3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const logosRow1 = ["mort6.svg", "mort7.svg", "mort8.svg", "mort9.svg"];
  const logosRow2 = ["mart10.svg", "mart11.svg", "mart12.svg", "mart13.svg"];

  return (
    <>
      {/* Section 1 */}
      <section className="py-12 px-5 md:px-20">
        <div className="max-w-5xl mx-auto text-center md:text-left space-y-6">
          <p className="text-xl md:text-3xl font-lora font-bold text-gray-800">
            <span>Switching your CRM </span>
            is hassle-free with <span>Smartr365</span>
          </p>

          <p className="text-gray-700 font-semibold text-base md:text-2xl leading-relaxed">
            Our integrated tools ensure smooth data migration.{" "}
            <span className="block md:ml-10">
              Onboarding, data migration, and training are all included in one
              flat fee.
            </span>
          </p>

          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-blue-700 transition mx-auto md:mx-0 block">
            Book a demo
          </button>
        </div>
      </section>

      {/* Section 2 */}
      <div className="py-12 px-5 bg-blue-50 md:px-20 space-y-8">
        <div className="max-w-4xl mx-auto text-center md:text-left space-y-4">
          <p className="text-xl md:text-2xl font-lora text-gray-800">
            <span className="font-roboto text-2xl md:text-3xl">Trusted by 4,000+</span>{" "}
            of the most forward-thinking mortgage brokers
          </p>
          <p className="text-base md:text-xl text-gray-700">
            and partnered with major mortgage clubs and networks.
          </p>
        </div>

        {/* Logo Grid */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-9 md:gap-12 place-items-center">
            {logosRow1.map((img, idx) => (
              <div
                key={idx}
                data-aos="fade-right"
                className="w-32 h-24 sm:w-40 sm:h-28 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition"
              >
                <img src={`/${img}`} alt={`Logo ${idx + 1}`} className="max-w-full max-h-full" />
              </div>
            ))}

            {logosRow2.map((img, idx) => (
              <div
                key={idx}
                data-aos="fade-left"
                className="w-32 h-24 sm:w-40 sm:h-28 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition"
              >
                <img src={`/${img}`} alt={`Logo ${idx + 5}`} className="max-w-full max-h-full" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Mortgage3;
