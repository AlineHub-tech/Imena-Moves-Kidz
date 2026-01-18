import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Component igenzura ko umuntu afie uurengaz runaka
const ProtectedRoute = ({ requiredRole }) => {
  const { userRole, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading authentication status...</div>; // Cyangwa spinner
  }

  // Emeza ko userRole ihuje na requiredRole (e.g. userRole === 'admin')
  if (userRole === requiredRole) {
    return <Outlet />; // Mureke yinjire muri Page
  } else {
    // Subizayo kuri login page niba nta burenganzira afite
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;





