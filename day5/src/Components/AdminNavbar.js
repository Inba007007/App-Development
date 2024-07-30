import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css'; // Ensure this CSS file contains styles for AdminNavbar
import img31 from './Assets/img31.jpg'; // Ensure the path is correct

function AdminNavbar({ loggedIn }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/admin/dashboard" className="logo">
          <img src={img31} alt="Admin Logo" className="logo-img" /> {/* Update with actual logo */}
        </Link>
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
          <li><Link to="/admin/products">Products</Link></li>
          <li><Link to="/admin/categories">Categories</Link></li>
          <li><Link to="/admin/orders">Orders</Link></li>
          <li><Link to="/admin/reviews">Reviews</Link></li>
          <li><Link to="/admin/inventory">Inventory</Link></li>
          <li><Link to="/admin/special-offers">Special Offers</Link></li>
          <li><Link to="/admin/reports">Reports</Link></li> {/* Added Reports link */}
        </ul>
      </div>
      <div className="nav-right">
        {loggedIn ? (
          <Link to="/profile" className="profile-link">Profile</Link>
        ) : (
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default AdminNavbar;
