import React, { useState } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaUsers,FaHome,FaSignInAlt, FaTachometerAlt, FaSearch } from 'react-icons/fa';
import '../styles/Navbar.css'; 
import profile from '../assets/profile.jpg'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="brand-container">
        <img src={profile} alt="Imena Moves Logo" className="logo-img" />
        <div className="logo-text">Imena Moves</div> 
      </div>
      <div className="search">
        <input type="text" placeholder="Shakisha..." />
        <FaSearch className="search-icon" />
      </div>
      
      <div className="menu-toggle" onClick={toggleMenu}>
        <FaTimes className={isMenuOpen ? "icon active" : "icon hidden"} />
        <FaBars className={isMenuOpen ? "icon hidden" : "icon active"} />
      </div>
      <nav>
        <ul className={isMenuOpen ? "active" : ""}>
          <li><NavLink to="/" onClick={toggleMenu}><FaHome /> Home</NavLink></li>
          <li><NavLink to="/about" onClick={toggleMenu}><FaUsers /> About Us</NavLink></li>
          <li><NavLink to="/memberdashboard" onClick={toggleMenu}><FaTachometerAlt /> Dashboard (Member)</NavLink></li>
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


