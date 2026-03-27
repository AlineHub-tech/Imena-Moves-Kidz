import React from 'react';
import { 
  FaEye, FaRocket, FaHandshake, FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaUserTie, FaHistory, FaCheckCircle, FaUsers, FaGlobe, FaTrophy 
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/AboutUsPage.css';

const AboutUsPage = () => {
  const team = [
    {
      name: "NSANGINEZA Josephate",
      position: "Founder & Owner",
      email: "wejefu@gmail.com",
      tel: "0734961956",
      bio: "A visionary leader committed to empowering Rwandan youth through elite motion arts and cultural excellence."
    },
    {
      name: "Pacifique NIYONDORA",
      position: "Artistic Director",
      email: "pacifiqueniyondora@gmail.com",
      tel: "+250 791 816 222",
      bio: "Expert choreographer driving the creative direction, ensuring every performance meets international standards."
    },
    {
      name: "Catherine IRADUKUNDA",
      position: "Managing Director",
      email: "catherineiradukunda@gmail.com",
      tel: "0739637040",
      bio: "Strategic administrator focused on community growth, partnership management, and seamless operations."
    }
  ];

  return (
    <div className="about-wrapper">
      <Navbar />
      
      {/* 1. PREMIUM HERO SECTION */}
      <section className="about-hero-simple">
        <div className="container-h">
          <span className="top-tag">ESTABLISHED 2026</span>
          <h1>Defining the Future of <br/><span className="text-orange">Motion Arts</span></h1>
          <p className="hero-p">
            Imena Moves Kidz is a premier performing arts organization in Rwanda. 
            We bridge the gap between raw talent and professional excellence.
          </p>
        </div>
      </section>

      {/* 2. STATS OVERVIEW */}
      <section className="about-stats container-h">
        <div className="stat-card-mini"><h3>500+</h3><p>Trained Artists</p></div>
        <div className="stat-card-mini"><h3>12+</h3><p>Major Awards</p></div>
        <div className="stat-card-mini"><h3>50+</h3><p>Partner Brands</p></div>
        <div className="stat-card-mini"><h3>100%</h3><p>Rwandan Owned</p></div>
      </section>

      {/* 3. MISSION, VISION, VALUES */}
      <section className="container-h section-margin">
        <div className="mvv-flex-grid">
          <div className="mvv-item shadow-sm">
            <div className="mvv-icon-circle blue"><FaEye /></div>
            <h3>Our Vision</h3>
            <p>To be the leading performing arts powerhouse in East Africa, exporting Rwandan talent to the global stage.</p>
          </div>
          <div className="mvv-item shadow-sm">
            <div className="mvv-icon-circle green"><FaRocket /></div>
            <h3>Our Mission</h3>
            <p>To nurture talent through world-class coaching, instilling discipline, and creating high-impact performances.</p>
          </div>
          <div className="mvv-item shadow-sm">
            <div className="mvv-icon-circle gold"><FaHandshake /></div>
            <h3>Core Values</h3>
            <p>We stand for Integrity, Creative Innovation, Disciplined Excellence, and Community Empowerment.</p>
          </div>
        </div>
      </section>

      {/* 4. HISTORY / MILESTONES */}
      <section className="history-section">
        <div className="container-h">
          <div className="history-header">
            <FaHistory className="text-orange" />
            <h2>Our Journey</h2>
          </div>
          <div className="timeline">
            <div className="timeline-point">
              <h4>2024</h4>
              <p>Imena Moves was officially founded in Kigali-Kabuga with 20 pioneer dancers.</p>
            </div>
            <div className="timeline-point">
              <h4>2025</h4>
              <p>Launched the "Kidz Academy" program, reaching over 200+ students in 6 months.</p>
            </div>
            <div className="timeline-point active">
              <h4>2026</h4>
              <p>Expanding to international collaborations and professional sound production.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP TEAM */}
      <section className="team-section container-h section-margin">
        <div className="section-title-box">
          <h2>The Board of Directors</h2>
          <p>Meet the minds behind the movement.</p>
        </div>
        <div className="leadership-grid">
          {team.map((m, i) => (
            <div key={i} className="member-card-new">
              <div className="member-top">
                <FaUserTie className="avatar-icon" />
              </div>
              <div className="member-info">
                <h3>{m.name}</h3>
                <span className="m-pos">{m.position}</span>
                <p className="m-bio">{m.bio}</p>
                <div className="m-contact">
                  <a href={`mailto:${m.email}`}><FaEnvelope /> Email</a>
                  <a href={`tel:${m.tel}`}><FaPhone /> Call</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WHY WE ARE UNIQUE */}
      <section className="unique-benefits section-margin">
        <div className="container-h benefit-flex">
          <div className="benefit-text">
            <h2>Why Imena Moves Stands Out</h2>
            <div className="benefit-item">
              <FaCheckCircle /> 
              <div>
                <strong>Global Curriculum:</strong> Our training modules follow international choreography standards.
              </div>
            </div>
            <div className="benefit-item">
              <FaCheckCircle /> 
              <div>
                <strong>Holistic Development:</strong> We focus on the child's academic discipline as much as their dance skill.
              </div>
            </div>
            <div className="benefit-item">
              <FaCheckCircle /> 
              <div>
                <strong>Modern Facilities:</strong> Training in safe, professional environments located in Kigali-Kabuga.
              </div>
            </div>
          </div>
          <div className="benefit-visual">
             <div className="benefit-box shadow">
                <FaTrophy className="big-icon" />
                <p>Award Winning Methodology</p>
             </div>
          </div>
        </div>
      </section>

      {/* 7. QUICK CONTACT CARD */}
      <section className="container-h section-margin">
        <div className="final-contact-card">
          <div className="f-text">
            <h2>Let's Build the Future Together</h2>
            <p>Partner with us, join our academy, or book a performance.</p>
          </div>
          <div className="f-info">
            <div className="f-item"><FaMapMarkerAlt /> Kigali-Kabuga, Rwanda</div>
            <div className="f-item"><FaPhone /> +250 734 961 956</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
