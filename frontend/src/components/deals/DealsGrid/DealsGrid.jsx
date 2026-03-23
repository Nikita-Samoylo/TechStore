import React from 'react';
import DealItem from '../DealItem/DealItem';
import './DealsGrid.css';

const DealsGrid = ({ products, discountPercent = 20 }) => {
  return (
    <main className="deals-grid">
      {products.map((p) => (
        <DealItem key={p.id} product={p} discountPercent={discountPercent} />
      ))}
    </main>
  );
};

export default DealsGrid;