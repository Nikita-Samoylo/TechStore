import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import './AuthPage.css'

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const endpoint = isLogin ? '/auth/login' : '/auth/register';
      const response = await api.post(endpoint, { email, password });

      if (isLogin) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        navigate('/');
        window.location.reload(); 
      } else {
        setIsLogin(true);
        setError('Регистрация успешна! Теперь войдите.');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Произошла ошибка. Попробуйте снова.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="auth-title">
          {isLogin ? 'Вход в аккаунт' : 'Создать аккаунт'}
        </h1>
        <p className="auth-subtitle">
          {isLogin ? 'Введите свои данные для входа' : 'Зарегистрируйтесь, чтобы делать покупки'}
        </p>

        {error && <div className="auth-error">{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-input-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="auth-input-group">
            <label>Пароль</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? 'Загрузка...' : (isLogin ? 'Войти' : 'Зарегистрироваться')}
          </button>
        </form>

        <div className="auth-toggle">
          {isLogin ? 'Нет аккаунта? ' : 'Уже есть аккаунт? '}
          <span onClick={() => { setIsLogin(!isLogin); setError(''); }}>
            {isLogin ? 'Создать' : 'Войти'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
