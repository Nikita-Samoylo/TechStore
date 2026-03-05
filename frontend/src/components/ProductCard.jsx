import React from "react";
import { Link } from 'react-router-dom';
import Rating from './Rating';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const formattedPrice = `$${(product.price / 100).toFixed(2)}`;
    
    return (
        <article className="product-card">
            <Link to={`/product/${product.id}`} className="product-card__image-container">
                <img src={product.image} alt={product.name} className="product-card__image" />
            </Link>

            <div className="product-card__content">
                <h3 className="product-card__title">
                    <Link to={`/product/${product.id}`}>
                        {product.name}
                    </Link>
                </h3>

                <div className="product-card__rating">
                    <Rating value={product.rating} />
                    <span className="product-card__rating-num">({product.rating})</span>
                </div>

                <div className="product-card__footer">
                    <div className="product-card__price">
                        {formattedPrice}
                    </div>
                    <div className="product-card__category">
                        {product.category}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;