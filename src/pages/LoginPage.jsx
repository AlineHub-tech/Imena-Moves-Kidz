import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'; // Icons nshya
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/LoginPage.css'; 

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // ToLowerCase() no Trim() bituma login yemerwa naho phone yaba yashyizemo inyuguti nini cyangwa umwanya (space)
    const cleanUser = username.trim().toLowerCase();
    const cleanPass = password.trim();

    // Username: admin | Password: 1234
    if (cleanUser === 'admin' && cleanPass === '1234') {
      login('admin');
      navigate('/admin');
    } else if (cleanUser === 'member' && cleanPass === '12345') {
      login('member');
      navigate('/memberdashboard');
    } else {
      setError('Username cyangwa Password ntabwo ari byo. Gerageza');
    }
  };

  return (
    <div className="login-full-page">
      <Navbar />
      <div className="login-main-container">
        <div className="login-card-pro">
          <div className="login-header">
            <h2>Welcome Back</h2>
            <p>Admin & Member Portal</p>
          </div>

          {error && <div className="login-error-box">{error}</div>}

          <form onSubmit={handleLogin} className="login-form-pro">
            {/* USERNAME INPUT */}
            <div className="pro-input-group">
              <label><FaUser /> Username</label>
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter username"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck="false"
                required 
              />
            </div>

            {/* PASSWORD INPUT */}
            <div className="pro-input-group">
              <label><FaLock /> Password</label>
              <div className="password-wrapper">
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="Enter password"
                  autoCapitalize="none"
                  required 
                />
                <button 
                  type="button" 
                  className="eye-btn" 
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button type="submit" className="pro-login-btn">
              Log In Now
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
