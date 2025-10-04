import React, { useState, useEffect, useRef } from "react";

const countries = [
  { code: "+91", name: "India", flag: "🇮🇳" },
  { code: "+1", name: "United States", flag: "🇺🇸" },
  { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "+971", name: "UAE", flag: "🇦🇪" },
  { code: "+81", name: "Japan", flag: "🇯🇵" },
  { code: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "+33", name: "France", flag: "🇫🇷" },
];

const regulatedOptions = [
"AR","DA"
];

const Contacts2 = () => {
  const [formData, setFormData] = useState({
    company: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: countries[0],
    regulatedStatus: "",
    hearAbout: "",
  });

  const [errors, setErrors] = useState({});
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [regulatedDropdownOpen, setRegulatedDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [regulatedSearch, setRegulatedSearch] = useState("");

  const countryRef = useRef(null);
  const regulatedRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryRef.current && !countryRef.current.contains(event.target)) {
        setCountryDropdownOpen(false);
      }
      if (regulatedRef.current && !regulatedRef.current.contains(event.target)) {
        setRegulatedDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const validate = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
    } else {
      setErrors({});
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const filteredRegulated = regulatedOptions.filter((r) =>
    r.toLowerCase().includes(regulatedSearch.toLowerCase())
  );

  const combinedErrorMessage =
    Object.keys(errors).length > 0
      ? Object.values(errors).join(", ")
      : "";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center font-roboto font-semibold justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg space-y-5"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          We’d love to hear from you!
        </h2>
        <p className="text-center text-gray-500 text-sm">
          Please fill out the form and we’ll get back to you as soon as possible.
        </p>

        <input
          type="text"
          placeholder="Company Name"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full border p-2 rounded"
        />

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className="w-1/2 border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className="w-1/2 border p-2 rounded"
          />
        </div>

        <input
          type="email"
          placeholder="Email*"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full border p-2 rounded"
        />

        {/* Phone + Country Dropdown */}
        <div>
          <label className="block text-sm mb-1">Phone Number*</label>
          <div className="flex">
            <div className="relative" ref={countryRef}>
              <button
                type="button"
                onClick={() => {
                  setCountryDropdownOpen(!countryDropdownOpen);
                  setRegulatedDropdownOpen(false);
                }}
                className="flex items-center gap-1 border border-r-0 px-2 py-2 rounded-l bg-gray-100"
              >
                {formData.country.flag} {formData.country.name} {formData.country.code} ▼
              </button>
              {countryDropdownOpen && (
                <div className="absolute top-12 left-0 bg-white border shadow-lg max-h-44 overflow-y-auto w-64 z-10">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-2 mb-2 border-b"
                    value={countrySearch}
                    onChange={(e) => setCountrySearch(e.target.value)}
                  />
                  {filteredCountries.map((c, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setFormData({ ...formData, country: c });
                        setCountryDropdownOpen(false);
                        setCountrySearch("");
                      }}
                      className="p-2 hover:bg-gray-100 cursor-pointer flex gap-2"
                    >
                      <span>{c.flag}</span>
                      <span>{c.name} {c.code}</span>
                    </div>
                  ))}
                  {filteredCountries.length === 0 && (
                    <div className="p-2 text-gray-400">No results found</div>
                  )}
                </div>
              )}
            </div>
            <input
              type="text"
              placeholder="Phone number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full border border-l-0 p-2 rounded-r"
            />
          </div>
        </div>

        {/* Regulated Status Dropdown */}
        <div className="relative" ref={regulatedRef}>
          <button
            type="button"
            onClick={() => {
              setRegulatedDropdownOpen(!regulatedDropdownOpen);
              setCountryDropdownOpen(false);
            }}
            className="w-full flex justify-between items-center border p-2 rounded bg-white"
          >
            {formData.regulatedStatus || "Select regulated status"} <span>▼</span>
          </button>
          {regulatedDropdownOpen && (
            <div className="absolute top-12 left-0 w-full border bg-white shadow-lg max-h-44 overflow-y-auto z-10">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 mb-2 border-b"
                value={regulatedSearch}
                onChange={(e) => setRegulatedSearch(e.target.value)}
              />
              {filteredRegulated.map((opt, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setFormData({ ...formData, regulatedStatus: opt });
                    setRegulatedDropdownOpen(false);
                    setRegulatedSearch("");
                  }}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {opt}
                </div>
              ))}
              {filteredRegulated.length === 0 && (
                <div className="p-2 text-gray-400">No results found</div>
              )}
            </div>
          )}
        </div>

        <input
          type="text"
          placeholder="Where did you hear about us?"
          value={formData.hearAbout}
          onChange={(e) =>
            setFormData({ ...formData, hearAbout: e.target.value })
          }
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>

        {combinedErrorMessage && (
          <p className="text-red-600 text-center font-medium">
            {combinedErrorMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contacts2;
