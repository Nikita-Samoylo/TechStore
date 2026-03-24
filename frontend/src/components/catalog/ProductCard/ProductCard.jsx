import React from "react";
import { Link } from 'react-router-dom';
import Rating from '../../common/Rating/Rating';
import { useCart } from '../../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const formattedPrice = `$${(product.price / 100).toFixed(2)}`;
    
    const { addToCart } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, 1);
    };
    
    return (
        <article className="product-card">
            <div className="product-card__image-container">
                <img src={product.image} alt={product.name} className="product-card__image" />
            </div>

            <div className="product-card__content">
                <h3 className="product-card__title">
                    <Link to={`/product/${product.id}`} className="product-card__link">
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

                <button 
                  className="product-card__btn"
                  onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
            
            </div>
        </article>
    );
};

export default ProductCard;