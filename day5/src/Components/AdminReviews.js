import React, { useState, useEffect } from 'react';
import './AdminReviews.css';

const AdminReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from your backend or mock data
    const fetchReviews = async () => {
      // Replace with your actual fetch call
      const response = await fetch('/api/reviews'); // Example API endpoint
      const data = await response.json();
      setReviews(data);
    };

    fetchReviews();
  }, []);

  return (
    <div className="admin-reviews">
      <h2>Manage Reviews</h2>
      <table className="reviews-table">
        <thead>
          <tr>
            <th>Review ID</th>
            <th>User</th>
            <th>Product</th>
            <th>Rating</th>
            <th>Comment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td>{review.id}</td>
              <td>{review.user}</td>
              <td>{review.product}</td>
              <td>{review.rating}</td>
              <td>{review.comment}</td>
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

export default AdminReviews;
