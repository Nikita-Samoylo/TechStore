import React from 'react';
import './ValueCard.css';

const ValueCard = ({ emoji, title, text }) => {
  return (
    <article className="our-values__card">
      <div className="our-values__icon" aria-hidden="true">
        <span className="our-values__emoji">{emoji}</span>
      </div>

      <h3 className="our-values__card-title">{title}</h3>
      <p className="our-values__card-text">{text}</p>
    </article>
  );
};

export default ValueCard;