import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import './AdminPage.css';

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    description: '',
    price: '',
    stockQuantity: '',
    images: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'ADMIN') {
      navigate('/');
      return;
    }
    fetchProducts();
  }, [navigate]);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/products?limit=100');
      setProducts(response.data.items);
    } catch (error) {
      console.error('Ошибка загрузки:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Вы уверены, что хотите удалить этот товар?')) {
      try {
        await api.delete(`/products/${id}`);
        setProducts(products.filter(p => p.id !== id));
      } catch (error) {
        alert('Ошибка при удалении товара');
      }
    }
  };

  const handleEdit = (product) => {
    setFormData({
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      stockQuantity: product.stockQuantity,
      images: product.images.join(', '),
    });
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setFormData({
      id: null,
      title: '',
      description: '',
      price: '',
      stockQuantity: '',
      images: '',
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const imagesArray = formData.images.split(',').map(img => img.trim()).filter(Boolean);
    
    const payload = {
      title: formData.title,
      description: formData.description,
      price: parseFloat(formData.price),
      stockQuantity: parseInt(formData.stockQuantity),
      images: imagesArray,
      rating: 5,
    };

    try {
      if (formData.id) {
        await api.patch(`/products/${formData.id}`, payload);
      } else {

        await api.post('/products', payload);
      }
      setIsModalOpen(false);
      fetchProducts(); 
    } catch (error) {
      alert(error.response?.data?.error || 'Ошибка при сохранении');
    }
  };

  if (loading) return <div className="admin-loading">Загрузка...</div>;

  return (
    <div className="admin-page">
      <div className="admin-container">
        <div className="admin-header">
          <h1 className="admin-title">Управление товарами</h1>
          <button className="admin-btn-add" onClick={handleAddNew}>
            + Добавить товар
          </button>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Фото</th>
                <th>Название</th>
                <th>Цена</th>
                <th>Кол-во</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>
                    <img 
                      src={product.images?.[0] || 'https://via.placeholder.com/50'} 
                      alt="img" 
                      className="admin-table-img" 
                    />
                  </td>
                  <td>{product.title}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>{product.stockQuantity}</td>
                  <td>
                    <button className="admin-btn-edit" onClick={() => handleEdit(product)}>Изменить</button>
                    <button className="admin-btn-delete" onClick={() => handleDelete(product.id)}>Удалить</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {products.length === 0 && <p className="admin-empty">Товаров пока нет.</p>}
        </div>
      </div>

      {isModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <h2>{formData.id ? 'Редактировать товар' : 'Новый товар'}</h2>
            <form onSubmit={handleSubmit} className="admin-form">
              
              <div className="admin-form-group">
                <label>Название</label>
                <input type="text" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
              </div>

              <div className="admin-form-group">
                <label>Описание</label>
                <textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
              </div>

              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Цена ($)</label>
                  <input type="number" step="0.01" required value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} />
                </div>
                <div className="admin-form-group">
                  <label>Количество на складе</label>
                  <input type="number" required value={formData.stockQuantity} onChange={e => setFormData({...formData, stockQuantity: e.target.value})} />
                </div>
              </div>

              <div className="admin-form-group">
                <label>Ссылки на картинки (через запятую)</label>
                <input type="text" placeholder="https://..., https://..." value={formData.images} onChange={e => setFormData({...formData, images: e.target.value})} />
              </div>

              <div className="admin-modal-actions">
                <button type="button" className="admin-btn-cancel" onClick={() => setIsModalOpen(false)}>Отмена</button>
                <button type="submit" className="admin-btn-save">Сохранить</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;