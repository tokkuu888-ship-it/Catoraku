import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import DeanDashboard from './pages/DeanDashboard';
import CoordinatorDashboard from './pages/CoordinatorDashboard';
import TechModeratorDashboard from './pages/TechModeratorDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import StudentDashboard from './pages/StudentDashboard';
import { isAuthenticated, getUserRole, ROLES } from './utils/auth';

const PrivateRoute = ({ children, role }) => {
  if (!isAuthenticated()) return <Navigate to="/login" />;
  if (role && getUserRole() !== role) return <Navigate to={`/dashboard/${getUserRole()?.toLowerCase()}`} />;
  return children;
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/dean" element={<PrivateRoute role={ROLES.DEAN}><DeanDashboard /></PrivateRoute>} />
        <Route path="/dashboard/coordinator" element={<PrivateRoute role={ROLES.COORDINATOR}><CoordinatorDashboard /></PrivateRoute>} />
        <Route path="/dashboard/tech" element={<PrivateRoute role={ROLES.TECH}><TechModeratorDashboard /></PrivateRoute>} />
        <Route path="/dashboard/faculty" element={<PrivateRoute role={ROLES.FACULTY}><FacultyDashboard /></PrivateRoute>} />
        <Route path="/dashboard/student" element={<PrivateRoute role={ROLES.STUDENT}><StudentDashboard /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
