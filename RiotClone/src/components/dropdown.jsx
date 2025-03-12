import React, { useState } from "react";

export function DropDown({ label, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropDownToggle = () => {
    setIsOpen((prev) => !prev); // Toggle the dropdown visibility
  };

  return (
    <div className="relative">
      {/* Label or button to toggle dropdown */}
        <button
          onClick={handleDropDownToggle}
          className="flex items-center gap-2 px-4 py-2 bg-slate-300 text-black rounded-2xl focus:outline-none"
        >
          {label}
          {/* Arrow Icon */}
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>


      {/* Conditionally render dropdown content */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white text-black border rounded-md shadow-lg hover:cursor-pointer">
          {children}
        </div>
      )}
    </div>
  );
}
