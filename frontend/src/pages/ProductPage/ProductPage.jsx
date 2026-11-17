import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/product/Breadcrumbs/Breadcrumbs';
import RelatedProducts from '../../components/product/RelatedProducts/RelatedProducts';
import ProductInfo from '../../components/product/ProductInfo/ProductInfo';
import ProductGallery from '../../components/product/ProductGallery/ProductGallery';
import { fetchProductById } from '../../api/api';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    const loadProduct = async () => {
      try {
        setLoading(true);
        const data = await fetchProductById(id);
        if (!isCancelled) {
          setProduct(data);
        }
      } catch (error) {
        console.error('Ошибка загрузки товара:', error);
        if (!isCancelled) {
          setProduct(null);
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    loadProduct();

    return () => {
      isCancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="product-page">
        <div className="product-container">
          <h2>Loading product...</h2>
        </div>
      </div>
    );
  }

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