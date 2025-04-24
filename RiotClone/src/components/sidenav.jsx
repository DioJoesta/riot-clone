import React from "react";
import { Link } from "react-router-dom";

export function SideNav({ isOpen, closeSidenav }) {
  return (
    <div
      className={`fixed top-0 right-0 w-64 h-full bg-gray-900 text-white p-5 transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-white text-2xl"
        onClick={closeSidenav}
      >
        ✖
      </button>

      {/* Logo */}
      <div className="flex items-center gap-2 mb-5">
        <img className="w-[25px] rounded-3xl" src="Riot-Icon.jpeg" alt="riot fist" />
      </div>

      {/* Links */}
      <Link to="/who-we-are" className="flex text-[13px] font-bold mb-2">WHO WE ARE</Link>
      <Link to="/work-with-us" className="flex text-[13px] font-bold mb-5">WORK WITH US</Link>

      {/* Search */}
      <div className="mt-5">
        <input
          type="search"
          className="w-full p-2 rounded bg-gray-800 text-white"
          placeholder="Search..."
        />
      </div>

      {/* Sign-in button */}
      <div className="mt-5">
        <button className="w-full py-2 bg-red-600 hover:bg-red-700 rounded">
          Sign In
        </button>
      </div>
    </div>
  );
}
