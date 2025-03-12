import React from "react";
import { DropDown } from "./dropdown.jsx";
import { Link } from "react-router-dom";

export function NavigationBar() {
    return (
        <nav className="fixed top-0 h-[90px] w-full flex bg-black text-white justify-evenly p-5 align-middle z-50">
            {/* Rebel GAMES logo with dropdown */}
            <DropDown label={<img src="" alt="REBEL GAMES" />}>
               <div className="w-[1400px] h-[400px]">
                        <h2>GAMES</h2>
                            <Link to="/tictactoe">TIC TAC TOE</Link>
                            <a
                                href="/pong/index.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                Play Pong
                                </a>
                            <div>VALORANT</div>
                            <div>TEAMFIGHT TACTICS</div>

                            <div className="display">

                           </div>
               </div>
                
            </DropDown>

            {/* Main navigation links */}
            <Link to="/"><img className="w-11 rounded-3xl" src="/Riot Icon.jpeg" alt="riot games icon" /></Link>
            <Link to="/who-we-are" className="whoWeAre">WHO WE ARE</Link>
            <Link to="/work-with-us">WORK WITH US</Link>
            <Link to="/news-page">NEWS</Link>
            
            

            {/* Languages dropdown */}
            <DropDown label={<img src="" alt="LANGUAGES" />}>
                <button>English</button>
                <button>French</button>
                <button>Spanish</button>
            </DropDown>

            {/* Search and sign-in */}
            <input className="rounded-full h-8" type="search" placeholder="Search..." />
            <button className="bg-red-600 text-black w-[100px] rounded-3xl h-[35px] text-[12px] font-bold"> 
                <Link to="/signin">SIGN IN</Link>
            </button>
        </nav>
    );
}
