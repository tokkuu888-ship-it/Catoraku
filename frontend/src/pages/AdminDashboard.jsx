import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => (
  <div style={{ padding: 24 }}>
    <h2>Admin Dashboard</h2>
    <ul>
      <li><Link to="/create-seminar">Create Seminar Session</Link></li>
      <li><Link to="/monitor-progress">Monitor Student Progress</Link></li>
      <li><Link to="/manage-users">Manage Users</Link></li>
    </ul>
  </div>
);

export default AdminDashboard;
