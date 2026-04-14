import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiSearchLine,
  RiShoppingCartLine,
  RiMenuLine,
} from "react-icons/ri";
import { useCart } from "../../../context/CartContext";
import "./Header.css";

const Header = () => {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="header">
      <div className="header_container">
        <div className="header_wrapper">
          <Link to="/" className="header_logo" onClick={closeMenu}>
            <span className="header_logo-icon">T</span>
            <span className="header_logo-text">TechStore</span>
          </Link>

          <nav className="header_nav">
            <Link to="/" className="header_link">Products</Link>
            <Link to="/categories" className="header_link">Categories</Link>
            <Link to="/deals" className="header_link">Deals</Link>
            <Link to="/about" className="header_link">About</Link>
          </nav>

          <div className="header_actions">
            <button className="header_btn" aria-label="Search">
              <RiSearchLine className="header_icon" />
            </button>

            <Link
              to="/cart"
              className="header_btn header_cart-btn"
              aria-label="Cart"
              onClick={closeMenu}
            >
              <RiShoppingCartLine className="header_icon" />
              {cartCount > 0 && <span className="header_badge">{cartCount}</span>}
            </Link>

            <button
              className="header_btn header_menu-btn"
              aria-label="Menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <RiMenuLine className="header_icon" />
            </button>
          </div>
        </div>

        <div className={`header_mobile-menu ${isMenuOpen ? "header_mobile-menu--open" : ""}`}>
          <nav className="header_mobile-nav">
            <Link to="/" className="header_mobile-link" onClick={closeMenu}>Products</Link>
            <Link to="/categories" className="header_mobile-link" onClick={closeMenu}>Categories</Link>
            <Link to="/deals" className="header_mobile-link" onClick={closeMenu}>Deals</Link>
            <Link to="/about" className="header_mobile-link" onClick={closeMenu}>About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;