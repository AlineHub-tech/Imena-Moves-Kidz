import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/LoginPage.css'; 

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    if (username === 'admin' && password === 'password') {
      login('admin');
      navigate('/admin');
    } else if (username === 'member' && password === 'password') {
      login('member'); 
      navigate('/memberdashboard'); 
    } else {
      setError('Invalid credentials. Try admin/password or member/password.');
    }
  };
  return (
    <>
      <Navbar />
      <div className="login-container-wrapper" style={{ marginTop: '10px' }}>
        <div className="login-card">
          <h2>Admin/Member Login</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="login-btn">Log In</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;

