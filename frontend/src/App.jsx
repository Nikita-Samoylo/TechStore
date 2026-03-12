import { Routes, Route } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage.jsx';
import ProductPage from './pages/ProductPage/ProductPage.jsx';
import CartPage from './pages/CartPage/CartPage.jsx';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;