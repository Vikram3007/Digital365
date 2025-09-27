import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

const Nav = () => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleFeaturesToggle = () => {
    setFeaturesOpen(!featuresOpen);
    setAboutOpen(false);
  };

  const handleAboutToggle = () => {
    setAboutOpen(!aboutOpen);
    setFeaturesOpen(false);
  };

  return (
    <header className="flex items-center justify-between px-6 md:px-10 py-4 bg-amber-100 text-black shadow">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold">
         Digital.³⁶⁵™ 
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        {/* Elements */}
        <div className="relative">
          <button
            onClick={handleFeaturesToggle}
            className="flex items-center font-semibold hover:text-gray-700 transition-colors"
            aria-expanded={featuresOpen}
            aria-controls="features-menu"
          >
            Elements {featuresOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {featuresOpen && (
            <ul
              id="features-menu"
              className="absolute left-0 mt-2 w-56 bg-white text-black shadow-lg rounded-md text-sm z-20"
            >
              <li>
                <Link to="/mortgages" className="block p-3 hover:bg-gray-100 transition-colors">
                  Mortgages
                </Link>
              </li>
              <li>
                <Link to="/protection" className="block p-3 hover:bg-gray-100 transition-colors">
                  Protection
                </Link>
              </li>
              <li>
                <Link to="/administration" className="block p-3 hover:bg-gray-100 transition-colors">
                  Administration
                </Link>
              </li>
              <li>
                <Link to="/smartrconnect" className="block p-3 hover:bg-gray-100 transition-colors">
                  SmartrConnect
                </Link>
              </li>
              <li>
                <Link
                  to="/leads-business-contacts"
                  className="block p-3 hover:bg-gray-100 transition-colors"
                >
                  Leads & Business Contacts
                </Link>
              </li>
              <li>
                <Link to="/homebuyer" className="block p-3 hover:bg-gray-100 transition-colors">
                  HomeBuyer
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* About */}
        <div className="relative">
          <button
            onClick={handleAboutToggle}
            className="flex items-center font-semibold hover:text-gray-700 transition-colors"
            aria-expanded={aboutOpen}
            aria-controls="about-menu"
          >
            About {aboutOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {aboutOpen && (
            <ul
              id="about-menu"
              className="absolute left-0 mt-2 w-44 bg-white text-black shadow-lg rounded-md text-sm z-20"
            >
              <li>
                <Link to="/about-us" className="block p-3 hover:bg-gray-100 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="block p-3 hover:bg-gray-100 transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Contacts */}
        <Link
          to="/contacts"
          className="font-semibold hover:text-gray-700 transition-colors"
        >
          Contacts
        </Link>

        {/* Book Demo */}
        <Link
          to="/book-demo"
          className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          Book a Demo
        </Link>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 w-full bg-amber-100 shadow-md flex flex-col items-start p-6 space-y-4 md:hidden z-50">
          <button
            onClick={handleFeaturesToggle}
            className="flex items-center justify-between w-full font-semibold"
          >
            Elements {featuresOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {featuresOpen && (
            <ul className="pl-4 space-y-2">
              <li>
                <Link to="/mortgages" className="block hover:text-gray-700">Mortgages</Link>
              </li>
              <li>
                <Link to="/protection" className="block hover:text-gray-700">Protection</Link>
              </li>
              <li>
                <Link to="/administration" className="block hover:text-gray-700">Administration</Link>
              </li>
              <li>
                <Link to="/smartrconnect" className="block hover:text-gray-700">SmartrConnect</Link>
              </li>
              <li>
                <Link to="/leads-business-contacts" className="block hover:text-gray-700">Leads & Business Contacts</Link>
              </li>
              <li>
                <Link to="/homebuyer" className="block hover:text-gray-700">HomeBuyer</Link>
              </li>
            </ul>
          )}

          <button
            onClick={handleAboutToggle}
            className="flex items-center justify-between w-full font-semibold"
          >
            About {aboutOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {aboutOpen && (
            <ul className="pl-4 space-y-2">
              <li>
                <Link to="/about-us" className="block hover:text-gray-700">About Us</Link>
              </li>
              <li>
                <Link to="/team" className="block hover:text-gray-700">Team</Link>
              </li>
            </ul>
          )}

          <Link to="/contacts" className="font-semibold hover:text-gray-700">
            Contacts
          </Link>

          <Link
            to="/book-demo"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Book a Demo
          </Link>
        </div>
      )}
    </header>
  );
};

export default Nav;
