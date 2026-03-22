import React from 'react';
import './CartItemCard.css';

const CartItemCard = ({ item, fmt }) => {
  const { product, qty } = item;

  return (
    <article className="cart-item">
      <div className="cart-item__thumb">
        <img className="cart-item__img" src={product.image} alt={product.name} />
      </div>

      <div className="cart-item__info">
        <div className="cart-item__meta">
          <h2 className="cart-item__name">{product.name}</h2>
          <p className="cart-item__category">{product.category}</p>
        </div>

        <div className="cart-qty">
          <button type="button" className="cart-qty__btn" aria-label="Decrease quantity">
            –
          </button>
          <span className="cart-qty__value">{qty}</span>
          <button type="button" className="cart-qty__btn" aria-label="Increase quantity">
            +
          </button>
        </div>
      </div>

      <div className="cart-item__price">
        <p className="cart-item__price-main">{fmt(product.price)}</p>
        <p className="cart-item__price-sub">{fmt(product.price)} each</p>
      </div>

      <button type="button" className="cart-item__remove" aria-label="Remove item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 6V4h8v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M19 6l-1 14H6L5 6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M10 11v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M14 11v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </article>
  );
};

export default CartItemCard;