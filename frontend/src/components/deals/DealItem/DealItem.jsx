import React from 'react';
import ProductCard from '../../catalog/ProductCard';
import './DealItem.css';

const DealItem = ({ product, discountPercent = 20 }) => {
  return (
    <div className="deal-item">
      <ProductCard product={product} />
      <span className="deal-item__badge" aria-hidden="true">
        Save {discountPercent}%
      </span>
    </div>
  );
};

export default DealItem;