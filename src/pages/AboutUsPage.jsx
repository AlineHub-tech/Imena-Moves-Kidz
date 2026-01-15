import React from 'react';
import { FaEye, FaRocket, FaHandshake, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/AboutUsPage.css'; 
import { teamMembers } from '../data/teamData'; 

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-us-container" style={{ marginTop: '10px' }}> 
        <section className="about-hero">
          <div className="container about-hero-inner">
            <h1>About Imena Moves</h1>
            <p>
              Imena Moves is a dynamic community of performers dedicated to raising the bar
              in motion arts across Rwanda. Founded in 2023, we provide a platform for
              young talent to flourish, offering comprehensive training, professional
              choreography, and extensive collaboration opportunities.
            </p>
          </div>
        </section>
        <section className="mvv-section container">
          <div className="card-grid">
            <div className="mvv-card">
              <FaEye className="mvv-icon blue-icon" />
              <h3>Our Vision</h3>
              <p>To be the leading performing arts group in East Africa, celebrating Rwandan culture globally.</p>
            </div>
            <div className="mvv-card">
              <FaRocket className="mvv-icon green-icon" />
              <h3>Our Mission</h3>
              <p>To nurture talent, instill discipline, and create breathtaking performances that inspire change and movement.</p>
            </div>
            <div className="mvv-card">
              <FaHandshake className="mvv-icon yellow-icon" />
              <h3>Our Values</h3>
              <p>Discipline, Creativity, Collaboration, Integrity, and Community Impact.</p>
            </div>
          </div>
        </section>
        <section className="team-section container">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
               <img src={member.imgUrl} alt={member.name} className="team-img" /> 
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-contact">
                  <p><FaEnvelope /> {member.email}</p>
                  <p><FaPhone /> {member.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="contact-section container">
            <h2>Get In Touch</h2>
            <div className="contact-details">
                <p><FaMapMarkerAlt className="contact-icon" /> Kigali, Rwanda, KN 123 St</p>
                <p><FaPhone className="contact-icon" /> +250 791 816 222</p>
                <p><FaEnvelope className="contact-icon" /> info@imenamoves.com</p>
            </div>
        </section>

      </div>
      <Footer />
    </>
  );
};


export default AboutUsPage;
