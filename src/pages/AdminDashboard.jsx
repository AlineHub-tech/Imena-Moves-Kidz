import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AdminDashboard.css';

import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';


const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('members');
  const [data, setData] = useState([]);
  const [members, setMembers] = useState([]);
  const [attendanceRecords, setAttendanceRecords] = useState({});
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({ 
    name: '', phone: '', age: '', parentName: '', role: '', title: '', content: '' 
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchData();
    // Iyo uhinduye tab, siba ibyari muri form
    setFormData({ name: '', phone: '', age: '', parentName: '', role: '', title: '', content: '' });
    setEditingId(null);
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const endpoint = activeTab === 'attendance' ? 'members' : activeTab;
      const res = await axios.get(`${API_BASE}/${endpoint}`);
      setData(res.data);
      if (activeTab === 'attendance' || activeTab === 'members') setMembers(res.data);
    } catch (err) { 
      console.error("Habaye ikosa mu gufata data:", err); 
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // UPDATE: Menya neza ko endpoint yawe ku backend ari /api/announcements/:id
        await axios.put(`${API_BASE}/${activeTab}/${editingId}`, formData);
        alert("Byahinduwe neza!");
      } else {
        // CREATE
        await axios.post(`${API_BASE}/${activeTab}`, formData);
        alert("Byajyanyweyo neza!");
      }
      setFormData({ name: '', phone: '', age: '', parentName: '', role: '', title: '', content: '' });
      setEditingId(null);
      fetchData();
    } catch (err) { 
      console.error(err);
      alert("Habaye ikosa mu kubika!"); 
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Urataka gusiba uyu murongo?")) {
      try {
        await axios.delete(`${API_BASE}/${activeTab}/${id}`);
        fetchData();
      } catch (err) {
        alert("Gusiba byanze!");
      }
    }
  };

  const handleAttendanceChange = (id, status) => {
    setAttendanceRecords({ ...attendanceRecords, [id]: status });
  };

  const saveAttendance = async () => {
    try {
      const date = new Date().toISOString().split('T')[0];
      const records = Object.keys(attendanceRecords).map(id => ({ memberId: id, status: attendanceRecords[id] }));
      await axios.post(`${API_BASE}/attendance`, { date, records });
      alert("Attendance yabitswe neza!");
    } catch (err) {
      alert("Attendance ntiyabitswe!");
    }
  };

  return (
    <div className="admin-container">
      <Navbar />

      <div className="admin-body">
        <aside className="sidebar">
          <button className={activeTab === 'members' ? 'active' : ''} onClick={() => setActiveTab('members')}>Members</button>
          <button className={activeTab === 'attendance' ? 'active' : ''} onClick={() => setActiveTab('attendance')}>Attendance</button>
          <button className={activeTab === 'collaborators' ? 'active' : ''} onClick={() => setActiveTab('collaborators')}>Collaborators</button>
          <button className={activeTab === 'announcements' ? 'active' : ''} onClick={() => setActiveTab('announcements')}>Announcements</button>
        </aside>

        <main className="main-content">
          <div className="card shadow">
            <h2>Gucunga {activeTab.toUpperCase()}</h2>
            
            {activeTab !== 'attendance' && (
              <form onSubmit={handleSubmit} className="crud-form">
                {activeTab === 'members' || activeTab === 'collaborators' ? (
                  <>
                    <input type="text" placeholder="Izina" value={formData.name || ''} onChange={e => setFormData({...formData, name: e.target.value})} required />
                    <input type="text" placeholder="Telefone" value={formData.phone || ''} onChange={e => setFormData({...formData, phone: e.target.value})} required />
                    {activeTab === 'collaborators' && <input type="text" placeholder="Role/Inshingano" value={formData.role || ''} onChange={e => setFormData({...formData, role: e.target.value})} />}
                  </>
                ) : (
                  <>
                    <input type="text" placeholder="Umutwe w'itangazo" value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} required />
                    <textarea placeholder="Ibirimo..." value={formData.content || ''} onChange={e => setFormData({...formData, content: e.target.value})} required />
                  </>
                )}
                <button type="submit" className="btn-submit">{editingId ? 'Vugurura' : 'Ongeramo'}</button>
                {editingId && <button type="button" onClick={() => {setEditingId(null); setFormData({name:'', phone:'', title:'', content:''})}} className="btn-cancel">Kurekera</button>}
              </form>
            )}

            {loading ? <p>Tegereza gato...</p> : (
              activeTab === 'attendance' ? (
                <div className="attendance-box">
                  <table className="custom-table">
                    <thead>
                      <tr><th>Izina</th><th>Present</th><th>Absent</th></tr>
                    </thead>
                    <tbody>
                      {members.map(m => (
                        <tr key={m._id}>
                          <td>{m.name}</td>
                          <td><input type="radio" name={m._id} onChange={() => handleAttendanceChange(m._id, 'present')} /></td>
                          <td><input type="radio" name={m._id} onChange={() => handleAttendanceChange(m._id, 'absent')} /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button onClick={saveAttendance} className="btn-save-attendance">Bika Attendance y'Umunsi</button>
                </div>
              ) : (
                <table className="custom-table">
                  <thead>
                    <tr><th>Izina / Umutwe</th><th>Ibindi</th><th>Actions</th></tr>
                  </thead>
                  <tbody>
                    {data.map(item => (
                      <tr key={item._id}>
                        <td>{item.name || item.title}</td>
                        <td>{item.phone || (item.content ? item.content.substring(0, 20) + "..." : "")}</td>
                        <td>
                          <button className="btn-edit" onClick={() => {setEditingId(item._id); setFormData(item);}}>Edit</button>
                          <button className="btn-delete" onClick={() => handleDelete(item._id)}>Siba</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
            )}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
