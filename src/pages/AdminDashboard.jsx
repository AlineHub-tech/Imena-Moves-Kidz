import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUsers, FaClipboardCheck, FaHandshake, FaBullhorn, FaSave, FaEdit, FaTrash } from 'react-icons/fa';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';
import '../styles/AdminDashboard.css';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('members');
  const [data, setData] = useState([]);
  const [attendanceRecords, setAttendanceRecords] = useState({});
  const [loading, setLoading] = useState(false);
  
  // 1. HKOSORA 400: Twongeyemo parentName na age muri state
  const [formData, setFormData] = useState({ 
    name: '', phone: '', role: '', title: '', content: '', age: '', parentName: '' 
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchData();
    setFormData({ name: '', phone: '', role: '', title: '', content: '', age: '', parentName: '' });
    setEditingId(null);
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const endpoint = activeTab === 'attendance' ? 'members' : activeTab;
      const res = await axios.get(`${API_BASE}/${endpoint}`);
      setData(res.data);
    } catch (err) { 
      console.error("Ikosa mu gufata data:", err); 
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Reba niba turi muri members maze upake amakuru yose asabwa (Kwirinda 400)
      const payload = activeTab === 'members' ? {
        ...formData,
        age: formData.age || 0,
        parentName: formData.parentName || "Ntabwo yanditse"
      } : formData;

      if (editingId) {
        await axios.put(`${API_BASE}/${activeTab}/${editingId}`, payload);
        alert("Byahinduwe neza!");
      } else {
        await axios.post(`${API_BASE}/${activeTab}`, payload);
        alert("Byajyanyweyo neza!");
      }
      setFormData({ name: '', phone: '', role: '', title: '', content: '', age: '', parentName: '' });
      setEditingId(null);
      fetchData();
    } catch (err) { 
      console.error("Error response:", err.response?.data);
      alert("Habaye ikosa: " + (err.response?.data?.message || "Reba niba imyanya yose yuzuye")); 
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

  // 2. HKOSORA 404: Menya neza ko endpoint ari /api/attendance
  const saveAttendanceToHistory = async () => {
    const today = new Date();
    const dateStr = today.toLocaleDateString('fr-FR'); 
    const timeStr = today.getHours() + ":" + today.getMinutes().toString().padStart(2, '0');

    const presentList = data
      .filter(m => attendanceRecords[m._id] === 'present')
      .map(m => m.name);
    
    const absentList = data
      .filter(m => attendanceRecords[m._id] === 'absent')
      .map(m => m.name);

    if (presentList.length === 0 && absentList.length === 0) {
      return alert("Banze ugaragaze abariyo n'abasibye!");
    }

    const historyPayload = {
      date: dateStr,
      time: timeStr,
      presentCount: presentList.length,
      absentCount: absentList.length,
      presentList,
      absentList
    };

    try {
      await axios.post(`${API_BASE}/attendance`, historyPayload);
      alert("Raporo y'amateka (History) yabitswe neza!");
    } catch (err) {
      console.error("History Error:", err.response?.data);
      alert("Ikosa mu kubika History! Reba niba Backend yawe iri 'Live'");
    }
  };

  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-body">
        <aside className="sidebar">
          <div className="sidebar-title">MENU</div>
          <button className={activeTab === 'members' ? 'active' : ''} onClick={() => setActiveTab('members')}><FaUsers /> Members</button>
          <button className={activeTab === 'attendance' ? 'active' : ''} onClick={() => setActiveTab('attendance')}><FaClipboardCheck /> Attendance</button>
          <button className={activeTab === 'collaborators' ? 'active' : ''} onClick={() => setActiveTab('collaborators')}><FaHandshake /> Partners</button>
          <button className={activeTab === 'announcements' ? 'active' : ''} onClick={() => setActiveTab('announcements')}><FaBullhorn />announcements </button>
        </aside>

        <main className="main-content">
          <div className="admin-card shadow">
            <header className="content-header">
              <h2>Cunga {activeTab.toUpperCase()}</h2>
            </header>
            
            {activeTab !== 'attendance' && (
              <form onSubmit={handleSubmit} className="crud-form">
                {activeTab === 'members' ? (
                  <>
                    <input type="text" placeholder="Izina Ryose" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                    <input type="text" placeholder="Telefone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} required />
                    <input type="number" placeholder="Imyaka (Age)" value={formData.age} onChange={e => setFormData({...formData, age: e.target.value})} />
                    <input type="text" placeholder="Izina ry'Umubyeyi" value={formData.parentName} onChange={e => setFormData({...formData, parentName: e.target.value})} />
                  </>
                ) : activeTab === 'collaborators' ? (
                   <>
                    <input type="text" placeholder="Izina Ryose" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                    <input type="text" placeholder="Telefone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} required />
                    <input type="text" placeholder="Inshingano (Role)" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} />
                  </>
                ) : (
                  <>
                    <input type="text" placeholder="Umutwe w'itangazo" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
                    <textarea placeholder="Ibirimo..." value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} required />
                  </>
                )}
                <div className="form-buttons">
                  <button type="submit" className="btn-submit">{editingId ? 'Vugurura' : 'Ongeramo'}</button>
                  {editingId && <button type="button" onClick={() => setEditingId(null)} className="btn-cancel">Hagarika</button>}
                </div>
              </form>
            )}

            {loading ? <div className="loader">Tegereza gato...</div> : (
              activeTab === 'attendance' ? (
                <div className="attendance-section">
                  <table className="admin-table">
                    <thead>
                      <tr><th>Izina</th><th>yitabiriye</th><th>Yasibye</th></tr>
                    </thead>
                    <tbody>
                      {data.map(m => (
                        <tr key={m._id}>
                          <td>{m.name}</td>
                          <td><input type="radio" name={m._id} onChange={() => handleAttendanceChange(m._id, 'present')} /></td>
                          <td><input type="radio" name={m._id} onChange={() => handleAttendanceChange(m._id, 'absent')} /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button onClick={saveAttendanceToHistory} className="btn-save-attendance">
                    <FaSave /> Bika & Kohereza muri History
                  </button>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="admin-table">
                    <thead>
                      <tr><th>Izina </th><th>Ibindi</th><th>Actions</th></tr>
                    </thead>
                    <tbody>
                      {data.map(item => (
                        <tr key={item._id}>
                          <td><strong>{item.name || item.title}</strong></td>
                          <td>{item.phone || (item.content ? item.content.substring(0, 30) + "..." : "---")}</td>
                          <td className="actions-cell">
                            <button className="btn-edit" onClick={() => {setEditingId(item._id); setFormData(item);}}><FaEdit /></button>
                            <button className="btn-delete" onClick={() => handleDelete(item._id)}><FaTrash /></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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
