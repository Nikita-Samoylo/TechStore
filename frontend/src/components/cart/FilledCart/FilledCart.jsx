import React from 'react';
import CartItemCard from '../CartItemCard/CartItemCard';
import CartSummarySidebar from '../CartSummarySidebar/CartSummarySidebar';
import './FilledCart.css';

const FilledCart = ({ 
  items, 
  subtotalCents, 
  discountCents,
  taxCents, 
  totalCents, 
  fmt,
  onUpdateQuantity,
  onRemove,
  promoCode,
  setPromoCode,
  onApplyPromo,
  promoMessage
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
          discountCents={discountCents}
          taxCents={taxCents}
          totalCents={totalCents}
          fmt={fmt}
          promoCode={promoCode}
          setPromoCode={setPromoCode}
          onApplyPromo={onApplyPromo}
          promoMessage={promoMessage}
        />
      </div>
    </>
  );
};

export default FilledCart;