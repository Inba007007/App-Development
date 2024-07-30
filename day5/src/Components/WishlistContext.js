import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => {
      const existingItem = prevWishlist.find((i) => i.id === item.id);
      if (existingItem) {
        return prevWishlist;
      }
      return [...prevWishlist, item];
    });
  };

  const removeItem = (id) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeItem }}>
      {children}
    </WishlistContext.Provider>
  );
};
