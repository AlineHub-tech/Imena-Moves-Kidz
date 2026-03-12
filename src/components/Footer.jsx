import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, 
  FaMapMarkerAlt, FaPhoneAlt, FaTiktok, FaChevronRight 
} from 'react-icons/fa';
import '../styles/Footer.css'; 

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container-h footer-grid">
                {/* BRAND SECTION */}
                <div className="footer-brand">
                    <h2 className="footer-logo">IMENA<span>MOVES</span></h2>
                    <p className="brand-desc">
                        Empowering the next generation of performers in Rwanda through 
                        motion, culture, and disciplined excellence.
                    </p>
                    <div className="social-pills">
                        <a href="https://web.facebook.com/share/17N54HU5e1/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
                        <a href="https://tiktok.com" target="_blank" rel="noreferrer"><FaTiktok /></a>
                    </div>
                </div>

                {/* QUICK LINKS */}
                <div className="footer-links">
                    <h3>Quick Navigation</h3>
                    <ul>
                        <li><Link to="/"><FaChevronRight className="li-icon"/> Home</Link></li>
                        <li><Link to="/about"><FaChevronRight className="li-icon"/> About Us</Link></li>
                        <li><Link to="/contact"><FaChevronRight className="li-icon"/> Contact Us</Link></li>
                        <li><Link to="/member"><FaChevronRight className="li-icon"/> Member Portal</Link></li>
                        <li><Link to="/login"><FaChevronRight className="li-icon"/> Admin Access</Link></li>
                    </ul>
                </div>

                {/* CONTACT INFO */}
                <div className="footer-contact">
                    <h3>Get In Touch</h3>
                    <div className="contact-row">
                        <FaMapMarkerAlt className="c-icon" />
                        <span>Kigali-Kabuga, Rwanda</span>
                    </div>
                    <div className="contact-row">
                        <FaPhoneAlt className="c-icon" />
                        <span>+250 734 961 956</span>
                    </div>
                    <div className="contact-row">
                        <FaEnvelope className="c-icon" />
                        <span>wejefu@gmail.com</span>
                    </div>
                </div>
                
                {/* NEWSLETTER */}
                <div className="footer-newsletter">
                    <h3>Newsletter</h3>
                    <p>Stay updated with our latest shows and workshops.</p>
                    <form className="footer-sub-form">
                        <input type="email" placeholder="Your Email Address" required />
                        <button type="submit">Join</button>
                    </form>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="footer-bottom">
                <div className="container-h bottom-flex">
                    <p>&copy; {new Date().getFullYear()} <strong>Imena Moves</strong>. All rights reserved.</p>
                    <p>
                        Designed & Developed by 
                        <a href="https://byte-flow-ltd.vercel.app/" target="_blank" rel="noreferrer" className="dev-link">
                           ByteFlow Ltd
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
