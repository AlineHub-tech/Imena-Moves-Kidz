import React from 'react';
import { FaEye, FaRocket, FaHandshake, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserTie } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/AboutUsPage.css';

const AboutUsPage = () => {
  const team = [
    {
      name: "NSANGINEZA Josephate",
      position: "Owner",
      email: "wejefu@gmail.com",
      tel: "0734961956",
      bio: "Visionary leader committed to empowering youth through motion arts and cultural excellence."
    },
    {
      name: "Pacifique NIYONDEORA",
      position: "Director",
      email: "pacifiqueniyondora@gmail.com",
      tel: "+250 791 816 222",
      bio: "Expert choreographer driving the artistic direction and professional growth of Imena Moves."
    },
    {
      name: "Catherine IRADUKUNDA",
      position: "Managing Director",
      email: "catherineiradukunda@gmail.com",
      tel: "0739637040",
      bio: "Strategic administrator ensuring seamless operations and community impact."
    }
  ];

  return (
    <div className="page-wrapper">
      <Navbar />
      
      <main className="about-main">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <h1>About Imena Moves</h1>
            <p>
              Imena Moves is a dynamic community of performers dedicated to raising the bar
              in motion arts across Rwanda. Founded in 2023, we provide a platform for
              young talent to flourish through discipline and creativity.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="container section-padding">
          <div className="mvv-grid">
            <div className="mvv-card shadow">
              <div className="icon-box blue"><FaEye /></div>
              <h3>Our Vision</h3>
              <p>To be the leading performing arts group in East Africa, celebrating Rwandan culture globally.</p>
            </div>
            <div className="mvv-card shadow">
              <div className="icon-box green"><FaRocket /></div>
              <h3>Our Mission</h3>
              <p>To nurture talent, instill discipline, and create breathtaking performances that inspire change.</p>
            </div>
            <div className="mvv-card shadow">
              <div className="icon-box gold"><FaHandshake /></div>
              <h3>Our Values</h3>
              <p>Discipline, Creativity, Collaboration, Integrity, and Community Impact.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-bg section-padding">
          <div className="container">
            <h2 className="section-title">Leadership Team</h2>
            <div className="team-grid">
              {team.map((member, index) => (
                <div key={index} className="team-card shadow">
                  <div className="member-avatar">
                    <FaUserTie />
                  </div>
                  <h3>{member.name}</h3>
                  <p className="position">{member.position}</p>
                  <p className="bio">{member.bio}</p>
                  <div className="member-contact">
                    <a href={`mailto:${member.email}`}><FaEnvelope /> {member.email}</a>
                    <a href={`tel:${member.tel}`}><FaPhone /> {member.tel}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="container section-padding">
          <div className="contact-card shadow">
            <h2>Get In Touch</h2>
            <div className="contact-flex">
              <div className="c-item"><FaMapMarkerAlt /> <span>Kigali-kabuga</span></div>
              <div className="c-item"><FaPhone /> <span>+250 734961956</span></div>
              <div className="c-item"><FaEnvelope /> <span>Email:wejefu@gmail.com</span></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
