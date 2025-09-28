import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

const Nav = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // track open dropdown
  const [activeSubmenu, setActiveSubmenu] = useState(""); // track last clicked submenu
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  const handleToggle = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const elementsMenu = [
    { to: "/mortgages", label: "Mortgages" },
    { to: "/protection", label: "Protection" },
    { to: "/administration", label: "Administration" },
    { to: "/smartrconnect", label: "SmartrConnect" },
    { to: "/leads-business-contacts", label: "Leads & Business Contacts" },
    { to: "/homebuyer", label: "HomeBuyer" },
  ];

  const aboutMenu = [
    { to: "/about-us", label: "About Us" },
    { to: "/team", label: "Team" },
  ];

  const renderMenuItems = (menuArray) =>
    menuArray.map((item) => (
      <li key={item.to}>
        <Link
          to={item.to}
          className={`block p-3 transition-colors hover:bg-gray-100 ${
            activeSubmenu === item.to
              ? "bg-blue-50 text-blue-600 font-semibold"
              : ""
          }`}
          onClick={() => {
            setActiveSubmenu(item.to);
            setOpenDropdown(null);
            setMobileOpen(false);
          }}
        >
          {item.label}
        </Link>
      </li>
    ));

  return (
    <header className="flex items-center justify-between px-6 md:px-10 py-4 bg-blue-900 text-white shadow relative">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold">
        Digital.³⁶⁵™
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6" ref={navRef}>
        {/* Elements */}
        <div className="relative">
          <button
            onClick={() => handleToggle("elements")}
            className={`flex items-center font-semibold px-2 py-1 rounded-md transition-colors ${
              openDropdown === "elements"
                ? "bg-blue-700 text-white"
                : "hover:bg-blue-800"
            }`}
          >
            Elements{" "}
            {openDropdown === "elements" ? (
              <ChevronUp size={16} className="ml-1" />
            ) : (
              <ChevronDown size={16} className="ml-1" />
            )}
          </button>
          {openDropdown === "elements" && (
            <ul className="absolute left-0 mt-2 w-56 bg-white text-black shadow-lg rounded-md text-sm z-20">
              {renderMenuItems(elementsMenu)}
            </ul>
          )}
        </div>

        {/* About */}
        <div className="relative">
          <button
            onClick={() => handleToggle("about")}
            className={`flex items-center font-semibold px-2 py-1 rounded-md transition-colors ${
              openDropdown === "about"
                ? "bg-blue-700 text-white"
                : "hover:bg-blue-800"
            }`}
          >
            About{" "}
            {openDropdown === "about" ? (
              <ChevronUp size={16} className="ml-1" />
            ) : (
              <ChevronDown size={16} className="ml-1" />
            )}
          </button>
          {openDropdown === "about" && (
            <ul className="absolute left-0 mt-2 w-44 bg-white text-black shadow-lg rounded-md text-sm z-20">
              {renderMenuItems(aboutMenu)}
            </ul>
          )}
        </div>

        {/* Contacts */}
        <Link
          to="/contacts"
          className={`font-semibold px-2 py-1 rounded-md transition-colors hover:bg-blue-800 ${
            activeSubmenu === "/contacts" ? "text-blue-300 font-semibold" : ""
          }`}
          onClick={() => setActiveSubmenu("/contacts")}
        >
          Contacts
        </Link>

        {/* Book Demo */}
        <Link
          to="/book-demo"
          className={`px-5 py-2 rounded-full transition-colors ${
            activeSubmenu === "/book-demo"
              ? "bg-blue-700 text-white"
              : "bg-blue-600 text-white hover:bg-gray-800"
          }`}
          onClick={() => setActiveSubmenu("/book-demo")}
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
          {/* Elements */}
          <button
            onClick={() => handleToggle("elements")}
            className="flex items-center justify-between w-full font-semibold"
          >
            Elements{" "}
            {openDropdown === "elements" ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>
          {openDropdown === "elements" && (
            <ul className="pl-4 space-y-2 w-full">
              {renderMenuItems(elementsMenu)}
            </ul>
          )}

          {/* About */}
          <button
            onClick={() => handleToggle("about")}
            className="flex items-center justify-between w-full font-semibold"
          >
            About{" "}
            {openDropdown === "about" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {openDropdown === "about" && (
            <ul className="pl-4 space-y-2 w-full">{renderMenuItems(aboutMenu)}</ul>
          )}

          {/* Contact */}
          <Link
            to="/contacts"
            className={`font-semibold w-full ${
              activeSubmenu === "/contacts" ? "text-blue-600 font-semibold" : ""
            }`}
            onClick={() => {
              setActiveSubmenu("/contacts");
              setMobileOpen(false);
            }}
          >
            Contacts
          </Link>

          {/* Book Demo */}
          <Link
            to="/book-demo"
            className={`px-5 py-2 rounded-full transition-colors w-full text-center ${
              activeSubmenu === "/book-demo"
                ? "bg-blue-700 text-white"
                : "bg-blue-600 text-white hover:bg-gray-800"
            }`}
            onClick={() => setActiveSubmenu("/book-demo")}
          >
            Book a Demo
          </Link>
        </div>
      )}
    </header>
  );
};

export default Nav;
