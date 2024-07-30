import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './Girls.css';
import img1 from './Assets/img1.jpg';
import img2 from './Assets/img2.jpg';
import img22 from './Assets/img22.jpg';
import img30 from './Assets/img30.jpeg';
import img28 from './Assets/img28.jpg';
import img23 from './Assets/img23.jpeg';
import img24 from './Assets/img24.jpg';
import img25 from './Assets/img25.webp';
import img26 from './Assets/img26.jpg';
import img27 from './Assets/img27.webp';
import { useCart } from './CartContext'; // Import useCart from the correct path

function Girls() {
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
    { id: 1, name: 'Building Blocks', img: img1, price: '$19.99' },
    { id: 2, name: 'Plush Bear', img: img2, price: '$9.99' },
    { id: 3, name: 'Magic Wand', img: img22, price: '$14.99' },
    { id: 4, name: 'Remote Control Car', img: img30, price: '$29.99' },
    { id: 5, name: 'Doll', img: img28, price: '$49.99' },
    { id: 6, name: 'Craft Kit', img: img23, price: '$12.99' },
    { id: 7, name: 'Princess Dress', img: img24, price: '$34.99' },
    { id: 8, name: 'Jewelry Set', img: img25, price: '$14.99' },
    { id: 9, name: 'Toy Kitchen', img: img26, price: '$39.99' },
    { id: 10, name: 'Barbie doll', img: img27, price: '$9.99' },
  ];

  return (
    <div className="girls">
      <h1>Girl's Toys</h1>
      <p>Discover our delightful range of toys for girls! From dolls to craft kits, we have everything to inspire and entertain young girls.</p>
      <h1>"Spark Imagination, Create Joy!"</h1>
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

export default Girls;
