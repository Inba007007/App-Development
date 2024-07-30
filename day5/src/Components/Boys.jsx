import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './Boys.css';
import img12 from './Assets/img12.jpg';
import img13 from './Assets/img13.webp';
import img14 from './Assets/img14.jpeg';
import img15 from './Assets/img15.webp';
import img16 from './Assets/img16.jpg';
import img17 from './Assets/img17.jpg';
import img18 from './Assets/img18.webp';
import img19 from './Assets/img19.jpg';
import img20 from './Assets/img20.webp';
import img21 from './Assets/img21.webp';
import { useCart } from './CartContext'; // Import useCart from the correct path

function Boys() {
  const [wishlist, setWishlist] = useState([]);
  const [ratings, setRatings] = useState({});
  const { addToCart } = useCart(); // Destructure addToCart from useCart
  const navigate = useNavigate();

  const toggleWishlist = (toy) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(toy)
        ? prevWishlist.filter((item) => item !== toy)
        : [...prevWishlist, toy]
    );
  };

  const handleRating = (toy, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [toy]: rating,
    }));
  };

  const handleAddToCart = (toy) => {
    addToCart(toy);
    toast.success(`${toy.name} added to cart!`);
  };

  const toys = [
    { id: 1, name: 'Superhero Figure', img: img12, price: '$19.99' },
    { id: 2, name: 'Electric Train Set', img: img13, price: '$49.99' },
    { id: 3, name: 'Construction Kit', img: img14, price: '$29.99' },
    { id: 4, name: 'Remote Control Helicopter', img: img15, price: '$39.99' },
    { id: 5, name: 'Toy Car Set', img: img16, price: '$24.99' },
    { id: 6, name: 'Action Hero', img: img17, price: '$24.99' },
    { id: 7, name: 'Model Airplane', img: img18, price: '$24.99' },
    { id: 8, name: 'Robot Toy', img: img19, price: '$24.99' },
    { id: 9, name: 'Puzzle Set', img: img20, price: '$24.99' },
    { id: 10, name: 'Building Blocks', img: img21, price: '$24.99' },
  ];

  return (
    <div className="boys">
      <h1>Boy's Toys</h1>
      <p>Explore our wide selection of toys for boys! From action figures to building sets, we have something for every young boy's interest.</p>
      <section className="featured-toys">
        <h2>Featured Toys</h2>
        <div className="toy-list">
          {toys.map((toy) => (
            <div key={toy.id} className="toy-item">
              <img src={toy.img} alt={toy.name} />
              <h3>{toy.name}</h3>
              <p className="price">{toy.price}</p>
              <div className="button-container">
                <button className="wishlist" onClick={() => toggleWishlist(toy.name)}>
                  {wishlist.includes(toy.name) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </button>
                <button className="add-to-cart" onClick={() => handleAddToCart(toy)}>Add to Cart</button>
              </div>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={ratings[toy.name] >= star ? 'star filled' : 'star'}
                    onClick={() => handleRating(toy.name, star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}

export default Boys;
