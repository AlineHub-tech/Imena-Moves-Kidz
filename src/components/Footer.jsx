
import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope, FaMapMarkerAlt, FaPhone,FaTiktok } from 'react-icons/fa';
import '../styles/Footer.css'; // Importing specific CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#dashboard">Member Dashboard</a></li>
                        <li><a href="#login">Admin Login</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p><FaMapMarkerAlt /> Kigali, Rwanda</p>
                    <p><FaPhone /> +250 791 816 222</p>
                    <p><FaEnvelope /> info@imenamoves.com</p>
                    <div className="social-icons">
                        <a href="https://web.facebook.com/share/17N54HU5e1/"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="https://www.youtube.com/channel/UCsjwZMUfPwkM-5lk0QA-QSA"><FaYoutube /></a>
                        <a href="https://www.youtube.com/channel/UCsjwZMUfPwkM-5lk0QA-QSA"><FaTiktok /></a>
                    </div>
                </div>
                
                <div className="footer-section">
                    <h3>Subscribe Newsletter</h3>
                    <p>Get the latest news and updates from Imena Moves.</p>
                    <form className="subscribe-form">
                        <input type="email" placeholder="Your Email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="bottom-bar">
                <p>&copy; {new Date().getFullYear()} Imena Moves. All rights reserved.| Developed by <a href="https://aline-site-seven.vercel.app/"><span class="developer-name">Umugwaneza Aline</span></a></p>
            </div>
        </footer>
    );
};

export default Footer;
