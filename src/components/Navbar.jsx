import React, { useState } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import { 
  FaBars, FaTimes, FaHome, FaInfoCircle, 
  FaTachometerAlt, FaSignInAlt, FaSearch 
} from 'react-icons/fa';
import '../styles/Navbar.css'; 
import profile from '../assets/profile.jpg'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src={profile} alt="Logo" />
          <span>Imena Moves</span>
        </Link>

        {/* SEARCH (Desktop Only) */}
        <div className="nav-search-desktop">
          <input type="text" placeholder="Search..." />
          <FaSearch />
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <div className="nav-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* NAV MENU */}
        <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={closeMenu}>
              <FaHome className="nav-icon" /> Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-links" onClick={closeMenu}>
              <FaInfoCircle className="nav-icon" /> About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/memberdashboard" className="nav-links" onClick={closeMenu}>
              <FaTachometerAlt className="nav-icon" /> Dashboard
            </NavLink>
          </li>
          <li className="nav-item nav-btn-item">
            <Link to="/login" className="nav-login-btn" onClick={closeMenu}>
              <FaSignInAlt /> Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

