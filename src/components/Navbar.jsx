
import React, { useState } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaUsers,FaHome,FaSignInAlt, FaTachometerAlt, FaSearch } from 'react-icons/fa';
import '../styles/navbar.css'; 
// Emeza ko iyi path ariyo ihamagara ifoto yawe neza
import profile from '../assets/profile.jpg'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      {/* Container ya Logo n'Izina */}
      <div className="brand-container">
        <img src={profile} alt="Imena Moves Logo" className="logo-img" />
        <div className="logo-text">Imena Moves</div> 
      </div>
      
      {/* Search Bar area (If Imena Moves ikeneye search) */}
      <div className="search">
        <input type="text" placeholder="Shakisha..." />
        <FaSearch className="search-icon" />
      </div>
      
      {/* Mobile Menu Toggle (Hamburger Icon) */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <FaTimes className={isMenuOpen ? "icon active" : "icon hidden"} />
        <FaBars className={isMenuOpen ? "icon hidden" : "icon active"} />
      </div>
      
      {/* Navigation Links */}
      <nav>
        <ul className={isMenuOpen ? "active" : ""}>
          {/* Dukoresha NavLink kugira ngo style y'uriho ikore neza */}
          <li><NavLink to="/" onClick={toggleMenu}><FaHome /> Home</NavLink></li>
          <li><NavLink to="/about" onClick={toggleMenu}><FaUsers /> About Us</NavLink></li>
          <li><NavLink to="/memberdashboard" onClick={toggleMenu}><FaTachometerAlt /> Dashboard (Member)</NavLink></li>
          {/* Buto ya Login (Admin) */}
          <li>
              <Link to="/login" className="cta-button-nav" onClick={toggleMenu}>
                  <FaSignInAlt /> Login (Admin)
              </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
