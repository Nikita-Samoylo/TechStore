import React from 'react';
import './CartSummarySidebar.css';

const CartSummarySidebar = ({ subtotalCents, taxCents, totalCents, fmt }) => {
  return (
    <aside className="cart-sidebar" aria-label="Order summary">
      <section className="cart-card order-summary">
        <h2 className="order-summary__title">Order Summary</h2>

        <div className="order-summary__row">
          <span className="order-summary__label">Subtotal</span>
          <span className="order-summary__value">{fmt(subtotalCents)}</span>
        </div>

        <div className="order-summary__row">
          <span className="order-summary__label">Tax (8%)</span>
          <span className="order-summary__value">{fmt(taxCents)}</span>
        </div>

        <div className="order-summary__divider" />

        <div className="order-summary__row order-summary__row--total">
          <span className="order-summary__label order-summary__label--total">Total</span>
          <span className="order-summary__total">{fmt(totalCents)}</span>
        </div>

        <div className="promo">
          <p className="promo__title">Promo Code</p>

          <div className="promo__controls">
            <input className="promo__input" placeholder="Enter code" />
            <button type="button" className="promo__apply">Apply</button>
          </div>

          <p className="promo__hint">Try code "SAVE10" for 10% off</p>
        </div>

        <button type="button" className="checkout-btn">Proceed to Checkout</button>
      </section>

      <section className="cart-card shipping">
        <div className="shipping__header">
          <svg className="shipping__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 7h11v10H3V7Z" stroke="currentColor" strokeWidth="2" />
            <path d="M14 10h4l3 3v4h-7v-7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M7 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" stroke="currentColor" strokeWidth="2" />
            <path d="M18 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" stroke="currentColor" strokeWidth="2" />
          </svg>

          <h2 className="shipping__title">Shipping Information</h2>
        </div>

        <div className="shipping__section">
          <div className="shipping__row">
            <svg className="shipping__row-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
            </svg>

            <p className="shipping__label">Delivery Address</p>
          </div>

          <div className="shipping__details">
            <p className="shipping__text">123 Tech Street</p>
            <p className="shipping__text">San Francisco, CA 94105</p>
          </div>
        </div>

        <div className="shipping__divider" />

        <div className="shipping__section">
          <p className="shipping__label">Estimated Delivery</p>
          <p className="shipping__text">3-5 business days</p>
          <p className="shipping__green">Free shipping on orders over $50</p>
        </div>
      </section>
    </aside>
  );
};

export default CartSummarySidebar;