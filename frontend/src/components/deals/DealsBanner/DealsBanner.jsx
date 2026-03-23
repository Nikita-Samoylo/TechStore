import React from 'react';
import './DealsBanner.css';

const DealsBanner = () => {
  return (
    <section className="deals-banner">
      <div className="deals-banner__left">
        <h2 className="deals-banner__title">Flash Sale Event</h2>
        <p className="deals-banner__text">Save up to 30% on selected items</p>
      </div>

      <div className="deals-banner__pill">
        <svg
          className="deals-banner__pill-icon"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 6v6l4 2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className="deals-banner__pill-text">Ends in 2 days</span>
      </div>
    </section>
  );
};

export default DealsBanner;