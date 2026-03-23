import React, { useMemo, useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import './ProductGallery.css';

const ProductGallery = ({ product }) => {
  const images = useMemo(() => {
    if (product?.images?.length) return product.images;
    if (product?.image) return [product.image];
    return [];
  }, [product]);

  const [active, setActive] = useState(0);

  if (!images.length) return null;

  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);

  return (
    <section className="product-gallery">
      <div className="product-gallery__main">
        <img className="product-gallery__main-image" src={images[active]} alt={product?.name || 'Product image'} />

        {images.length > 1 && (
          <>
            <button type="button" className="product-gallery__nav product-gallery__nav--left" onClick={prev} aria-label="Previous image" >
              <RiArrowLeftSLine className="product-gallery__nav-icon" />
            </button>

            <button type="button" className="product-gallery__nav product-gallery__nav--right" onClick={next} aria-label="Next image" >
              <RiArrowRightSLine className="product-gallery__nav-icon" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="product-gallery__thumbs">
          {images.slice(0, 3).map((src, idx) => (
            <button key={idx} type="button" className={ 'product-gallery__thumb' +
              (idx === active ? ' product-gallery__thumb--active' : '') }
              onClick={() => setActive(idx)}
              aria-label={`Open image ${idx + 1}`}
            >
              <img className="product-gallery__thumb-image" src={src} alt="" />
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductGallery;