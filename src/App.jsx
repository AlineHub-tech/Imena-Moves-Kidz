import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; 
import ProtectedRoute from './components/ProtectedRoute'; 

// Import Pages
import LandingPage from './pages/LandingPage';
import AdminDashboard from './pages/AdminDashboard';
import MemberDashboard from './pages/MemberDashboard';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import AboutUsPage from './pages/AboutUsPage';
import ApplyPage from './pages/ApplyPage';
import AttendanceHistory from './pages/AttendanceHistory'; // <-- NEW IMPORT

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <main>
            <Routes>
              {/* Public Routes - Anyone can view these */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/apply" element={<ApplyPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/login" element={<LoginPage />} />
              
              {/* History Route - Publicly viewable daily reports */}
              <Route path="/history" element={<AttendanceHistory />} /> 

              {/* Protected Route for Members */}
              <Route element={<ProtectedRoute requiredRole="member" />}>
                <Route path="/memberdashboard" element={<MemberDashboard />} />
              </Route>

              {/* Protected Route for Admin */}
              <Route element={<ProtectedRoute requiredRole="admin" />}>
                <Route path="/admin" element={<AdminDashboard />} />
              </Route>

              {/* Fallback for unknown URLs */}
              <Route path="*" element={<LandingPage />} />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
