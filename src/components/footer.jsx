// src/components/Footer/Footer.jsx
import React from 'react';
import './footer.css'; // Make sure this import points to the correct file path

function Footer() {
    return (
      <footer className="footer">
        <p>© {new Date().getFullYear()} John Hazuka Portfolio Phone:206-771-3345, Email: JohnMichaelHazukajr@gmail.com All rights reserved.</p>
      </footer>
    );
}

export default Footer;

  