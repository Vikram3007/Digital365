import React from "react";
import { FaHeadset, FaBullhorn } from "react-icons/fa6";

const Contacts3 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Contact Info */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Support */}
        <div className="flex items-start gap-4 bg-gray-100 p-5 rounded-xl shadow-sm">
          <FaHeadset className="text-6xl text-blue-600 mt-1" />
          <div>
            <p className="text-lg font-semibold">Need help?</p>
            <p className="text-gray-700 text-sm">
              You can raise a Support ticket from the login page or by using the
              Automated ticketing system whilst logged in.
            </p>
          </div>
        </div>

        {/* PR & Media */}
        <div className="flex items-start gap-4 bg-gray-100 p-5 rounded-xl shadow-sm">
          <FaBullhorn className="text-3xl text-blue-600 mt-1" />
          <div>
            <p className="text-lg font-semibold">
              PR & Media & Investor Relations
            </p>
            <a
              href="mailto:pr@smartr365.com"
              className="text-blue-600 hover:underline text-sm"
            >
              pr@smartr365.com
            </a>
          </div>
        </div>
      </div>

      {/* Office Hours */}
      <div className="mt-8 bg-white  rounded-xl p-6">
        <p className="font-bold mx-15 font-roboto text-gray-900 mb-3">
          Please note that we are closed on weekends. Our opening hours are as
          follows:
        </p>
          </div>
        <div className="grid sm:grid-row-2 mx-70 font-roboto gap-2 text-gray-700 text-sm">
          <p><span className="font-bold">Mon:</span> 9:00am - 6:00pm</p>
          <p><span className="font-bold">Tue:</span>9:00am - 6:00pm</p>
          <p><span className="font-bold">Wed:</span>9:00am - 6:00pm</p>
          <p><span className="font-bold">Thu:</span>9:00am - 5:30pm</p> 
          <p><span className="font-bold">Fri:</span>9:00am - 5:00pm</p>
        </div>
    
    </div>
  );
};

export default Contacts3;
