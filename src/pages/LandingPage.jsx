import React from "react";
import { Link } from 'react-router-dom';
import { 
  FaUsers, FaDumbbell, FaHandshake, FaMusic, FaCamera, FaStar, 
  FaCheckCircle, FaQuoteLeft, FaPlay, FaCalendarAlt, FaAward 
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// DIRECT IMAGE IMPORT
import heroImg from "../assets/d5.jpg"; 

import "../styles/LandingPage.css";

export default function Landing() {
  return (
    <div className="lp-container">
      <Navbar />

      {/* --- ELITE BYTEFLOW-STYLE HERO --- */}
      <section className="byte-hero">
        <div className="container-h hero-flex">
          <div className="hero-text-content">
            <div className="status-pill">
              <span className="pulse"></span> Now Enrolling for 2026
            </div>
            <h1>
              Nurturing the <br />
              <span className="brand-gradient">Elite Performers</span> <br />
              of Tomorrow.
            </h1>
            <p className="hero-lead">
              Imena Moves Kidz is more than a dance group—it's a launchpad for young creators. 
              We blend traditional discipline with modern artistic excellence.
            </p>
            <div className="hero-cta-group">
              {/* IJYANA KURI APPLY PAGE NSHYA TWAKOZE */}
              <Link to="/apply" className="btn-primary-large">
                Join the Academy
              </Link>
              <button className="btn-video">
                <div className="play-icon"><FaPlay /></div> Watch our Story
              </button>
            </div>
          </div>
          <div className="hero-visual-content">
            <div className="image-stack">
              <img src={heroImg} alt="Imena Performance" className="primary-hero-img" />
              <div className="stat-floating-card">
                <FaAward className="icon-orange" />
                <div>
                  <strong>Top Academy</strong>
                  <p>Certified 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATISTICS GRID --- */}
      <section className="impact-stats container-h">
        <div className="stat-box"><h3>850+</h3><p>Trained Kids</p></div>
        <div className="stat-box"><h3>24+</h3><p>Choreographers</p></div>
        <div className="stat-box"><h3>15</h3><p>Active Programs</p></div>
        <div className="stat-box"><h3>98%</h3><p>Parent Satisfaction</p></div>
      </section>

      {/* --- DETAILED SERVICES --- */}
      <section className="services-extensive container-h">
        <div className="section-head-centered">
          <span className="subtitle">Core Pillars</span>
          <h2>Our Specialized Training Programs</h2>
          <div className="divider-line"></div>
        </div>
        
        <div className="detailed-grid">
          <article className="service-item">
            <div className="icon-bg"><FaUsers /></div>
            <h4>Advanced Choreography</h4>
            <p>From afrobeat to contemporary, we teach precision, rhythm, and storytelling through dance.</p>
          </article>
          <article className="service-item">
            <div className="icon-bg"><FaDumbbell /></div>
            <h4>Physical Conditioning</h4>
            <p>Developing core strength, flexibility, and endurance specifically tailored for growing bodies.</p>
          </article>
          <article className="service-item">
            <div className="icon-bg"><FaMusic /></div>
            <h4>Rhythm & Sound</h4>
            <p>Training kids to understand music structure, timing, and professional DJ basics.</p>
          </article>
          <article className="service-item">
            <div className="icon-bg"><FaCamera /></div>
            <h4>Stage Presence</h4>
            <p>Preparing performers for the big screen and stage lights with media training.</p>
          </article>
        </div>
      </section>

      {/* --- PROGRAM TIMELINE --- */}
      <section className="timeline-section container-h">
        <div className="timeline-content">
          <h2>Our Learning Journey</h2>
          <div className="timeline-items">
            <div className="t-item">
              <span className="t-step">01</span>
              <div>
                <h5>Foundation Stage</h5>
                <p>Focusing on basic movement, rhythm, and group discipline.</p>
              </div>
            </div>
            <div className="t-item">
              <span className="t-step">02</span>
              <div>
                <h5>Skill Mastery</h5>
                <p>Intensive training in specific dance styles and performance techniques.</p>
              </div>
            </div>
            <div className="t-item">
              <span className="t-step">03</span>
              <div>
                <h5>Elite Performance</h5>
                <p>Joining the main crew for public shows, brand shoots, and competitions.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-visual">
          <div className="glass-overlay-box">
             <h3>Ready to start?</h3>
             <p>Next auditions are on April 15th.</p>
             <Link to="/apply" className="btn-white-outline">
               Apply Now
             </Link>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="testimonials-grid container-h">
        <div className="testimonial-card">
          <FaQuoteLeft className="quote-icon" />
          <p>"Imena Moves transformed my daughter's confidence. She isn't just dancing; she's leading."</p>
          <div className="user-info">
             <strong>Sarah M.</strong>
             <span>Parent</span>
          </div>
        </div>
        <div className="testimonial-card">
          <FaQuoteLeft className="quote-icon" />
          <p>"The discipline taught here extends to their schoolwork. A truly professional organization."</p>
          <div className="user-info">
             <strong>David K.</strong>
             <span>Educational Consultant</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
