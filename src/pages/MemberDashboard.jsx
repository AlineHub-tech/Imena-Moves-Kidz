import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
    FaUsers, 
    FaHandshake, 
    FaCheckCircle, 
    FaTimesCircle, 
    FaCalendarAlt, 
    FaClock, 
    FaBullhorn 
} from 'react-icons/fa';
import '../styles/MemberDashboard.css'; 
import Footer from "../components/Footer"; 
import Navbar from "../components/Navbar";

// HINDURA IYI LINK USHYIREMO IYA RENDER YAWE NYAYO
const API_URL = "https://imena-backend.onrender.com"; 

const MemberDashboard = () => {
    const [stats, setStats] = useState({
        totalMembers: 0,
        totalCollaborators: 0,
        presentToday: 0,
        absentToday: 0,
        lastUpdated: ''
    });
    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchDashboardData = async () => {
        try {
            // Niba ari ubwa mbere, loading iba true
            const [statsRes, annRes] = await Promise.all([
                axios.get(`${API_URL}/dashboard-stats`),
                axios.get(`${API_URL}/announcements`)
            ]);

            setStats(statsRes.data);
            setAnnouncements(annRes.data);
            setError(null);
        } catch (err) {
            console.error("Error fetching dashboard data:", err);
            setError("Ntabwo dushoboye gukura amakuru kuri server. Reba niba backend yaka.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDashboardData();
        
        // Kwivugurura buri minota 2 (Optional)
        const interval = setInterval(fetchDashboardData, 120000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className="loading-container">
                <Navbar />
                <div className="loading-content">
                    <div className="spinner"></div>
                    <p>Turi gushaka amakuru mashya kuri Imena Moves...</p>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="member-dashboard-wrapper">
            <Navbar />
            
            <div className="member-dashboard-layout"> 
                <header className="dashboard-header">
                    <h2><FaUsers /> Imena Moves Member Dashboard</h2>
                    <p>Murakaza neza! Dore amakuru mashya agezweho muri club yacu.</p>
                </header>
      
                {error && <div className="error-alert">{error}</div>}

                {/* Stats Cards */}
                <div className="stats-grid">
                    <div className="stat-card blue">
                        <FaUsers className="icon" />
                        <div className="stat-info">
                            <h3>{stats.totalMembers}</h3>
                            <p>Abanyamuryango</p>
                        </div>
                    </div>
                    <div className="stat-card green">
                        <FaHandshake className="icon" />
                        <div className="stat-info">
                            <h3>{stats.totalCollaborators}</h3>
                            <p>Abafatanyabikorwa</p>
                        </div>
                    </div>
                    <div className="stat-card present">
                        <FaCheckCircle className="icon" />
                        <div className="stat-info">
                            <h3>{stats.presentToday}</h3>
                            <p>Abari bahari (Uyu munsi)</p>
                        </div>
                    </div>
                    <div className="stat-card absent">
                        <FaTimesCircle className="icon" />
                        <div className="stat-info">
                            <h3>{stats.absentToday}</h3>
                            <p>Abataraje (Uyu munsi)</p>
                        </div>
                    </div>
                </div>
                
                <div className="last-update">
                    <FaCalendarAlt /> <FaClock /> <span>Amakuru yaherutse kuvugururwa: {stats.lastUpdated || "Nta makuru"}</span>
                </div>

                {/* Announcements Section */}
                <section className="announcements-section">
                    <div className="section-title">
                        <FaBullhorn /> <h3>Amatangazo Mashya</h3>
                    </div>
                    
                    {announcements.length > 0 ? (
                        <div className="announcements-container">
                            {announcements.map((ann) => (
                                <div key={ann._id} className="announcement-card">
                                    <div className="card-header">
                                        <h4>{ann.title}</h4>
                                        <span className="announcement-date">
                                            {new Date(ann.date).toLocaleDateString('rw-RW', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                    <div className="card-body">
                                        <p>{ann.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="empty-announcements">
                            <p>Nta tangazo rishya rihari uyu munsi.</p>
                        </div>
                    )}
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default MemberDashboard;
