import React from 'react';
import { FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-22">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Section 1: Brand Info */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <h1 className="text-xl font-bold text-white">Digital.³⁶⁵™</h1>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Digital.³⁶⁵™ is an end-to-end mortgage and protection platform connecting advisors, estate agents and home buyers.
            </p>
            <button className="mt-4 w-40 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition-colors">
              Book a demo
            </button>
          </div>

          {/* Section 2: Links */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <ul className="space-y-2 text-sm">
                <li>Mortgages</li>
                <li>Protection</li>
                <li>Administration</li>
                <li>SmartConnect</li>
                <li>Leads & Business Contacts</li>
                <li>HomeBuyer</li>
              </ul>
            </div>

<div className='ml-[180px]'>
  <h3 className="text-lg font-semibold text-white mb-3">About</h3>
  <p className="text-white text-sm mb-2">Contact</p>
  <div className="flex space-x-3">
    {/* LinkedIn */}
    <div className="w-12 h-12 p-3 flex items-center justify-center rounded-full bg-white">
      <FaLinkedin className='text-blue-700 w-6 h-6' />
    </div>

    {/* YouTube */}
    <div className="w-12 h-12 p-3 flex items-center justify-center rounded-full bg-white">
      <FaYoutube className='text-red-600 w-6 h-6' />
    </div>
  </div>
</div>







          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm">
          <p>Terms of service | Cookie Policy | Privacy Policy | D&I Statement</p>
          <p>© 2023 Smart365™ Finance Limited - Company Number 09497227</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
