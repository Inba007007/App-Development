import React from 'react';
import { useWishlist } from './WishlistContext';
import './Wishlist.css';

function Wishlist() {
  const { wishlist, removeItem } = useWishlist();

  return (
    <div className="wishlist-page">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((item, index) => (
            <div key={index} className="wishlist-item">
              <img src={item.img} alt={item.name}  />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="price">{item.price}</p>
                <button className="remove-button" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
