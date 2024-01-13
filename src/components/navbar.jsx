// src/components/Navbar/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './navbar.css';

function Navbar() {
    return (
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/about">About</Link></li>
          {/* Ensure you have a route for resume if you're keeping this link */}
          <li className="nav-item"><Link to="/resume">Resume</Link></li>
        </ul>
      </nav>
    );
}

export default Navbar;

  