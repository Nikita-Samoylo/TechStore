const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export function mapProductFromApi(p) {
  const imagesArray = Array.isArray(p.images) ? p.images : [];
  return {
    ...p,
    name: p.title,
    image: imagesArray[0] || '',
    images: imagesArray,
    category: p.category || 'electronics',
    reviewCount: p.reviewCount || 0,
    highlights: p.highlights || [
      { label: 'In Stock', value: `${p.stockQuantity} pcs` },
      { label: 'Rating', value: `${p.rating} / 5` },
    ],
    specifications: p.specifications || [
      { label: 'Availability', value: `${p.stockQuantity} items` },
      { label: 'Rating', value: String(p.rating) },
    ],
  };
}

function getAuthHeaders(isFormData = false) {
  const token = localStorage.getItem('token');
  const headers = {};
  if (!isFormData) {
    headers['Content-Type'] = 'application/json';
  }
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
}

// --- ТОВАРЫ ---
export async function fetchProducts(params = {}) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, val]) => {
    if (val !== undefined && val !== '' && val !== null) {
      query.append(key, val);
    }
  });

  const res = await fetch(`${API_URL}/products?${query.toString()}`);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Ошибка загрузки каталога');

  return {
    items: data.items.map(mapProductFromApi),
    meta: data.meta,
  };
}

export async function fetchProductById(id) {
  const res = await fetch(`${API_URL}/products/${id}`);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Товар не найден');
  return mapProductFromApi(data);
}


export async function fetchCart() {
  const res = await fetch(`${API_URL}/cart`, { headers: getAuthHeaders() });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Ошибка загрузки корзины');
  return {
    ...data,
    items: data.items.map((item) => ({
      ...item,
      product: mapProductFromApi(item.product),
    })),
  };
}

export async function addToCartApi(productId, quantity = 1) {
  const res = await fetch(`${API_URL}/cart/items`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify({ productId, quantity }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Не удалось добавить товар');
  return data;
}

export async function updateCartItemApi(cartItemId, quantity) {
  const res = await fetch(`${API_URL}/cart/items/${cartItemId}`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
    body: JSON.stringify({ quantity }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Не удалось обновить количество');
  return data;
}

export async function removeCartItemApi(cartItemId) {
  const res = await fetch(`${API_URL}/cart/items/${cartItemId}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Не удалось удалить товар');
  return data;
}

export async function applyPromoApi(code) {
  const res = await fetch(`${API_URL}/cart/apply-promo`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify({ code }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Недействительный промокод');
  return data;
}