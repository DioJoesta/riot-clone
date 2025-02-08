import React from "react";
import { DropDown } from "./DropDown";
import { Link } from "react-router-dom";

export function NavigationBar() {
    return (
        <nav className="nav">
            {/* Rebel GAMES logo with dropdown */}
            <DropDown label={<img src="" alt="REBEL GAMES" />}>
                <h2>GAMES</h2>
                <Link to="/tictactoe">TIC TAC TOE</Link>
                <div>PONG</div>
                <div>VALORANT</div>
                <div>TEAMFIGHT TACTICS</div>

                <div className="display">

                </div>
                
            </DropDown>

            {/* Main navigation links */}
            <Link to="/"><img className="w-11 rounded-3xl" src="/Riot Icon.jpeg" alt="riot games icon" /></Link>
            <Link to="/who-we-are" className="whoWeAre">WHO WE ARE</Link>
            <Link to="/careers">WORK WITH US</Link>
            <Link to="/news-page">NEWS</Link>
            
            

            {/* Languages dropdown */}
            <DropDown label={<img src="" alt="LANGUAGES" />}>
                <button>English</button>
                <button>French</button>
                <button>Spanish</button>
            </DropDown>

            {/* Search and sign-in */}
            <input className="rounded-full h-8" type="search" placeholder="Search..." />
            <button>            <Link to="/signin">SIGN IN</Link>
            </button>
        </nav>
    );
}
