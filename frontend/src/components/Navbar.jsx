import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#003366', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
    <div>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}>
        PhD Seminar System
      </Link>
    </div>
    <div>
      <Link to="/login" style={{ color: '#fff', marginRight: '1rem' }}>Login</Link>
      <Link to="/student" style={{ color: '#fff', marginRight: '1rem' }}>Student</Link>
      <Link to="/faculty" style={{ color: '#fff', marginRight: '1rem' }}>Faculty</Link>
      <Link to="/admin" style={{ color: '#fff' }}>Admin</Link>
    </div>
  </nav>
);

export default Navbar;
