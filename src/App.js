import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import About from './Components/About';
import Boys from './Components/Boys';
import Girls from './Components/Girls';
import Toddlers from './Components/Toddlers'; // Import Toddlers component
import Profile from './Components/Profile';
import EditProfile from './Components/EditProfile';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import Wishlist from './Components/Wishlist';
import Payment from './Components/Payment'; // Import Payment component
import Navbar from './Components/Navbar';
import AdminNavbar from './Components/AdminNavbar';
import AdminDashboard from './Components/AdminDashboard';
import AdminUsers from './Components/AdminUsers';
import AdminProducts from './Components/AdminProducts';
import { CartProvider } from './Components/CartContext';
import { WishlistProvider } from './Components/WishlistContext';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState(null);

  const isAdmin = user?.role === 'Admin'; // Determine if the user is an admin

  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          {isAdmin ? <AdminNavbar loggedIn={loggedIn} /> : <Navbar loggedIn={loggedIn} />}
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/boys" element={<Boys />} />
              <Route path="/girls" element={<Girls />} />
              <Route path="/toddlers" element={<Toddlers />} /> {/* Add Toddlers route */}
              <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUser={setUser} />} />
              <Route path="/register" element={<Register setLoggedIn={setLoggedIn} setUser={setUser} />} />
              <Route path="/profile" element={loggedIn ? <Profile user={user} setUser={setUser} /> : <Navigate to="/" replace />} />
              <Route path="/edit-profile" element={loggedIn ? <EditProfile setUser={setUser} /> : <Navigate to="/" replace />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/checkout" element={<Payment />} /> {/* Add Payment route */}
              
              {isAdmin && (
                <>
                  <Route path="/admin/dashboard" element={<AdminDashboard />} />
                  <Route path="/admin/users" element={<AdminUsers />} />
                  <Route path="/admin/products" element={<AdminProducts />} />
                </>
              )}

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
