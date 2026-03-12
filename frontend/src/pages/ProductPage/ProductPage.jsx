import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/product/Breadcrumbs';
import RelatedProducts from '../../components/product/RelatedProducts';
import ProductInfo from '../../components/product/ProductInfo';
import ProductGallery from '../../components/product/ProductGallery';
import { products } from '../../data/products';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();

  const currentId = parseInt(id);
  const product = products.find((p) => p.id === currentId);

  if (!product) {
    return (
      <div className="product-page">
        <div className="product-container">
          <h2>Product not found</h2>
        </div>
      </div>
    );
  }

  const categoryFormatted =
    product.category.charAt(0).toUpperCase() + product.category.slice(1);

  const breadcrumbItems = [
    { label: 'Products', path: '/' },
    { label: categoryFormatted, path: '/categories' },
    { label: product.name },
  ];

  return (
    <div className="product-page">
      <div className="product-container">
        <Breadcrumbs items={breadcrumbItems} />

        <main className="product-content">
          <div className="product-gallery">
            <ProductGallery product={product} />
          </div>

          <div className="product-details">
            <ProductInfo product={product} />
          </div>
        </main>

        <RelatedProducts category={product.category} currentId={product.id} />
      </div>
    </div>
  );
};

export default ProductPage;