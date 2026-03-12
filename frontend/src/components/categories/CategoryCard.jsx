import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.css';

const CategoryCard = ({ to, title, count, image }) => {
  return (
    <Link to={to} className="category-card" aria-label={`Open category ${title}`}>
      {image ? (
        <img className="category-card__image" src={image} alt="" aria-hidden="true"/>
      ) : null}

      <div className="category-card__overlay" aria-hidden="true" />

      <div className="category-card__content">
        <h2 className="category-card__title">{title}</h2>
        <span className="category-card__count">
          {count} {count === 1 ? 'product' : 'products'}
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;