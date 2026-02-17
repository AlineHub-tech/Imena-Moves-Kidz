import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/MemberDashboard.css';

// Import your existing components
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

// Inzira nshya y'ububiko (Backend) kuri Render
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';


const MemberDashboard = () => {
  const [stats, setStats] = useState({ 
    totalMembers: 0, 
    present: 0, 
    absent: 0, 
    totalCollabs: 0, 
    announcements: [] 
  });
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Twakuyeho localhost dushyiramo API_BASE nshya
        const res = await axios.get(`${API_BASE}/stats/dashboard`);
        setStats(res.data);
      } catch (err) {
        console.error("Error fetching stats from Render:", err);
      }
    };
    fetchStats();
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="member-dash-container">
      <Navbar />
      
      <main className="member-main">
        <header className="dash-header">
          <div className="header-info">
            <h1>Dashboard Overview</h1>
            <p className="welcome-msg">Muraho! Dore uko ibintu bihagaze uyu munsi.</p>
          </div>
          <div className="time-badge">
             <span className="date">{currentTime.toLocaleDateString()}</span>
             <span className="divider"> | </span>
             <span className="time">{currentTime.toLocaleTimeString()}</span>
          </div>
        </header>

        {/* STATS GRID */}
        <section className="stats-grid">
          <div className="stat-card blue">
            <div className="stat-icon">👥</div>
            <div className="stat-data">
              <h3>Abamember</h3>
              <p className="number">{stats.totalMembers}</p>
            </div>
          </div>
          
          <div className="stat-card green">
            <div className="stat-icon">✅</div>
            <div className="stat-data">
              <h3>Abitabiriye</h3>
              <p className="number">{stats.present}</p>
            </div>
          </div>

          <div className="stat-card red">
            <div className="stat-icon">❌</div>
            <div className="stat-data">
              <h3>Abasibye</h3>
              <p className="number">{stats.absent}</p>
            </div>
          </div>

          <div className="stat-card purple">
            <div className="stat-icon">🤝</div>
            <div className="stat-data">
              <h3>Collaborators</h3>
              <p className="number">{stats.totalCollabs}</p>
            </div>
          </div>
        </section>

        {/* ANNOUNCEMENTS */}
        <section className="ann-section">
          <div className="section-title">
            <span className="icon">📢</span>
            <h3>Amatangazo y'Umunsi</h3>
          </div>
          
          <div className="ann-grid">
            {stats.announcements && stats.announcements.length > 0 ? (
              stats.announcements.map(a => (
                <div key={a._id} className="ann-card">
                  <div className="ann-header">
                    <h4>{a.title}</h4>
                    <span className="ann-date">New</span>
                  </div>
                  <p>{a.content}</p>
                </div>
              ))
            ) : (
              <div className="ann-card">
                <p className="no-data">Nta matangazo mashya ariho uyu munsi.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MemberDashboard;
