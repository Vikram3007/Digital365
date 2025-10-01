import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

const Nav = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // track dropdown
  const [activeSubmenu, setActiveSubmenu] = useState(""); // active link
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();

  const handleToggle = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  // Navigation handler
  const handleNavigation = (path) => {
    setActiveSubmenu(path);
    setMobileOpen(false); // close mobile menu
    setOpenDropdown(null); // close dropdown
    navigate(path); // navigate route
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Menu items
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

  // Reusable submenu
  const renderMenuItems = (menuArray) =>
    menuArray.map((item) => (
      <li key={item.to}>
        <button
          onClick={() => handleNavigation(item.to)}
          className={`block w-full text-left p-3 transition-colors hover:bg-gray-100 ${
            activeSubmenu === item.to
              ? "bg-blue-50 text-blue-600 font-semibold"
              : ""
          }`}
        >
          {item.label}
        </button>
      </li>
    ));

  return (
    <header
      className="flex items-center justify-between px-6 md:px-10 py-4 md:bg-amber-500 bg-black text-white shadow relative"
      ref={navRef}
    >
      {/* Logo */}
      <button
        onClick={() => handleNavigation("/")}
        className="text-2xl font-bold font-roboto"
      >
        Digital.³⁶⁵™
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-end font-bold font-lora mr-28 gap-6 items-center">
        {/* Elements Dropdown */}
        <div className="relative">
          <button
            onClick={() => handleToggle("elements")}
            className={`flex items-center px-3 py-2 rounded-md transition-colors ${
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
            <ul className="absolute left-0 mt-2 w-56 bg-white text-black shadow-lg rounded-md text-sm z-20 animate-fade-in">
              {renderMenuItems(elementsMenu)}
            </ul>
          )}
        </div>

        {/* About Dropdown */}
        <div className="relative">
          <button
            onClick={() => handleToggle("about")}
            className={`flex items-center px-3 py-2 rounded-md transition-colors ${
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
            <ul className="absolute left-0 mt-2 w-44 bg-white text-black shadow-lg rounded-md text-sm z-20 animate-fade-in">
              {renderMenuItems(aboutMenu)}
            </ul>
          )}
        </div>

        {/* Contacts */}
        <button
          onClick={() => handleNavigation("/contacts")}
          className={`px-3 py-2 rounded-md transition-colors ${
            activeSubmenu === "/contacts"
              ? "bg-blue-700 text-white"
              : "hover:bg-blue-800"
          }`}
        >
          Contacts
        </button>

        {/* Book Demo */}
        <button
          onClick={() => handleNavigation("/book-demo")}
          className={`px-5 py-2 rounded-full ml-6 transition-colors ${
            activeSubmenu === "/book-demo"
              ? "bg-blue-700 text-white"
              : "bg-blue-600 text-white hover:bg-gray-800"
          }`}
        >
          Book a Demo
        </button>
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
        <div className="absolute top-16 left-0 w-full bg-white text-black shadow-md flex flex-col items-start p-6 space-y-4 md:hidden z-50 animate-slide-down">
          {/* Elements */}
          <div className="w-full">
            <button
              onClick={() => handleToggle("elements")}
              className="flex items-center justify-between w-full font-semibold px-3 py-2"
            >
              Elements{" "}
              {openDropdown === "elements" ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
            {openDropdown === "elements" && (
              <ul className="pl-4 space-y-2 w-full animate-fade-in">
                {renderMenuItems(elementsMenu)}
              </ul>
            )}
          </div>

          {/* About */}
          <div className="w-full">
            <button
              onClick={() => handleToggle("about")}
              className="flex items-center justify-between w-full font-semibold px-3 py-2"
            >
              About{" "}
              {openDropdown === "about" ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
            {openDropdown === "about" && (
              <ul className="pl-4 space-y-2 w-full animate-fade-in">
                {renderMenuItems(aboutMenu)}
              </ul>
            )}
          </div>

          {/* Contacts */}
          <button
            onClick={() => handleNavigation("/contacts")}
            className={`font-semibold w-full text-left px-3 py-2 rounded-md ${
              activeSubmenu === "/contacts"
                ? "bg-blue-700 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            Contacts
          </button>

          {/* Book Demo */}
          <button
            onClick={() => handleNavigation("/book-demo")}
            className={`px-5 py-2 rounded-full transition-colors w-full text-center ${
              activeSubmenu === "/book-demo"
                ? "bg-blue-700 text-white"
                : "bg-blue-600 text-white hover:bg-black"
            }`}
          >
            Book a Demo
          </button>
        </div>
      )}
    </header>
  );
};

export default Nav;
