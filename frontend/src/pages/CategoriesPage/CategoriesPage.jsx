import React, { useState, useEffect, useMemo } from 'react';
import CategoryCard from '../../components/categories/CategoryCard';
import { fetchProducts } from '../../api/api';
import './CategoriesPage.css';

const CategoriesPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts({ limit: 50 });
        if (!isCancelled) {
          setProducts(data.items);
        }
      } catch (error) {
        console.error('Ошибка при загрузке категорий:', error);
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      isCancelled = true;
    };
  }, []);

  const categories = useMemo(() => {
    const map = new Map();

    products.forEach((p) => {
      const key = p.category?.toLowerCase() || 'other';
      const name = p.category
        ? p.category.charAt(0).toUpperCase() + p.category.slice(1)
        : 'Other';

      const image = p.images?.[0] || p.image || '';

      if (!map.has(key)) map.set(key, { key, name, count: 0, image });
      const c = map.get(key);

      c.count += 1;
      if (!c.image && image) c.image = image;
    });

    return Array.from(map.values());
  }, [products]);

  return (
    <div className="categories-page">
      <div className="categories-container">
        <header className="categories-header">
          <h1 className="categories-title">Product Categories</h1>
          <p className="categories-description">
            Browse our wide selection of premium electronics by category
          </p>
        </header>

        <main className="categories-grid">
          {loading ? (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>Loading categories...</p>
          ) : (
            categories.map((c) => (
              <CategoryCard key={c.key} to="/" title={c.name} count={c.count} image={c.image} />
            ))
          )}
        </main>
      </div>
    </div>
  );
};

export default CategoriesPage;