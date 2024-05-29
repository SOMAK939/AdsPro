import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
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
