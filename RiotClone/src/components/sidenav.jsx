import React from "react";

export function SideNav({ isOpen, closeSidenav }) {
  return (
    <div
      className={`fixed top-0 right-0 w-64 h-full bg-gray-900 text-white p-5 transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-white text-2xl"
        onClick={closeSidenav} // Close the sidenav when clicked
      >
        ✖
      </button>

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img className="w-[25px] rounded-3xl" src="Riot-Icon.jpeg" alt="riot fist" />
      </div>

      {/* Links */}
      <ul className="mt-5 space-y-4">
        <li className="hover:text-red-500 cursor-pointer">Link 1</li>
        <li className="hover:text-red-500 cursor-pointer">Link 2</li>
        <li className="hover:text-red-500 cursor-pointer">Link 3</li>
      </ul>

      {/* Search */}
      <div className="mt-5">
        <input type="search" className="w-full p-2 rounded bg-gray-800 text-white" placeholder="Search..." />
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
