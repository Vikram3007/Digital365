import React from 'react';
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
            <Link 
              to="/book-demo" 
              className="mt-4 w-40 px-5 py-3 mx-4 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition-colors"
            >
              Book a demo
            </Link>
          </div>

          {/* Section 2: Links */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <ul className="space-y-2 text-sm">
                <li><Link to="/mortgages" className="hover:text-white">Mortgages</Link></li>
                <li><Link to="/protection" className="hover:text-white">Protection</Link></li>
                <li><Link to="/administration" className="hover:text-white">Administration</Link></li>
                <li><Link to="/smartrconnect" className="hover:text-white">SmartConnect</Link></li>
                <li><Link to="/leads-business-contacts" className="hover:text-white">Leads & Business Contacts</Link></li>
                <li><Link to="/homebuyer" className="hover:text-white">HomeBuyer</Link></li>
              </ul>
            </div>

            {/* About & Social */}
            <div className='ml-[180px]'>
              <h3 className="text-lg font-semibold text-white mb-3">About</h3>
              <Link to="/contacts" className="text-white text-sm mb-2 block hover:underline">
                Contact
              </Link>
              <div className="flex space-x-3 mt-2">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 p-3 flex items-center justify-center rounded-full bg-white">
                  <FaLinkedin className='text-blue-700 w-6 h-6' />
                </a>

                {/* YouTube */}
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 p-3 flex items-center justify-center rounded-full bg-white">
                  <FaYoutube className='text-red-600 w-6 h-6' />
                </a>
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
