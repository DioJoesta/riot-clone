import React, { useState } from "react";

export function DropDown({ label, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleDropDownToggle = () => {
        setIsOpen((prev) => !prev); // Toggle the dropdown visibility
    };

    return (
        <div className="dropdown">
            {/* Label or button to toggle dropdown */}
            <button onClick={handleDropDownToggle} className="dropdown-toggle">
                {label}
            </button>

            {/* Conditionally render dropdown content */}
            {isOpen && <div className="dropdown-menu flex flex-col absolute border bg-white text-black">{children}</div>}
        </div>
    );
}
