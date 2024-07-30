import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h2>Welcome to the admin dashboard</h2>
      <p>Here you can manage the website and its contents.</p>
      <div className="admin-actions">
        <Link to="/admin/users" className="admin-link">Manage Users</Link>
        <Link to="/admin/products" className="admin-link">Manage Products</Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
