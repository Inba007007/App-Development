// src/Components/Toddlers.js
import React, { useState } from 'react';
import './Toddlers.css';
// Import images
import toyCarImg from './Assets/img34.jpg';
import stuffedBearImg from './Assets/img35.jpg';
import buildingBlocksImg from './Assets/img36.jpeg';
import { useCart } from './CartContext';

function Toddlers() {
  const { addToCart } = useCart();
  const [notification, setNotification] = useState('');

  // Define toy items with correct image paths
  const toys = [
    { id: 1, name: 'Toy Car', price: '$10.99', img: toyCarImg },
    { id: 2, name: 'Stuffed Bear', price: '$15.49', img: stuffedBearImg },
    { id: 3, name: 'Building Blocks', price: '$20.00', img: buildingBlocksImg },
    // Add more toys as needed
  ];

  const handleAddToCart = (toy) => {
    addToCart(toy);
    setNotification(`${toy.name} added to cart!`);
    setTimeout(() => setNotification(''), 3000); // Hide notification after 3 seconds
  };

  return (
    <div className="toddlers-page">
      <h2>Toddlers Toys</h2>
      <div className="toy-list">
        {toys.map((toy) => (
          <div key={toy.id} className="toy-item">
            <img src={toy.img} alt={toy.name} className="toy-image" />
            <div className="toy-details">
              <h3>{toy.name}</h3>
              <p className="price">{toy.price}</p>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(toy)} // Use the handler for add to cart
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}
    </div>
  );
}

export default Toddlers;
