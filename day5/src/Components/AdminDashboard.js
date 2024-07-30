import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h2>Welcome to the Admin Dashboard</h2>
      <p>Here you can manage the website and its contents.</p>
      <div className="admin-actions">
        <Link to="/admin/users" className="admin-link">Manage Users</Link>
        <Link to="/admin/products" className="admin-link">Manage Products</Link>
        <Link to="/admin/categories" className="admin-link">Manage Categories</Link>
        <Link to="/admin/orders" className="admin-link">Manage Orders</Link>
        <Link to="/admin/reviews" className="admin-link">Manage Reviews</Link>
        <Link to="/admin/inventory" className="admin-link">Manage Inventory</Link>
        <Link to="/admin/special-offers" className="admin-link">Manage Special Offers</Link>
        <Link to="/admin/reports" className="admin-link">View Reports</Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
