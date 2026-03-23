import React, { useState } from 'react';
import { products } from '../../data/products';
import CartEmptyState from '../../components/cart/CartEmptyState/CartEmptyState';
import FilledCart from '../../components/cart/FilledCart/FilledCart';
import './CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState(
    [{ product: products.find((p) => p.id === 5), qty: 1 }].filter((x) => x.product)
  );

  const handleUpdateQuantity = (productId, newQty) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, qty: newQty } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId)
    );
  };

  const isEmpty = cartItems.length === 0;

  const subtotalCents = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );
  const taxRate = 0.08;
  const taxCents = Math.round(subtotalCents * taxRate);
  const totalCents = subtotalCents + taxCents;

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
            taxCents={taxCents}
            totalCents={totalCents}
            fmt={fmt}
            onUpdateQuantity={handleUpdateQuantity}
            onRemove={handleRemoveItem}
          />
        )}
      </div>
    </div>
  );
};

export default CartPage;