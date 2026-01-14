import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

// Import Pages
import LandingPage from './pages/LandingPage';
import AdminDashboard from './pages/AdminDashboard';
import MemberDashboard from './pages/MemberDashboard';
import LoginPage from './pages/LoginPage';
import AboutUsPage from './pages/AboutUsPage';
// ... import other pages ...

function App() {
  return (
    <Router>
      <AuthProvider> {/* Funga App yose muri AuthProvider */}
        <div className="App">
          <main>
            <Routes>
              {/* Public Routes - Burikose ashobora kuzireba */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/services" element={<div style={{ paddingTop: '70px' }}><p>Serivisi zose dutanga.</p></div>} />
              <Route path="/login" element={<LoginPage />} />

              {/* Protected Route for Members */}
              <Route element={<ProtectedRoute requiredRole="member" />}>
                <Route path="/memberdashboard" element={<MemberDashboard />} />
              </Route>

              {/* Protected Route for Admin */}
              <Route element={<ProtectedRoute requiredRole="admin" />}>
                <Route path="/admin" element={<AdminDashboard />} />
              </Route>
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
