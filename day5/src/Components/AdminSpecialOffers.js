import React, { useState, useEffect } from 'react';
import './AdminSpecialOffers.css';

const AdminSpecialOffers = () => {
  const [specialOffers, setSpecialOffers] = useState([]);
  const [newOffer, setNewOffer] = useState({
    title: '',
    description: '',
    discount: '',
    startDate: '',
    endDate: ''
  });

  useEffect(() => {
    const fetchSpecialOffers = async () => {
      const response = await fetch('/api/special-offers'); // Replace with your actual API endpoint
      const data = await response.json();
      setSpecialOffers(data);
    };

    fetchSpecialOffers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOffer((prevOffer) => ({
      ...prevOffer,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit new offer to your backend
    const response = await fetch('/api/special-offers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newOffer)
    });
    const result = await response.json();
    setSpecialOffers((prevOffers) => [...prevOffers, result]);
    setNewOffer({
      title: '',
      description: '',
      discount: '',
      startDate: '',
      endDate: ''
    });
  };

  return (
    <div className="admin-special-offers">
      <h2>Manage Special Offers</h2>
      <form onSubmit={handleSubmit} className="offer-form">
        <h3>Add New Special Offer</h3>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={newOffer.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={newOffer.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Discount (%):
          <input
            type="number"
            name="discount"
            value={newOffer.discount}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={newOffer.startDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={newOffer.endDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit" className="add-offer-btn">Add Offer</button>
      </form>
      <table className="special-offers-table">
        <thead>
          <tr>
            <th>Offer ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Discount</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {specialOffers.map((offer) => (
            <tr key={offer.id}>
              <td>{offer.id}</td>
              <td>{offer.title}</td>
              <td>{offer.description}</td>
              <td>{offer.discount}%</td>
              <td>{new Date(offer.startDate).toLocaleDateString()}</td>
              <td>{new Date(offer.endDate).toLocaleDateString()}</td>
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

export default AdminSpecialOffers;
