import React from 'react';
import { Link } from 'react-router-dom';
import './CartEmptyState.css';

const CartEmptyState = () => {
  return (
    <section className="cart-empty" aria-label="Empty cart">
      <h1 className="cart-empty__title">Your Cart is Empty</h1>
      <p className="cart-empty__text">Add some amazing products to get started!</p>

      <Link to="/" className="cart-empty__btn">
        Continue Shopping
      </Link>
    </section>
  );
};

export default CartEmptyState;