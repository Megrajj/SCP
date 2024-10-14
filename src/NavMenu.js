import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { scp } from './scp'; // Ensure this path is correct
import './style/Navbar.css'; // Import your NavMenu styles

function NavMenu() {
    const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle menu state
    };

    return (
        <nav className="navbar">
            <div className="navbar-title">
                <Link to="/">SCP Archive</Link>
            </div>
            <button className="navbar-toggle" onClick={toggleMenu}>
                {isOpen ? 'Close' : 'Menu'} {/* Change button text based on state */}
            </button>
            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}> {/* Add class to open/close menu */}
                {scp.map((scpItem) => (
                    <li key={scpItem.Item}>
                        <Link to={`/scp/${scpItem.Item}`}>{scpItem.Item}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavMenu;
