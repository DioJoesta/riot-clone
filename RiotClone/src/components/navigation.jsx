import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DropDown } from "./dropdown.jsx";
import { SideNav } from "./sidenav.jsx";

export function NavigationBar() {
    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false); // Added state for sidenav visibility

    const openSidenav = () => {
        setIsOpen(true); // Open sidenav
    };

    const closeSidenav = () => {
        setIsOpen(false); // Close sidenav
    };

    return (
        <>
            {/* Navigation bar */}
            <nav className="fixed z-50 h-[90px] min-w-[320px] w-full flex bg-black text-white justify-between items-center">
                <div className="flex lg:justify-start gap-3 md:justify-around lg:items-center md:items-center md:gap-3 items-center lg:w-[450px] md:w-[450px]">
                <DropDown label={<img className="max-w-[100px] max-h-[50px]" src="/riot-games-logo.png" alt="REBEL GAMES" />}>
                    <div className="min-w-[100px] border min-h-[100px]">
                        <a href="https://www.onlinegames.io/games/2022/unity2/masked-special-forces/index.html">Shooter</a> <br />
                        <Link to="/tictactoe">TIC TAC TOE</Link> <br />
                        <a href="/pong/index.html" target="_blank" rel="noopener noreferrer">Play Pong</a> <br />
                        <a href="https://www.onlinegames.io/games/2021/unity/stack-fire-ball/index.html">Tower-break</a> <br />
                        <a href="https://www.onlinegames.io/games/2023/unity/drift-hunters-pro/index.html">Drift hunters</a><br />
                    </div>
                </DropDown>

                <Link to="/"><img className="min-w-[25px] max-w-[25px] rounded-3xl" src="/Riot-Icon.jpeg" alt="riot games icon" /></Link>
                <Link to="/who-we-are" className="hidden md:flex text-[13px] font-bold">WHO WE ARE</Link>
                <Link to="/work-with-us" className="hidden md:flex text-[13px] font-bold">WORK WITH US</Link>
                {/* <Link to="/news-page" className="hidden md:flex text-[13px] font-bold">NEWS</Link> */}
                </div>

                <div className="flex lg:justify-around md:justify-around lg:items-center md:items-center gap-3 md:gap-3 items-center lg:w-[450px]">
                <DropDown label={<img className="w-[17px]" src="globe.png" alt="LANGUAGES" />}>
                    <div className="flex flex-col border min-w-[10px] min-h-[100] items-start">
                        <button>English</button>
                        <button>French</button>
                        <button>Spanish</button>
                    </div>
                </DropDown>

                <input
                    className="rounded-full h-8 min-w-[10px] text-black pl-[20px] hidden md:flex"
                    type="search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search..."
                />
                <button className="bg-red-600 text-black min-w-[70px] rounded-3xl h-[35px] text-[12px] font-bold ">
                    <Link to="/signin">SIGN IN</Link>
                </button>
                <button
                    className="flex items-center justify-center min-w-[30px] h-[35px] lg:hidden md:hidden"
                    onClick={openSidenav} // Open the sidenav when clicked
                >
                    <img className="" src="/menu-svg.svg" alt="" />
                </button>
                </div>
            </nav>

            {/* Pass open/close logic to the SideNav component */}
            <SideNav isOpen={isOpen} closeSidenav={closeSidenav} />
        </>
    );
}
