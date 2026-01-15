
import React from "react";
import { Link } from 'react-router-dom';
import { FaUsers, FaDumbbell, FaHandshake, FaMusic, FaCamera, FaStar } 
from "react-icons/fa";
import Footer from "../components/Footer"; 
import Navbar from "../components/Navbar"; 
import HeroSlider from "../components/HeroSlider"; 
import "../styles/LandingPage.css";
export default function Landing(){
  return (
    <div className="lp-root">
      
      <Navbar />

      {/* Padding added so content doesn't hide behind fixed Navbar */}
      <div style={{ paddingTop: '70px' }}> 
        <section className="lp-hero-section-wrapper">
          <HeroSlider /> 
          
          <div className="lp-highlights container-h">
              <div className="hp">
                <FaUsers className="hp-icon"/><span>Active Crew</span>
              </div>
              <div className="hp">
                <FaStar className="hp-icon"/><span>Workshops</span>
              </div>
              <div className="hp">
                <FaMusic className="hp-icon"/><span>Music Partners</span>
              </div>
            </div>
        </section>
        <section id="features" className="lp-features container-h">
          <h2>What We Do</h2>
          <div className="features-grid">
            <article className="feature">
              <FaUsers className="ficon"/><h3>Dance Choreography</h3>
              <p>Crafted routines for stage, film and events.</p>
            </article>
            <article className="feature">
              <FaDumbbell className="ficon"/><h3>Fitness & Body Control</h3>
              <p>Conditioning programs for dancers and performers.</p>
            </article>
            <article className="feature">
              <FaHandshake className="ficon"/><h3>Collaboration & Shows</h3>
              <p>Partnering with brands and artists for live events.</p>
            </article>
            <article className="feature">
              <FaMusic className="ficon"/><h3>Music & DJing</h3>
              <p>Sound design and music partnerships for performances.</p>
            </article>
            <article className="feature">
              <FaCamera className="ficon"/><h3>Media & Promotion</h3>
              <p>Photography, videography and social promotion.</p>
            </article>
            <article className="feature">
              <FaStar className="ficon"/><h3>Talent Development</h3>
              <p>Trainings, coaching and talent scouting programs.</p>
            </article>
          </div>
        </section>
        <section id="about" className="lp-about container-h">
          <h2>About Imena Moves</h2>
          <p>
            Imena Moves is a community of performers dedicated to raising the bar
            in motion arts across Rwanda. We run workshops, collaborate on creative
            projects, and produce shows that celebrate talent and discipline.
          </p>
          <Link to="/about" className="btn primary">Join Us</Link>
        </section>
      </div>
      <Footer />
    </div>
  );
}

