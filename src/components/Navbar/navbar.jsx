import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Space for logo */}
        LOGO
      </div>
      <div className="navbar-menu">
        <Link to="/"><button>Home</button></Link>
        <Link to="/Service"><button>Service</button></Link>
        <Link to="/ContactUs"><button>Contact Us</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
