import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const { cart, addItem, reduceItem, removeItem } = useCart();
  const navigate = useNavigate();

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', '')); // Remove '$' and convert to float
      return total + (price * item.quantity);
    }, 0).toFixed(2); // Keep two decimal places
  };

  // Handle navigation to the checkout page
  const handleBuyNow = () => {
    navigate('/checkout'); // Redirect to the payment page
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="price">{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => reduceItem(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addItem(item.id)}>+</button>
                </div>
                <button className="remove-button" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="cart-total">
          <h3>Total Amount: ${calculateTotal()}</h3>
          <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button> {/* Add Buy Now button */}
        </div>
      )}
    </div>
  );
}

export default Cart;
