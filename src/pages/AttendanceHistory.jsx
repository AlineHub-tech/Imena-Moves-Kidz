import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHistory, FaCheckCircle, FaTimesCircle, FaUserPlus, FaUsersCog, FaClock, FaCalendarAlt, FaPrint } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/AttendanceHistory.css';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

const AttendanceHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_BASE}/attendance`);
        setHistory(res.data);
      } catch (err) {
        console.error("Habaye ikosa mu gufata raporo:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="history-page">
      <Navbar />
      
      <header className="history-header no-print">
        <div className="container-h">
          <span className="header-tag">Inyandiko za Report</span>
          <h1><FaHistory /> Report y'Ibikorwa</h1>
          <p>Dore imigendekere y'imyitozo n'abanyamuryango bashya binjiye muri sisitemu.</p>
        </div>
      </header>

      <div className="container-h history-content">
        {!loading && history.length > 0 && (
          <div className="history-actions no-print">
            <button onClick={handlePrint} className="btn-print">
              <FaPrint /> Sohora Raporo (PDF)
            </button>
          </div>
        )}

        {loading ? (
          <div className="status-msg">Turi gushaka amakuru muri sisitemu...</div>
        ) : history.length === 0 ? (
          <div className="status-msg">Nta raporo n'imwe iraboneka kugeza ubu.</div>
        ) : (
          <div className="timeline-layout">
            {history.map((item) => (
              <div className="history-entry-card" key={item._id}>
                <div className="entry-body">
                  {/* UMUTWE WA RAPORO */}
                  <div className="entry-top">
                    <div className="entry-meta">
                      <span className="main-date"><FaCalendarAlt /> {item.date}</span>
                      <span className="main-time"><FaClock /> {item.time || "Isaha ntiyanditse"}</span>
                    </div>
                    <div className="entry-stats">
                      <span className="stat-p">{item.presentCount} Abitabiriye</span>
                      <span className="stat-a">{item.absentCount} Abasibye</span>
                    </div>
                  </div>

                  <div className="report-details">
                    {/* 1. URUTONDE RW'ABARIYO N'ABASIBYE */}
                    <div className="attendance-list-section">
                      <h4><FaCheckCircle className="icon-orange" /> Urutonde rw'Abanyamuryango</h4>
                      <table className="history-table">
                        <thead>
                          <tr>
                            <th>Izina ry'Umunyamuryango</th>
                            <th>Imiterere (Status)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Kwerekana abariyo */}
                          {item.presentList?.map((name, i) => (
                            <tr key={`p-${i}`} className="row-present">
                              <td>{name}</td>
                              <td><span className="badge badge-p">Yariyo</span></td>
                            </tr>
                          ))}
                          {/* Kwerekana abasibye */}
                          {item.absentList?.map((name, i) => (
                            <tr key={`a-${i}`} className="row-absent">
                              <td>{name}</td>
                              <td><span className="badge badge-a">Yasibye</span></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* 2. ABASHYA BINJIYE UYU MUNSI */}
                    <div className="updates-grid">
                      <div className="update-col">
                        <h5><FaUserPlus /> Abamember Bashya ({item.newMembers?.length || 0})</h5>
                        <div className="small-tags">
                          {item.newMembers?.length > 0 
                            ? item.newMembers.map((n, i) => <span key={i} className="tag-new">{n}</span>)
                            : <small>Nta mushya wiyandikishije.</small>}
                        </div>
                      </div>

                      <div className="update-col">
                        <h5><FaUsersCog /> Abafatanyabikorwa Bashya ({item.newCollaborators?.length || 0})</h5>
                        <div className="small-tags">
                          {item.newCollaborators?.length > 0 
                            ? item.newCollaborators.map((n, i) => <span key={i} className="tag-collab">{n}</span>)
                            : <small>Nta mufatanyabikorwa mushya.</small>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AttendanceHistory;
