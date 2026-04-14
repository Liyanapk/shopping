import React, { useContext, useState } from "react";
import "./Card.css";
import { DataContext } from "../../layout/DataProvider";
import { BsCartCheckFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export const Card = () => {
  const navigate = useNavigate();
  // Directly access data from context, no need for destructuring
  const data = useContext(DataContext);


  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleAddToCart = (item) => {
    try {
      // Get existing cart from localStorage
      const existingCart = JSON.parse(localStorage.getItem('cart_items') || '[]');

      // Check if item already exists in cart
      const existingItemIndex = existingCart.findIndex(
        cartItem => cartItem.product._id === item._id
      );

      if (existingItemIndex !== -1) {
        // Update quantity if item exists
        existingCart[existingItemIndex].quantity += 1;
      } else {
        // Add new item to cart
        existingCart.push({
          _id: Date.now().toString(),
          product: item,
          quantity: 1
        });
      }

      // Save updated cart to localStorage
      localStorage.setItem('cart_items', JSON.stringify(existingCart));
      setSuccess("Item added to cart successfully!");

      // Navigate to cart page
      navigate('/cart');

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(""), 3000);

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="grid-container">
      {data && data.length > 0 ? (
        data.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-image">
              <img
                src={item.image}
                alt={item.name || "Item image"}
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = "https://via.placeholder.com/150"; // Fallback image
                }}
              />
            </div>
            <div className="card-title">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
            <div className="cart-align">
              <BsCartCheckFill className="cart-icon" onClick={() => handleAddToCart(item)} />
            </div>
          </div>
        ))
      ) : (
        <p>No items to display</p>
      )}
    </div>
  );
};
