import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import DealsBanner from '../../components/deals/DealsBanner/DealsBanner';
import DealsGrid from '../../components/deals/DealsGrid/DealsGrid';
import { products } from '../../data/products';
import './DealsPage.css';

const DealsPage = () => {
  const discountPercent = 20;
  const dealProducts = useMemo(() => products.slice(1, 5), []);

  return (
    <div className="deals-page">
      <div className="deals-container">
        <header className="deals-header">
          <div className="deals-title-row">
            <svg
              className="deals-title-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.59 13.41 11 3.83A2 2 0 0 0 9.59 3H4a2 2 0 0 0-2 2v5.59a2 2 0 0 0 .59 1.41L12 21.83a2 2 0 0 0 2.83 0l5.76-5.76a2 2 0 0 0 0-2.83Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 7h.01"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            <h1 className="deals-title">Special Deals</h1>
          </div>

          <p className="deals-subtitle">
            Limited time offers on our best products - Don&apos;t miss out!
          </p>
        </header>

        <DealsBanner />

        <DealsGrid products={dealProducts} discountPercent={discountPercent} />

        <section className="deals-cta">
          <p className="deals-cta__text">Want to see more products?</p>
          <Link to="/" className="deals-cta__btn">
            Browse All Products
          </Link>
        </section>
      </div>
    </div>
  );
};

export default DealsPage;