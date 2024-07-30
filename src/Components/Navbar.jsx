import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCaretDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext';
import img31 from './Assets/img31.jpg'; // Ensure the path is correct

function Navbar({ loggedIn }) {
  const [profileMenuVisible, setProfileMenuVisible] = useState(false);
  const [categoryMenuVisible, setCategoryMenuVisible] = useState(false);
  const { cart } = useCart();

  const toggleProfileMenu = () => {
    setProfileMenuVisible(!profileMenuVisible);
  };

  const toggleCategoryMenu = () => {
    setCategoryMenuVisible(!categoryMenuVisible);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">
          <img src={img31} alt="Kids" className="logo-img" />
        </Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li className="category-link">
            <div onClick={toggleCategoryMenu}>
              Category <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {categoryMenuVisible && (
              <ul className="dropdown-menu">
                <li><Link to="/boys">Boys</Link></li>
                <li><Link to="/girls">Girls</Link></li>
                <li><Link to="/toddlers">Toddlers</Link></li> {/* Link to Toddlers page */}
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <Link to="/cart" className="cart-link">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="cart-count">{cart.length}</span>
        </Link>
        <Link to="/wishlist" className="wishlist-link">
          Wishlist
        </Link>
        {!loggedIn ? (
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        ) : (
          <div className="profile-link" onClick={toggleProfileMenu}>
            <div className="profile-icon">
              <FontAwesomeIcon icon={faUserCircle} />
            </div>
            {profileMenuVisible && (
              <div className="profile-menu">
                <Link to="/profile">Profile</Link>
                <Link to="/logout" onClick={()=>Navigate('/home')}>Logout</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}


export default Navbar;
