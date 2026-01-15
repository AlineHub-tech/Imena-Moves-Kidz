import React, { useState } from 'react';
import { FaUserPlus, FaClipboardCheck, FaHandshake, FaBullhorn, FaUsers } from 'react-icons/fa';
import '../styles/AdminDashboard.css'; 
import Footer from "../components/Footer"; 
import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('members');
  const [newMember, setNewMember] = useState({ name: '', phone: '', role: '' });
  const [newCollaborator, setNewCollaborator] = useState({ name: '', role: '' });
  const [newAnnouncement, setNewAnnouncement] = useState({ title: '', content: '' });
  const handleAddMember = (e) => { e.preventDefault(); console.log("Adding member:", newMember); alert("Member added (simulated)"); };
  const handleAddCollaborator = (e) => { e.preventDefault(); console.log("Adding collaborator:", newCollaborator); alert("Collaborator added (simulated)"); };
  const handleAddAnnouncement = (e) => { e.preventDefault(); console.log("Adding announcement:", newAnnouncement); alert("Announcement posted (simulated, to member dashboard)"); };
  const handleAttendance = () => { alert("Attendance recorded for today (simulated)."); };

  const renderContent = () => {
    switch (activeTab) {
      case 'members':
        return (
          <div className="admin-form-container">
            <h3>Add New Member (CRUD)</h3>
            <p>You need a full CRUD table here for view/edit/delete members.</p>
            <form onSubmit={handleAddMember}>
              <input type="text" placeholder="Full Name" required onChange={e => setNewMember({...newMember, name: e.target.value})} />
              <input type="text" placeholder="Phone Number" required onChange={e => setNewMember({...newMember, phone: e.target.value})} />
              <input type="text" placeholder="Role (e.g., Dancer)" required onChange={e => setNewMember({...newMember, role: e.target.value})} />
              <button type="submit" className="admin-btn-primary">Save Member</button>
            </form>
          </div>
        );
      case 'attendance':
        return (
          <div className="admin-form-container">
            <h3>Record Today's Attendance</h3>
            <p>Display all members here with a checkbox/toggle for Present (1) or Absent (0).</p>
            <div className="attendance-item">
                <span>John Doe</span>
                <input type="checkbox" defaultChecked /> Present (1)
                <button onClick={handleAttendance} className="admin-btn-secondary">Submit Attendance</button>
            </div>
          </div>
        );
      case 'collaborators':
        return (
          <div className="admin-form-container">
            <h3>Add New Collaborator/Leader (CRUD)</h3>
             <form onSubmit={handleAddCollaborator}>
              <input type="text" placeholder="Full Name" required onChange={e => setNewCollaborator({...newCollaborator, name: e.target.value})} />
              <input type="text" placeholder="Role (e.g., Choreographer)" required onChange={e => setNewCollaborator({...newCollaborator, role: e.target.value})} />
              <button type="submit" className="admin-btn-primary">Save Collaborator</button>
            </form>
          </div>
        );
      case 'announcements':
        return (
          <div className="admin-form-container">
            <h3>Post an Announcement</h3>
             <form onSubmit={handleAddAnnouncement}>
              <input type="text" placeholder="Title" required onChange={e => setNewAnnouncement({...newAnnouncement, title: e.target.value})} />
              <textarea placeholder="Content..." rows={4} required onChange={e => setNewAnnouncement({...newAnnouncement, content: e.target.value})} />
              <button type="submit" className="admin-btn-primary">Post to Dashboard</button>
            </form>
          </div>
        );
      default:
        return <div>Select an option from the menu.</div>;
    }
  };

  return (
    <>
      <Navbar />
      <div className="admin-dashboard-layout" style={{ marginTop: '-1%' }}> 
        <aside className="admin-sidebar">
          <h2>Admin Panel</h2>
          <nav className="admin-nav">
            <button onClick={() => setActiveTab('members')} className={activeTab === 'members' ? 'active' : ''}>
              <FaUserPlus /> Members Management
            </button>
            <button onClick={() => setActiveTab('attendance')} className={activeTab === 'attendance' ? 'active' : ''}>
              <FaClipboardCheck /> Attendance
            </button>
            <button onClick={() => setActiveTab('collaborators')} className={activeTab === 'collaborators' ? 'active' : ''}>
              <FaHandshake /> Collaborators
            </button>
            <button onClick={() => setActiveTab('announcements')} className={activeTab === 'announcements' ? 'active' : ''}>
              <FaBullhorn /> Announcements
            </button>
          </nav>
        </aside>
        <main className="admin-content">
          {renderContent()}
        </main>
      </div>
      <Footer /> 
    </>
  );
};

export default AdminDashboard;

