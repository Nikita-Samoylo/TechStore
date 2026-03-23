import React from "react";
import {Link} from 'react-router-dom';
import { RiSearchLine, RiShoppingCartLine, RiUserLine } from 'react-icons/ri';
import './Header.css';

const Header = () => {

    const cartCount = 0; 

  return (
    <header className="header">
        <div className="header_container">
            <div className="header_wrapper">

                <Link to="/" className="header_logo ">
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
                    <Link to="/cart" className="header_btn header_cart-btn" aria-label="Cart">
                        <RiShoppingCartLine  className="header_icon" />
                        {cartCount > 0 && (
                             <span className="header_badge">{cartCount}</span>
                        )}
                    </Link>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;
