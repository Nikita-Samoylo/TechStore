import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import {
  fetchCart,
  addToCartApi,
  updateCartItemApi,
  removeCartItemApi,
  applyPromoApi,
} from '../api/api';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadCartFromServer = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Если пользователь не вошёл, читаем локальную корзину
      try {
        const saved = localStorage.getItem('techstore_cart');
        setCartItems(saved ? JSON.parse(saved) : []);
      } catch {
        setCartItems([]);
      }
      return;
    }

    try {
      setLoading(true);
      const serverCart = await fetchCart();
      // Приводим ответ бэкенда к формату { cartItemId, product, qty }, который ждёт UI
      const mappedItems = serverCart.items.map((item) => ({
        cartItemId: item.id,
        product: item.product,
        qty: item.quantity,
      }));
      setCartItems(mappedItems);
    } catch (error) {
      console.error('Ошибка загрузки корзины с сервера:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCartFromServer();
  }, [loadCartFromServer]);

  const addToCart = async (product, qty = 1) => {
    const token = localStorage.getItem('token');

    if (!token) {
      setCartItems((prev) => {
        const existing = prev.find((item) => item.product.id === product.id);
        const updated = existing
          ? prev.map((item) =>
              item.product.id === product.id ? { ...item, qty: item.qty + qty } : item
            )
          : [...prev, { product, qty }];
        localStorage.setItem('techstore_cart', JSON.stringify(updated));
        return updated;
      });
      return;
    }

    try {
      await addToCartApi(product.id, qty);
      await loadCartFromServer();
    } catch (error) {
      alert(error.message);
    }
  };

  const updateQuantity = async (productId, newQty) => {
    const token = localStorage.getItem('token');

    if (!token) {
      setCartItems((prev) => {
        const updated =
          newQty <= 0
            ? prev.filter((item) => item.product.id !== productId)
            : prev.map((item) =>
                item.product.id === productId ? { ...item, qty: newQty } : item
              );
        localStorage.setItem('techstore_cart', JSON.stringify(updated));
        return updated;
      });
      return;
    }

    const targetItem = cartItems.find((item) => item.product.id === productId);
    if (!targetItem) return;

    try {
      await updateCartItemApi(targetItem.cartItemId, newQty);
      await loadCartFromServer();
    } catch (error) {
      alert(error.message);
    }
  };

  const removeFromCart = async (productId) => {
    const token = localStorage.getItem('token');

    if (!token) {
      setCartItems((prev) => {
        const updated = prev.filter((item) => item.product.id !== productId);
        localStorage.setItem('techstore_cart', JSON.stringify(updated));
        return updated;
      });
      return;
    }

    const targetItem = cartItems.find((item) => item.product.id === productId);
    if (!targetItem) return;

    try {
      await removeCartItemApi(targetItem.cartItemId);
      await loadCartFromServer();
    } catch (error) {
      alert(error.message);
    }
  };

  const applyPromoCode = async (code) => {
    const data = await applyPromoApi(code);
    if (data.discountPercentage) {
      setPromoDiscount(data.discountPercentage);
    }
    return data;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        loading,
        promoDiscount,
        addToCart,
        updateQuantity,
        removeFromCart,
        applyPromoCode,
        refreshCart: loadCartFromServer,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};