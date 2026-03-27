import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/MemberDashboard.css';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

const MemberDashboard = () => {
  const [stats, setStats] = useState({ 
    totalMembers: 0, 
    present: 0, 
    absent: 0, 
    totalCollabs: 0, 
    announcements: [] 
  });
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  const fetchStats = async () => {
    try {
      // Guhamagara backend ihuza amakuru yose (StatsRouter)
      const res = await axios.get(`${API_BASE}/stats/dashboard`);
      setStats(res.data);
    } catch (err) {
      console.error("Error fetching stats:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
    // Refresh amakuru buri minota 5 cyangwa igihe ufunguye page
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
            <p className="welcome-msg">
              Uyu munsi ni ku wa: <strong>{currentTime.toLocaleDateString('fr-FR')}</strong>
            </p>
          </div>
          <div className="time-badge">
             <span className="time">{currentTime.toLocaleTimeString()}</span>
          </div>
        </header>

        {loading ? (
          <div className="loader-container">
            <div className="simple-loader"></div>
            <p>Turi gushaka amakuru mashya...</p>
          </div>
        ) : (
          <>
            {/* STATS GRID - IYI NIBYO WIFUZAGA KO BIHINDUKA */}
            <section className="stats-grid">
              <div className="stat-card blue shadow-sm">
                <div className="stat-icon">👥</div>
                <div className="stat-data">
                  <h3>Abamember bose</h3>
                  <p className="number">{stats.totalMembers}</p>
                </div>
              </div>
              
              <div className="stat-card green shadow-sm">
                <div className="stat-icon">✅</div>
                <div className="stat-data">
                  <h3>Abitabiriye (Today)</h3>
                  <p className="number">{stats.present}</p>
                </div>
              </div>

              <div className="stat-card red shadow-sm">
                <div className="stat-icon">❌</div>
                <div className="stat-data">
                  <h3>Abasibye (Today)</h3>
                  <p className="number">{stats.absent}</p>
                </div>
              </div>

              <div className="stat-card purple shadow-sm">
                <div className="stat-icon">🤝</div>
                <div className="stat-data">
                  <h3>Collaborators</h3>
                  <p className="number">{stats.totalCollabs}</p>
                </div>
              </div>
            </section>

            {/* ANNOUNCEMENTS - IHERUKA IZA MBERE */}
            <section className="ann-section">
              <div className="section-title">
                <span className="icon">📢</span>
                <h3>Amatangazo Mashya ({stats.announcements.length})</h3>
              </div>
              
              <div className="ann-grid">
                {stats.announcements && stats.announcements.length > 0 ? (
                  stats.announcements.map((a, index) => (
                    <div key={a._id} className="ann-card animate-in">
                      <div className="ann-header">
                        <h4>{a.title}</h4>
                        {/* Kwerekana itariki itangazo ryatangiweho */}
                        <span className="ann-date">
                          {new Date(a.createdAt).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                      <p className="ann-content">{a.content}</p>
                      {index === 0 && <span className="latest-badge">Newest</span>}
                    </div>
                  ))
                ) : (
                  <div className="ann-card no-data-card">
                    <p className="no-data">Nta matangazo mashya ariho uyu munsi.</p>
                  </div>
                )}
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default MemberDashboard;
