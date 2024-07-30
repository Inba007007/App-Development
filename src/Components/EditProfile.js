import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './EditProfile.css';

function EditProfile({ setUser }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state;

  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);

  const handleSave = () => {
    const updatedUser = { email, username };
    setUser(updatedUser); // Update the user state
    navigate('/profile', { state: { user: updatedUser } }); // Navigate back to the profile page with updated user
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
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
          <label>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
      </div>
      <button className="save-button" onClick={handleSave}>Save</button>
    </div>
  );
}
export default EditProfile;