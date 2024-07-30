import React, { useState } from 'react';
import './AdminUsers.css';

function AdminUsers() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editUser, setEditUser] = useState(null);

  const handleAddUser = (e) => {
    e.preventDefault();
    const newId = users.length ? users[users.length - 1].id + 1 : 1;
    setUsers([...users, { id: newId, name: newUser.name, email: newUser.email }]);
    setNewUser({ name: '', email: '' });
  };

  const handleEditUser = (user) => {
    setEditUser(user);
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    setUsers(users.map(u => u.id === editUser.id ? editUser : u));
    setEditUser(null);
  };

  const handleRemoveUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <div className="admin-users">
      <h2>Manage Users</h2>
      
      <form onSubmit={editUser ? handleUpdateUser : handleAddUser}>
        <input
          type="text"
          placeholder="User Name"
          value={editUser ? editUser.name : newUser.name}
          onChange={(e) => editUser ? setEditUser({ ...editUser, name: e.target.value }) : setNewUser({ ...newUser, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={editUser ? editUser.email : newUser.email}
          onChange={(e) => editUser ? setEditUser({ ...editUser, email: e.target.value }) : setNewUser({ ...newUser, email: e.target.value })}
          required
        />
        <button type="submit">{editUser ? 'Update User' : 'Add User'}</button>
      </form>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleEditUser(user)}>Edit</button>
            <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminUsers;
