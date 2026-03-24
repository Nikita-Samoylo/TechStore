import { Routes, Route } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage.jsx';
import ProductPage from './pages/ProductPage/ProductPage.jsx';
import CartPage from './pages/CartPage/CartPage.jsx';
import AboutPage from './pages/AboutPage/AboutPage.jsx';
import DealsPage from './pages/DealsPage/DealsPage.jsx';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="app">
      <Header />  
      <main>
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/deals" element={<DealsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </CartProvider>
  );
}

export default App;