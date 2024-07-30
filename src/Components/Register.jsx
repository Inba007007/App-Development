import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios'; // Import Axios
import './Register.css';

function Register({ setLoggedIn, setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('User'); // State for the selected role
  const [error, setError] = useState(null); // State for handling errors
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/posts', {
        email,
        password,
        username: '',
        role,
      });

      const userData = response.data;
      setLoggedIn(true);
      setUser(userData);  // Set user data
      
      // Navigate based on role
      if (role === 'Admin') {
        navigate('/admin/dashboard');  // Redirect to admin dashboard
      } else {
        navigate('/profile');  // Redirect to user profile
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Failed to register user');
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="input-item">
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-item">
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="input-item">
            <label>Confirm Password:</label>
            <input 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="input-item">
            <label>Role:</label>
            <select 
              value={role} 
              onChange={(e) => setRole(e.target.value)} 
              required
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
      <div className="social-icons">
        <FontAwesomeIcon icon={faGoogle} size="2x" className="icon" />
        <FontAwesomeIcon icon={faFacebook} size="2x" className="icon" />
        <FontAwesomeIcon icon={faInstagram} size="2x" className="icon" />
      </div>
    </div>
  );
}

export default Register;
