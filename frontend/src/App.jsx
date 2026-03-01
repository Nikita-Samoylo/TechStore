import { Routes, Route } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;