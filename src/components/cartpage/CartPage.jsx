import React, { useEffect, useState } from "react";
import './CartPage.css';
import Header from '../header/Header'

export const CartPage = () => {

    const [cartItem, setCartItem] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = () => {
        try {
            const cartData = localStorage.getItem('cart_items');
            if (cartData) {
                setCartItem(JSON.parse(cartData));
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const deleteCartItem = (itemId) => {
        try {
            const updatedCart = cartItem.filter(item => item._id !== itemId);
            setCartItem(updatedCart);
            localStorage.setItem('cart_items', JSON.stringify(updatedCart));
        } catch (error) {
            setError(error.message);
        }
    };

    const updatedQuantity = (itemId, newQuantity) => {
        try {
            const updatedCart = cartItem.map(item =>
                item._id === itemId ? { ...item, quantity: newQuantity } : item
            );
            setCartItem(updatedCart);
            localStorage.setItem('cart_items', JSON.stringify(updatedCart));
        } catch (error) {
            setError(error.message);
        }
    };

    const handleIncrease = (itemId, currentQuantity) => {
        updatedQuantity(itemId, currentQuantity + 1)

    }


    const handleDecrease = (itemId, currentQuantity) => {
        if (currentQuantity > 1) {
            updatedQuantity(itemId, currentQuantity - 1)
        }
    }


    const grandTotal = cartItem.reduce((total, item) =>
        total + item.product.price * item.quantity,
        0
    )

    return (



        <div>
            <Header />

            <div className="cart">

                <h1>CART LIST</h1>
                {error && <p className="error">{error}</p>}
                <table className="table">
                    <thead>
                        <tr className="table-head">
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItem.length > 0 ? (
                            cartItem.map((item) => (
                                <tr key={item._id}>
                                    <td className="image-title">
                                        <img
                                            src={item.product.image}
                                            alt={item.product.name}
                                            className="cart-product-image"
                                        />
                                        {item.product.name}
                                    </td>
                                    <td>{item.product.price}</td>
                                    <td className="quantity-button">
                                        <button onClick={() => handleDecrease(item._id, item.quantity)}>-</button>
                                        {item.quantity}
                                        <button onClick={() => handleIncrease(item._id, item.quantity)}>+</button>
                                    </td>
                                    <td>{item.product.price * item.quantity}</td>
                                    <td>
                                        <button onClick={() => deleteCartItem(item._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No cart items</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {cartItem.length > 0 && (
                <div className="grand-total">
                    <h3>GRAND TOTAL : ${grandTotal.toFixed(2)} </h3>
                </div>
                )}

            </div>

        </div>
    );
};
