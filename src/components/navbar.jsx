import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                {/* Space for logo */}
                LOGO
            </div>
            <div className="navbar-menu">
                <a href="#home">Home</a>
                <a href="#service">Service</a>
                <a href="#gallery">Gallery</a>
                <a href="#contact">Contact Us</a>
            </div>
        </nav>
    );
};

export default Navbar;
