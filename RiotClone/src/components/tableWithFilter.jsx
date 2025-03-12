import React, { useState } from "react";
import { DropDown } from "./dropdown";

export default function TableWithFilter() {
    const [searchTerm, setSearchTerm] = useState("");
    const [craft, setCraft] = useState("");
    const [productTeam, setProductTeam] = useState("");
    const [officeLocation, setOfficeLocation] = useState("");

    const data = [
        { id: 1, jobTitle: "Software Engineer", craft: "Art", productTeam: "Design", office: "New York" },
        { id: 2, jobTitle: "Data Scientist", craft: "Engineering", productTeam: "AI", office: "San Francisco" },
        { id: 3, jobTitle: "Product Manager", craft: "Design", productTeam: "Product", office: "London" },
        { id: 4, jobTitle: "HR Specialist", craft: "Management", productTeam: "HR", office: "Berlin" },
        { id: 5, jobTitle: "UX Designer", craft: "Art", productTeam: "Design", office: "Toronto" },
    ];

    // Filtering logic
    const filteredData = data.filter((item) => {
        return (
            (searchTerm === "" || item.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (craft === "" || item.craft === craft) &&
            (productTeam === "" || item.productTeam === productTeam) &&
            (officeLocation === "" || item.office === officeLocation)
        );
    });

    return (
        <div className="p-4">
            {/* Filter Section */}
            <div className="flex justify-center gap-4 mb-4">
                <input
                    className="rounded-3xl w-[600px] p-2 pl-[20px] pr-[20px] border"
                    type="search"
                    placeholder="Search Job Titles"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <DropDown label="Select a craft" onChange={setCraft}>
                    <div onClick={() => setCraft("Art")}>Art</div>
                    <div onClick={() => setCraft("Engineering")}>Engineering</div>
                    <div onClick={() => setCraft("Design")}>Design</div>
                    <div onClick={() => setCraft("Management")}>Management</div>
                </DropDown>

                <DropDown label="Select a Product Team" onChange={setProductTeam}>
                    <div onClick={() => setProductTeam("Design")}>Design</div>
                    <div onClick={() => setProductTeam("AI")}>AI</div>
                    <div onClick={() => setProductTeam("Product")}>Product</div>
                    <div onClick={() => setProductTeam("HR")}>HR</div>
                </DropDown>

                <DropDown label="Select an Office" onChange={setOfficeLocation}>
                    <div onClick={() => setOfficeLocation("New York")}>New York</div>
                    <div onClick={() => setOfficeLocation("San Francisco")}>San Francisco</div>
                    <div onClick={() => setOfficeLocation("London")}>London</div>
                    <div onClick={() => setOfficeLocation("Berlin")}>Berlin</div>
                    <div onClick={() => setOfficeLocation("Toronto")}>Toronto</div>
                </DropDown>
            </div>

            {/* Table Section */}
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="border p-2">Job Title</th>
                        <th className="border p-2">Craft</th>
                        <th className="border p-2">Product Team</th>
                        <th className="border p-2">Office Location</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((item) => (
                            <tr key={item.id} className="border">
                                <td className="border p-2">{item.jobTitle}</td>
                                <td className="border p-2">{item.craft}</td>
                                <td className="border p-2">{item.productTeam}</td>
                                <td className="border p-2">{item.office}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center p-2">
                                No results found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
