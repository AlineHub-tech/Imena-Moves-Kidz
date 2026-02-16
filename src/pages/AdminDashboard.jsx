import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUserPlus, FaClipboardCheck, FaHandshake, FaBullhorn, FaTrash, FaPlusCircle } from 'react-icons/fa';
import '../styles/AdminDashboard.css'; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// HINDURA IYI LINK USHYIREMO IYA RENDER YAWE NYAYO
const API_URL = "https://imena-backend.onrender.com"; 

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('members');
  const [members, setMembers] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [collaborators, setCollaborators] = useState([]);
  
  // Form States
  const [newMember, setNewMember] = useState({ name: '', phone: '', role: '' });
  const [newCollab, setNewCollab] = useState({ name: '', role: '', email: '' });
  const [newAnnounce, setNewAnnounce] = useState({ title: '', content: '' });

  // 1. Gukura amakuru yose (Fetch Data)
  const fetchData = async () => {
    try {
      const [resM, resA, resC] = await Promise.all([
        axios.get(`${API_URL}/members`),
        axios.get(`${API_URL}/announcements`),
        axios.get(`${API_URL}/collaborators`)
      ]);
      setMembers(resM.data);
      setAnnouncements(resA.data);
      setCollaborators(resC.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => { fetchData(); }, []);

  // --- CRUD FUNCTIONS ---

  const handleAdd = async (e, endpoint, data, resetFn) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/${endpoint}`, data);
      alert(`${endpoint} yongeweho neza!`);
      resetFn();
      fetchData();
    } catch (err) { alert("Byanze! Reba niba backend yaka."); }
  };

  const handleDelete = async (endpoint, id) => {
    if (window.confirm("Ese urashaka gusiba uyu mwirondoro?")) {
      try {
        await axios.delete(`${API_URL}/${endpoint}/${id}`);
        fetchData();
      } catch (err) { alert("Gusiba byanze!"); }
    }
  };

  // --- ATTENDANCE LOGIC ---
  const [attendanceList, setAttendanceList] = useState({});

  const submitAttendance = async () => {
    const today = new Date().toISOString().split('T')[0];
    const records = members.map(m => ({
      memberId: m._id,
      status: attendanceList[m._id] || 'Absent'
    }));
    try {
      await axios.post(`${API_URL}/attendance`, { date: today, records });
      alert("Attendance yabitswe neza!");
    } catch (err) { alert("Attendance yanze!"); }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'members':
        return (
          <div className="admin-section">
            <h3><FaUserPlus /> Member Management</h3>
            <form className="admin-form" onSubmit={(e) => handleAdd(e, 'members', newMember, () => setNewMember({name:'', phone:'', role:''}))}>
              <input type="text" placeholder="Full Name" value={newMember.name} onChange={e => setNewMember({...newMember, name: e.target.value})} required />
              <input type="text" placeholder="Phone Number" value={newMember.phone} onChange={e => setNewMember({...newMember, phone: e.target.value})} required />
              <input type="text" placeholder="Role (e.g. Dancer)" value={newMember.role} onChange={e => setNewMember({...newMember, role: e.target.value})} required />
              <button type="submit" className="admin-btn-primary">Save Member</button>
            </form>
            <div className="data-table">
              {members.map(m => (
                <div key={m._id} className="data-row">
                  <span>{m.name} - <b>{m.role}</b></span>
                  <FaTrash className="delete-icon" onClick={() => handleDelete('members', m._id)} />
                </div>
              ))}
            </div>
          </div>
        );
      case 'attendance':
        return (
          <div className="admin-section">
            <h3><FaClipboardCheck /> Daily Attendance</h3>
            <p>Itariki: {new Date().toDateString()}</p>
            <div className="attendance-list">
              {members.map(m => (
                <div key={m._id} className="attendance-row">
                  <span>{m.name}</span>
                  <select onChange={(e) => setAttendanceList({...attendanceList, [m._id]: e.target.value})}>
                    <option value="Absent">Absent</option>
                    <option value="Present">Present</option>
                  </select>
                </div>
              ))}
            </div>
            <button onClick={submitAttendance} className="admin-btn-secondary">Submit Attendance</button>
          </div>
        );
      case 'collaborators':
        return (
          <div className="admin-section">
            <h3><FaHandshake /> Collaborators</h3>
            <form className="admin-form" onSubmit={(e) => handleAdd(e, 'collaborators', newCollab, () => setNewCollab({name:'', role:'', email:''}))}>
              <input type="text" placeholder="Company/Name" value={newCollab.name} onChange={e => setNewCollab({...newCollab, name: e.target.value})} required />
              <input type="text" placeholder="Role" value={newCollab.role} onChange={e => setNewCollab({...newCollab, role: e.target.value})} required />
              <button type="submit" className="admin-btn-primary">Save Collaborator</button>
            </form>
            <div className="data-table">
              {collaborators.map(c => (
                <div key={c._id} className="data-row">
                  <span>{c.name} ({c.role})</span>
                  <FaTrash className="delete-icon" onClick={() => handleDelete('collaborators', c._id)} />
                </div>
              ))}
            </div>
          </div>
        );
      case 'announcements':
        return (
          <div className="admin-section">
            <h3><FaBullhorn /> Post Announcement</h3>
            <form className="admin-form" onSubmit={(e) => handleAdd(e, 'announcements', newAnnounce, () => setNewAnnounce({title:'', content:''}))}>
              <input type="text" placeholder="Title" value={newAnnounce.title} onChange={e => setNewAnnounce({...newAnnounce, title: e.target.value})} required />
              <textarea placeholder="Message..." value={newAnnounce.content} onChange={e => setNewAnnounce({...newAnnounce, content: e.target.value})} required />
              <button type="submit" className="admin-btn-primary">Post to Dashboard</button>
            </form>
            <div className="data-table">
              {announcements.map(a => (
                <div key={a._id} className="data-row">
                  <span>{a.title}</span>
                  <FaTrash className="delete-icon" onClick={() => handleDelete('announcements', a._id)} />
                </div>
              ))}
            </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="admin-dashboard-container">
        <aside className="admin-sidebar">
          <div className="sidebar-header">Admin Panel</div>
          <nav className="admin-nav">
            <button className={activeTab === 'members' ? 'active' : ''} onClick={() => setActiveTab('members')}><FaUserPlus /> Members</button>
            <button className={activeTab === 'attendance' ? 'active' : ''} onClick={() => setActiveTab('attendance')}><FaClipboardCheck /> Attendance</button>
            <button className={activeTab === 'collaborators' ? 'active' : ''} onClick={() => setActiveTab('collaborators')}><FaHandshake /> Collaborators</button>
            <button className={activeTab === 'announcements' ? 'active' : ''} onClick={() => setActiveTab('announcements')}><FaBullhorn /> Announcements</button>
          </nav>
        </aside>
        <main className="admin-main-content">
          {renderContent()}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
