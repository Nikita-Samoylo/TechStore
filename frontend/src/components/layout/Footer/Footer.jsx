import React from "react";
import {Link} from 'react-router-dom';
import { RiFacebookFill, RiTwitterXFill, RiInstagramLine, RiYoutubeFill } from 'react-icons/ri';
import './Footer.css';

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="footer_container">

                <div className="footer_grid">

                    <div className="footer_col">
                        <Link to="/" className="footer_logo">
                            <span className="footer_logo-icon">T</span>
                            <span className="footer_logo-text">TechStore</span>
                        </Link>
                        <p className="footer_text">
                            Your trusted destination for premium electronics and tech accessories. 
                            Quality products, competitive prices, exceptional service.
                        </p>
                        <div className="footer_socials">
                            <a href="#" className="footer_social-link"><RiFacebookFill /></a>
                            <a href="#" className="footer_social-link"><RiTwitterXFill  /></a>
                            <a href="#" className="footer_social-link"><RiInstagramLine  /></a>
                            <a href="#" className="footer_social-link"><RiYoutubeFill  /></a>
                        </div>
                    </div>

                    <div className="footer_col">
                        <h3 className="footer_title">Quick Links</h3>
                        <ul className="footer_list">
                            <li><Link to="/" className="footer_link">Shop All Products</Link></li>
                            <li><Link to="/" className="footer_link">Special Deals</Link></li>
                            <li><Link to="/" className="footer_link">About Us</Link></li>
                            <li><Link to="/" className="footer_link">Contact Support</Link></li>
                        </ul>
                    </div>

                    <div className="footer_col">
                        <h3 className="footer_title">Customer Service</h3>
                        <ul className="footer_list">
                            <li><Link to="/" className="footer_link">Shipping Information</Link></li>
                            <li><Link to="/" className="footer_link">Returns & Exchanges</Link></li>
                            <li><Link to="/" className="footer_link">FAQ</Link></li>
                            <li><Link to="/" className="footer_link">Track Order</Link></li>
                        </ul>
                        <div className="footer_contact">
                            <span className="footer_label">Customer Support:</span>
                            <span className="footer_phone">1-800-TECH-SHOP</span>
                            <span className="footer_email">support@techstore.com</span>
                        </div>
                    </div>

                    <div className="footer_col">
                        <h3 className="footer_title">Newsletter</h3>
                        <p className="footer_text">
                            Subscribe to get special offers, free giveaways, and updates.
                        </p>
                        <form className="footer_form">
                            <input type="email"  placeholder="Enter your email" className="footer_input"/>
                            <button type="submit" className="footer_btn">Subscribe</button>
                        </form>
                    </div>  
                </div>

                <div className="footer_bottom">
                    <p>© 2026 TechStore. All rights reserved.</p>
                    <div className="footer_bottom-links">
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Terms of Service</Link>
                        <Link to="/">Cookie Policy</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;