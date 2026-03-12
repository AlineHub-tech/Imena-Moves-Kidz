import React, { useState } from "react";
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, 
  FaYoutube, FaTiktok, FaInstagram, FaFacebookF, FaPaperPlane 
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ContactPage.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent to Imena Moves.");
  };

  return (
    <div className="contact-root">
      <Navbar />

      <main className="contact-main">
        {/* --- HEADER --- */}
        <section className="contact-hero">
          <div className="container-h">
            <h1>Get In <span className="text-orange">Touch</span></h1>
            <p>Have a question or want to book a performance? We'd love to hear from you.</p>
          </div>
        </section>

        <div className="container-h contact-grid">
          {/* --- LEFT SIDE: INFO & SOCIALS --- */}
          <div className="contact-info-side">
            <div className="info-card shadow-sm">
              <h3>Contact Information</h3>
              <div className="info-item">
                <div className="icon-box"><FaPhoneAlt /></div>
                <div>
                  <strong>Phone</strong>
                  <p>+250 734 961 956</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-box"><FaEnvelope /></div>
                <div>
                  <strong>Email</strong>
                  <p>wejefu@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-box"><FaMapMarkerAlt /></div>
                <div>
                  <strong>Location</strong>
                  <p>Kigali-Kabuga, Rwanda</p>
                </div>
              </div>
            </div>

            {/* SOCIAL MEDIA GRID */}
            <div className="social-connect">
              <h3>Follow Our Journey</h3>
              <div className="social-links-grid">
                <a href="https://youtube.com" target="_blank" className="social-btn yt">
                  <FaYoutube /> <span>YouTube</span>
                </a>
                <a href="https://tiktok.com" target="_blank" className="social-btn tk">
                  <FaTiktok /> <span>TikTok</span>
                </a>
                <a href="https://instagram.com" target="_blank" className="social-btn ig">
                  <FaInstagram /> <span>Instagram</span>
                </a>
                <a href="https://facebook.com" target="_blank" className="social-btn fb">
                  <FaFacebookF /> <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: FORM --- */}
          <div className="contact-form-side">
            <form className="main-contact-form shadow" onSubmit={handleSubmit}>
              <h2>Send us a Message</h2>
              <div className="input-group">
                <label>Full Name</label>
                <input 
                  type="text" placeholder="Enter your name" 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} required 
                />
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <input 
                  type="email" placeholder="Enter your email" 
                  onChange={(e) => setFormData({...formData, email: e.target.value})} required 
                />
              </div>
              <div className="input-group">
                <label>How can we help?</label>
                <textarea 
                  rows="5" placeholder="Write your message here..."
                  onChange={(e) => setFormData({...formData, message: e.target.value})} required
                ></textarea>
              </div>
              <button type="submit" className="btn-send">
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>

        {/* --- MAP SECTION --- */}
        <section className="location-map container-h">
          <div className="map-placeholder">
             {/* You can replace this with a real Google Maps Iframe */}
             <div className="map-overlay">
                <FaMapMarkerAlt className="pin" />
                <p><strong>Visit Us:</strong> Kabuga, City of Kigali, Rwanda</p>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
