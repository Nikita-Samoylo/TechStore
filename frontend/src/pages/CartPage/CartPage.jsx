import React, { useState } from 'react';
import CartEmptyState from '../../components/cart/CartEmptyState/CartEmptyState';
import FilledCart from '../../components/cart/FilledCart/FilledCart';
import { useCart } from '../../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0); 
  const [promoMessage, setPromoMessage] = useState({ type: '', text: '' }); 

  const handleApplyPromo = () => {
    if (promoCode.trim() === 'SAVE10') {
      setDiscountPercent(10);
      setPromoMessage({ type: 'success', text: 'Promo code applied!' });
    } else if (promoCode.trim() === '') {
      setPromoMessage({ type: '', text: '' });
    } else {
      setDiscountPercent(0);
      setPromoMessage({ type: 'error', text: 'Неверный промокод' });
    }
  };

  const isEmpty = cartItems.length === 0;

  const subtotalCents = cartItems.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const discountCents = Math.round(subtotalCents * (discountPercent / 100));
  const subtotalAfterDiscount = subtotalCents - discountCents;
  
  const taxRate = 0.08;
  const taxCents = Math.round(subtotalAfterDiscount * taxRate);
  
  const totalCents = subtotalAfterDiscount + taxCents;

  const fmt = (cents) => `$${(cents / 100).toFixed(2)}`;

  return (
    <div className="cart-page">
      <div className={'cart-container' + (isEmpty ? '' : ' cart-container--filled')}>
        {isEmpty ? (
          <CartEmptyState />
        ) : (
          <FilledCart
            items={cartItems}
            subtotalCents={subtotalCents}
            discountCents={discountCents}
            taxCents={taxCents}
            totalCents={totalCents}
            fmt={fmt}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            
            promoCode={promoCode}
            setPromoCode={setPromoCode}
            onApplyPromo={handleApplyPromo}
            promoMessage={promoMessage}
          />
        )}
      </div>
    </div>
  );
};

export default CartPage;