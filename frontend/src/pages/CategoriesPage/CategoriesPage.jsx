import React, { useMemo } from 'react';
import CategoryCard from '../../components/categories/CategoryCard';
import { products } from '../../data/products';
import './CategoriesPage.css';

const CategoriesPage = () => {
  const categories = useMemo(() => {
    const map = new Map();

    products.forEach((p) => {
      const key = p.category?.toLowerCase() || 'other';
      const name = p.category
        ? p.category.charAt(0).toUpperCase() + p.category.slice(1)
        : 'Other';

      const image = p.images?.[0] || p.image || '';

      if (!map.has(key)) map.set(key, { key, name, count: 0, image: image });
      const c = map.get(key);

      c.count += 1;
      if (!c.image && image) c.image = image;
    });

    return Array.from(map.values());
  }, []);

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
          {categories.map((c) => (
            <CategoryCard key={c.key} to="/" title={c.name} count={c.count} image={c.image} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default CategoriesPage;