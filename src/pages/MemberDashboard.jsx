import React from 'react';
import { FaUsers, FaHandshake, FaCheckCircle, FaTimesCircle, FaCalendarAlt, FaClock } from 'react-icons/fa';
import '../styles/MemberDashboard.css'; 
import Footer from "../components/Footer"; 
import Navbar from "../components/Navbar";

const MemberDashboard = () => {
    const stats = {
        totalMembers: 45,
        totalCollaborators: 12,
        presentToday: 38,
        absentToday: 7,
        lastUpdated: new Date().toLocaleString(),
    };

    const announcements = [
        { id: 1, title: "Next practice on Friday", content: "Don't forget to wear your green uniform. Starts at 4 PM sharp.", date: "Today" },
        { id: 2, title: "New collaboration opportunity!", content: "We have a new partnership with XYZ studio. More details soon.", date: "Yesterday" },
    ];

    return (
        <>
            <Navbar /> 
            <div className="member-dashboard-layout" style={{ marginTop: '-2%' }}> 
                   
                <h2>Imena Moves Member Dashboard</h2>
                <p>Welcome back! Here are the latest updates.</p>
    
                <div className="stats-grid">
                    <div className="stat-card blue">
                        <FaUsers className="icon" />
                        <h3>{stats.totalMembers}</h3>
                        <p>Total Members</p>
                    </div>
                    <div className="stat-card green">
                        <FaHandshake className="icon" />
                        <h3>{stats.totalCollaborators}</h3>
                        <p>Total Collaborators</p>
                    </div>
                    <div className="stat-card present">
                        <FaCheckCircle className="icon" />
                        <h3>{stats.presentToday}</h3>
                        <p>Attended Today</p>
                    </div>
                    <div className="stat-card absent">
                        <FaTimesCircle className="icon" />
                        <h3>{stats.absentToday}</h3>
                        <p>Absent Today</p>
                    </div>
                </div>
                
                <p className="update-info"><FaCalendarAlt /> <FaClock /> Last update: {stats.lastUpdated}</p>
                <div className="announcements-section">
                    <h3>Latest Announcements</h3>
                    {announcements.map(ann => (
                        <div key={ann.id} className="announcement-card">
                            <h4>{ann.title}</h4>
                            <p>{ann.content}</p>
                            <span className="announcement-date">{ann.date}</span>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/> 
        </>
    );
};

export default MemberDashboard;

