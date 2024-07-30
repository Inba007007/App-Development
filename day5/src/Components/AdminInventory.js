import React, { useState, useEffect } from 'react';
import './AdminInventory.css';

const AdminInventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    // Fetch inventory data from your backend or mock data
    const fetchInventory = async () => {
      // Replace with your actual fetch call
      const response = await fetch('/api/inventory'); // Example API endpoint
      const data = await response.json();
      setInventory(data);
    };

    fetchInventory();
  }, []);

  return (
    <div className="admin-inventory">
      <h2>Manage Inventory</h2>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.stock}</td>
              <td>${item.price}</td>
              <td>
                <button className="view-btn">View</button>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminInventory;
