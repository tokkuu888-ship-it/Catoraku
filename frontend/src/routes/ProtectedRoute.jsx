import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUserRole } from '../utils/auth';

export default function ProtectedRoute({ role, children }) {
  const userRole = getUserRole();
  if (userRole !== role) {
    return <Navigate to={`/dashboard/${userRole?.toLowerCase() || 'login'}`} />;
  }
  return children;
}
