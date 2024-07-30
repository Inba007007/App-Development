import React, { useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import img1 from './Assets/img1.jpg';
import img2 from './Assets/img2.jpg';
import img3 from './Assets/img3.jpg';
import img4 from './Assets/img4.jpg';
import img11 from './Assets/img11.jpg';
import img6 from './Assets/img6.jpg';
import img7 from './Assets/img7.jpg';
import img8 from './Assets/img8.jpg';
import img9 from './Assets/img9.jpg';
import img10 from './Assets/img10.jpg';
import img19 from './Assets/img19.jpg';
import img22 from './Assets/img22.jpg';
import img17 from './Assets/img17.jpg';
import img13 from './Assets/img13.webp';
import img21 from './Assets/img21.webp';
import img12 from './Assets/img12.jpg';
import './Home.css';
import Footer from './Footer';
import { useCart } from './CartContext';
import { useWishlist } from './WishlistContext'; // Import useWishlist

function Home() {
  const [ratings, setRatings] = useState({});
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist(); // Destructure wishlist functions
  const navigate = useNavigate();

  const toggleWishlist = (toy) => {
    if (wishlist.includes(toy)) {
      removeFromWishlist(toy);
    } else {
      addToWishlist(toy);
    }
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
    { id: 3, name: 'Kidding Toy', img: img3, price: '$14.99' },
    { id: 3, name: 'Anime toys', img: img10, price: '$14.99' },
    { id: 4, name: 'Remote Control Car', img: img4, price: '$29.99' },
    { id: 5, name: 'Doll House', img: img11, price: '$49.99' },
    { id: 1, name: 'Magic Wand', img: img22, price: '$19.99' },
    { id: 2, name: 'Action Figure', img: img17, price: '$9.99' },
    { id: 3, name: 'Puzzle Set', img: img21, price: '$14.99' },
    { id: 4, name: 'Toy Train', img: img13, price: '$29.99' },
    { id: 5, name: 'Lego Set', img: img12, price: '$49.99' },
  ];

  const ageGroups = [
    { id: 7, name: '0-4 Years', img: img7 },
    { id: 8, name: '4-9 Years', img: img8 },
    { id: 9, name: '9+ Years', img: img9 },
  ];

  const offers = [
    { id: 1, title: 'Buy 1 Get 1 Free', description: 'On all building blocks.', img: img1 },
    { id: 2, title: '20% Off Plush Bears', description: 'For a limited time only.', img: img2 },
    { id: 3, title: 'Free Shipping on Orders Over $50', description: 'Shop now and save.', img: img3 },
  ];

  return (
    <div className="home">
      <h1>Welcome to the i2 Toy Store</h1>
      <p>Find the best toys for your kids!</p>

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
                <button onClick={() => handleAddToCart(toy)}>Add to Cart</button>
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
        <div>
          <h2>"Building Dreams, One Block at a Time!"</h2>
          <h4>"Unleash creativity with our colorful building blocks. Perfect for kids aged 3 and up. Crafted from high-quality, child-safe materials, they ensure hours of safe and engaging play. Whether building towers, castles, or imaginative worlds, these blocks promote creativity, problem-solving, and teamwork. Ideal for both solo adventures and group activities, they make the perfect gift for birthdays, holidays, or any special occasion."</h4>
          <h1>Kids Age Group</h1>
        </div>
        <div className="toy-list">
          {ageGroups.map((group) => (
            <div key={group.id} className="toy-item">
              <img src={group.img} alt={group.name} />
              <h3>{group.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="offers">
        <h2>Special Offers</h2>
        <div className="offer-list">
          {offers.map((offer) => (
            <div key={offer.id} className="offer-item">
              <img src={offer.img} alt={offer.title} />
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-images">
          <img src={img10} alt="Gallery Image 10" />
          <img src={img11} alt="Gallery Image 5" />
          <img src={img6} alt="Gallery Image 6" />
          <img src={img19} alt="Gallery Image 19" />
          <img src={img2} alt="Gallery Image 2" />
          <img src={img3} alt="Gallery Image 3" />
        </div>
      </section>

      <ToastContainer />
    </div>
  );
}

export default Home;
