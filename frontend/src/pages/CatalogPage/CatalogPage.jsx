import React, { useState, useEffect } from 'react';
import Filters from '../../components/catalog/Filters/Filters';
import ProductCard from '../../components/catalog/ProductCard/ProductCard';
import CatalogTopBar from '../../components/catalog/CatalogTopBar/CatalogTopBar';
import { fetchProducts } from '../../api/api';
import './CatalogPage.css';

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState({
    total_items: 0,
    total_pages: 1,
    current_page: 1,
    limit: 12,
  });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const [sortOption, setSortOption] = useState('name-asc');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const [filters, setFilters] = useState({
    selectedRatings: [],
    priceMin: 0,
    priceMax: 3000,
  });

  useEffect(() => {
    if (isFiltersOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isFiltersOpen]);

  // Сбрасываем страницу на 1 при изменении фильтров или сортировки
  useEffect(() => {
    setPage(1);
  }, [filters, sortOption]);

  useEffect(() => {
    let isCancelled = false;

    const loadProducts = async () => {
      try {
        setLoading(true);
        const [rawField, order] = sortOption.split('-');
        const sort_by = rawField === 'name' ? 'title' : rawField;

        const min_rating =
          filters.selectedRatings.length > 0
            ? Math.min(...filters.selectedRatings)
            : undefined;

        const data = await fetchProducts({
          page,
          limit: 12,
          min_price: filters.priceMin * 100,
          max_price: filters.priceMax * 100,
          min_rating,
          sort_by,
          order,
        });

        if (!isCancelled) {
          setProducts(data.items);
          setMeta(data.meta);
        }
      } catch (error) {
        console.error('Ошибка при загрузке каталога:', error);
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
  }, [page, sortOption, filters]);

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
          productsCount={meta.total_items}
          currentSort={sortOption}
          onSortChange={setSortOption}
          onOpenFilters={() => setIsFiltersOpen(true)}
        />

        <div className="catalog-content-wrapper">
          <aside className="catalog-sidebar">
            <Filters filters={filters} setFilters={setFilters} />
          </aside>

          <main className="catalog-grid">
            {loading ? (
              <p style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '40px' }}>
                Loading products...
              </p>
            ) : products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '40px' }}>
                No products found matching your filters.
              </p>
            )}
          </main>
        </div>

        {meta.total_pages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
            {Array.from({ length: meta.total_pages }, (_, idx) => idx + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setPage(pageNum)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  background: pageNum === meta.current_page ? '#111' : '#fff',
                  color: pageNum === meta.current_page ? '#fff' : '#111',
                  cursor: 'pointer',
                }}
              >
                {pageNum}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={`catalog-filters-drawer ${isFiltersOpen ? 'catalog-filters-drawer--open' : ''}`}>
        <div
          className="catalog-filters-drawer__overlay"
          onClick={() => setIsFiltersOpen(false)}
        />
        <div className="catalog-filters-drawer__panel">
          <Filters
            filters={filters}
            setFilters={setFilters}
            isMobile
            onClose={() => setIsFiltersOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;