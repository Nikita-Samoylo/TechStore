import React, { useState } from 'react';
import Rating from '../../common/Rating/Rating';
import { RiShoppingCartLine, RiArrowDownSLine } from 'react-icons/ri';
import './ProductInfo.css';

const ProductInfo = ({ product }) => {
  const formattedPrice = `$${(product.price / 100).toFixed(2)}`;

  const [qty, setQty] = useState(1);
  const [specsOpen, setSpecsOpen] = useState(false);

  const dec = () => setQty((prev) => Math.max(1, prev - 1));
  const inc = () => setQty((prev) => prev + 1);

  const handleAddToCart = () => {
    console.log('Add to cart:', { productId: product.id, qty });
  };

  const specs = product.specifications ?? [];

  return (
    <div className="product-info">
      <h1 className="product-info__title">{product.name}</h1>

      <div className="product-info__rating-wrapper">
        <div className="product-info__rating-container">
          <Rating value={product.rating} />
          <span className="product-info__rating-value">({product.rating})</span>
        </div>

        <p className="product-info__reviews">Based on {product.reviewCount} reviews</p>
      </div>

      <div className="product-info__price-row">
        <p className="product-info__price">{formattedPrice}</p>
        <p className="product-info__shipping">Free shipping</p>
      </div>

      {product.highlights?.length ? (
        <section className="product-highlights">
          <h3 className="product-highlights__title">Key Highlights</h3>

          <ul className="product-highlights__list">
            {product.highlights.map((item, idx) => (
              <li className="product-highlights__item" key={idx}>
                <span className="product-highlights__bullet" aria-hidden="true" />
                <p className="product-highlights__text">
                  <span className="product-highlights__label">{item.label}:</span>{' '}
                  <span className="product-highlights__value">{item.value}</span>
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {product.description ? (
        <section className="product-description">
          <h2 className="product-description__title">Description</h2>
          <p className="product-description__text">{product.description}</p>
        </section>
      ) : null}

      <section className="product-qty">
        <p className="product-qty__label">Quantity</p>

        <div className="product-qty__controls">
          <button type="button" className="product-qty__btn" onClick={dec} disabled={qty <= 1} aria-label="Decrease quantity">
            –
          </button>

          <span className="product-qty__value" aria-live="polite">
            {qty}
          </span>

          <button type="button" className="product-qty__btn" onClick={inc} aria-label="Increase quantity">
            +
          </button>
        </div>
      </section>

      <button type="button" className="product-add-btn" onClick={handleAddToCart}>
        <RiShoppingCartLine className="product-add-btn__icon" />
        <span className="product-add-btn__text">Add to Cart</span>
      </button>

      {specs.length > 0 && (
        <section className="tech-specs">
          <button type="button" className="tech-specs__header" onClick={() => setSpecsOpen((v) => !v)} aria-expanded={specsOpen}>
            <span className="tech-specs__title">Technical Specifications</span>
            <RiArrowDownSLine className={`tech-specs__icon ${specsOpen ? 'tech-specs__icon--open' : ''}`} />
          </button>

          {specsOpen && (
            <div className="tech-specs__body">
              {specs.map((row, idx) => (
                <div className="tech-specs__row" key={idx}>
                  <span className="tech-specs__label">{row.label}</span>
                  <span className="tech-specs__value">{row.value}</span>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default ProductInfo;