import React from 'react';
import ProductCard from '../catalog/ProductCard'
import { products } from '../../data/products';
import './RelatedProducts.css';

const RelatedProducts = ({ category, currentId }) => {
  const related = products.filter(item => {
    return item.category.toLowerCase() === category.toLowerCase() && item.id !== currentId;
  }).slice(0, 3);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="related-products">
      <h2 className="related-products__title">Related Products</h2>
      <div className="related-products__grid">
        {related.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;