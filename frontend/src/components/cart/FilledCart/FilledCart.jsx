import React from 'react';
import CartItemCard from '../CartItemCard/CartItemCard';
import CartSummarySidebar from '../CartSummarySidebar/CartSummarySidebar';
import './FilledCart.css';

const FilledCart = ({ 
  items, 
  subtotalCents, 
  taxCents, 
  totalCents, 
  fmt,
  onUpdateQuantity,
  onRemove
}) => {
  return (
    <>
      <h1 className="cart-title">Shopping Cart</h1>

      <div className="cart-layout">
        <section className="cart-items" aria-label="Cart items">
          {items.map((item) => (
            <CartItemCard 
              key={item.product.id} 
              item={item} 
              fmt={fmt}
              onUpdateQuantity={onUpdateQuantity}
              onRemove={onRemove}
            />
          ))}
        </section>

        <CartSummarySidebar
          subtotalCents={subtotalCents}
          taxCents={taxCents}
          totalCents={totalCents}
          fmt={fmt}
        />
      </div>
    </>
  );
};

export default FilledCart;