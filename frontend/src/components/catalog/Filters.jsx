import React from "react";
import { RiSoundModuleLine } from 'react-icons/ri'; 
import './Filters.css';

const Filters = () =>{
    return(
        <aside className="filters">
            <div className="filters_header">
                <RiSoundModuleLine className="filters_icon" />
                <h2 className="filters_title">Filters</h2>
            </div>

            <div className="filters_section">
                <h3 className="filters_subtitle">Rating</h3>
                <div className="filters_list">

                    <label className="filters_checkbox-label">
                        <input type="checkbox" className="filters_checkbox-input"/>
                        <span className="filters_checkbox-custom"></span>
                        <span className="filters_text">5+ Stars</span>
                    </label>

                    <label className="filters_checkbox-label">
                        <input type="checkbox" className="filters_checkbox-input" />
                        <span className="filters_checkbox-custom"></span>
                        <span className="filters_text">4+ Stars</span>
                    </label>

                    <label className="filters_checkbox-label">
                        <input type="checkbox" className="filters_checkbox-input" />
                        <span className="filters_checkbox-custom"></span>
                        <span className="filters_text">3+ Stars</span>
                    </label>
                </div>
            </div>

            <div className="filters_section">
                <h3 className="filters_subtitle">Price Range</h3>
                <div className="filters_slider">
                    <div className="filters_slider-track"></div>
                    <div className="filters_slider-range"></div>
                    <div className="filters_slider-thumb filters_slider-thumb--left"></div>
                    <div className="filters_slider-thumb filters_slider-thumb--right"></div>
                </div>
                <div className="filters_price-values">
                    <span>$0</span>
                    <span>$3000</span>
                </div>
            </div>

            <button className="filters_btn-clear">
                Clear All Filters
            </button>
        </aside>
    );
};

export default Filters;