import React, { useState, useMemo } from 'react';
import Filters from '../../components/catalog/Filters/Filters';
import ProductCard from '../../components/catalog/ProductCard/ProductCard';
import CatalogTopBar from '../../components/catalog/CatalogTopBar/CatalogTopBar';
import { products } from '../../data/products';
import './CatalogPage.css';

const CatalogPage = () => {
  const [sortOption, setSortOption] = useState('name-asc');

  const [filters, setFilters] = useState({
    selectedRatings: [], 
    priceMin: 0,
    priceMax: 3000,
  });

  const displayedProducts = useMemo(() => {
    let result = [...products];

    result = result.filter(
      (p) => p.price >= filters.priceMin * 100 && p.price <= filters.priceMax * 100
    );

    if (filters.selectedRatings.length > 0) {
      const minRequiredRating = Math.min(...filters.selectedRatings);
      result = result.filter((p) => p.rating >= minRequiredRating);
    }

    result.sort((a, b) => {
      switch (sortOption) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        default:
          return 0;
      }
    });

    return result;
  }, [sortOption, filters]);

  return (
    <div className="catalog-page">
      <div className="catalog-container">
        <div className="catalog-header">
          <h1 className="catalog-title">Premium Electronics</h1>
          <p className="catalog-description">
            Discover our curated collection of high-quality tech products
          </p>
        </div>

        <CatalogTopBar
          productsCount={displayedProducts.length}
          currentSort={sortOption}
          onSortChange={setSortOption}
        />

        <div className="catalog-content-wrapper">
          <aside className="catalog-sidebar">
            <Filters filters={filters} setFilters={setFilters} />
          </aside>

          <main className="catalog-grid">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '40px' }}>
                No products found matching your filters.
              </p>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;