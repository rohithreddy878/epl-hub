import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import styles

const Header = () => {
    return (
        <header className="header">
            {/* Left Section - Logo & Site Name */}
            <div className="header-left">
                <img src="epl-logo.png" alt="Site Logo" className="logo" />
                <span className="site-name">English Premier League</span>
            </div>

            {/* Center - Navigation Links */}
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/teams">Teams</Link>
                <Link to="/standings">Standings</Link>
                <Link to="/stats">Stats</Link>
            </nav>

            {/* Right Section - External Link & Theme Toggle */}
            <div className="header-right">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github-link">
                    GitHub <span>🔗</span>
                </a>
            </div>
        </header>
    );
};

export default Header;
