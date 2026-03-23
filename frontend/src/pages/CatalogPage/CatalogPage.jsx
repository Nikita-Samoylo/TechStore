import React from 'react';
import Filters from '../../components/catalog/Filters/Filters';
import ProductCard from '../../components/catalog/ProductCard/ProductCard';
import CatalogTopBar from '../../components/catalog/CatalogTopBar/CatalogTopBar';
import { products } from '../../data/products';
import './CatalogPage.css';

const CatalogPage = () => {
  return (
    <div className="catalog-page">
      <div className="catalog-container">
       
        <div className="catalog-header">
            <h1 className="catalog-title">Premium Electronics</h1>
            <p className="catalog-description">
                Discover our curated collection of high-quality tech products
            </p>
        </div>

        <CatalogTopBar productsCount={products.length} />

        <div className="catalog-content-wrapper">

            <aside className="catalog-sidebar">
                <Filters />
            </aside>

            <main className="catalog-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </main>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;