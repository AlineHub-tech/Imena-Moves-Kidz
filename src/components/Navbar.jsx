import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaHome, FaInfoCircle, FaEnvelope, FaUserShield, 
  FaUserEdit, FaBars, FaTimes, FaRocket 
} from "react-icons/fa";

// Import your profile image
import profileImg from "../assets/profile.jpg"; 
import "../styles/Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="main-nav">
      <div className="nav-container container-h">
        {/* LOGO AREA */}
        <Link to="/" className="nav-logo">
          IMENA<span>MOVES</span>
        </Link>

        {/* MOBILE MENU TOGGLE */}
        <div className="mobile-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* NAVIGATION LINKS */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link onClick={toggleMenu} to="/"><FaHome className="nav-icon" /> Home</Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="/about"><FaInfoCircle className="nav-icon" /> About Us</Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="/contact"><FaEnvelope className="nav-icon" /> Contact Us</Link>
          </li>
          {/* APPLY LINK NSHYA */}
          <li>
            <Link onClick={toggleMenu} to="/apply" className="apply-nav-link">
              <FaRocket className="nav-icon" /> Apply Now
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="/login"><FaUserEdit className="nav-icon" /> Member</Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="/login" className="admin-link">
              <FaUserShield className="nav-icon" /> Admin
            </Link>
          </li>
          
          {/* PROFILE IMAGE */}
          <li className="nav-profile">
            <img src={profileImg} alt="User Profile" className="profile-thumb" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
