import React, { useState, useEffect } from 'react';
import ProductCard from '../../catalog/ProductCard/ProductCard';
import { fetchProducts } from '../../../api/api';
import './RelatedProducts.css';

const RelatedProducts = ({ category, currentId }) => {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    let isCancelled = false;

    const loadRelated = async () => {
      try {
        const data = await fetchProducts({ limit: 6 });
        if (!isCancelled) {
          const filtered = data.items
            .filter(
              (item) =>
                item.category.toLowerCase() === (category || 'electronics').toLowerCase() &&
                item.id !== Number(currentId)
            )
            .slice(0, 3);
          setRelated(filtered);
        }
      } catch (error) {
        console.error('Ошибка при загрузке похожих товаров:', error);
      }
    };

    loadRelated();

    return () => {
      isCancelled = true;
    };
  }, [category, currentId]);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="related-products">
      <h2 className="related-products__title">Related Products</h2>
      <div className="related-products__grid">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;