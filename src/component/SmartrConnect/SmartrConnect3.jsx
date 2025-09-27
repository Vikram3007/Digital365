import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SmartrConnect3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const logosRow1 = [
    "scslide1.svg",
    "scslide2.svg",
    "scslide3.jpg",
    "scslide4.jpg",
    "scslide5.svg",
    "scslide11.jpg",
  ];

  const logosRow2 = [
    "scslide7.svg",
    "scslide8.svg",
    "scslide9.svg",
    "scslide10.svg",
    "scslide11.jpg",
    "scslide6.svg",
  ];

  return (
    <div className="py-12 px-5 md:px-20 bg-blue-50">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center md:text-left mb-8">
        <p className="text-xl md:text-2xl font-lora text-gray-800">
          <span className="font-extrabold">Trusted</span> by the majority of UK Lenders
        </p>
      </div>

      {/* Logo Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 md:gap-9 place-items-center">
        {logosRow1.map((img, idx) => (
          <div
            key={`row1-${idx}`}
            data-aos="fade-right"
            className="w-28 h-20 sm:w-36 sm:h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition"
          >
            <img
              src={`/${img}`}
              alt={`Trusted Logo ${idx + 1}`}
              className="max-h-12 sm:max-h-14 object-contain"
            />
          </div>
        ))}

        {logosRow2.map((img, idx) => (
          <div
            key={`row2-${idx}`}
            data-aos="fade-left"
            className="w-28 h-20 sm:w-36 sm:h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition"
          >
            <img
              src={`/${img}`}
              alt={`Trusted Logo ${idx + 7}`}
              className="max-h-12 sm:max-h-14 object-contain"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default SmartrConnect3;
