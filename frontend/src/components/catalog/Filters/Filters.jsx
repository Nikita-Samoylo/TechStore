import React from 'react';
import { RiSoundModuleLine, RiCloseLine } from 'react-icons/ri';
import './Filters.css';

const Filters = ({ filters, setFilters, isMobile = false, onClose }) => {
  const handleRatingChange = (rating) => {
    setFilters((prev) => {
      const currentSelected = prev.selectedRatings;

      if (currentSelected.includes(rating)) {
        return {
          ...prev,
          selectedRatings: currentSelected.filter((r) => r !== rating),
        };
      } else {
        return {
          ...prev,
          selectedRatings: [...currentSelected, rating],
        };
      }
    });
  };

  const handlePriceChange = (e, type) => {
    const value = parseInt(e.target.value);
    setFilters((prev) => {
      if (type === 'min' && value > prev.priceMax) return prev;
      if (type === 'max' && value < prev.priceMin) return prev;
      return { ...prev, [type === 'min' ? 'priceMin' : 'priceMax']: value };
    });
  };

  const clearFilters = () => {
    setFilters({ selectedRatings: [], priceMin: 0, priceMax: 3000 });
  };

  const minPercent = (filters.priceMin / 3000) * 100;
  const maxPercent = (filters.priceMax / 3000) * 100;

  return (
    <aside className={`filters ${isMobile ? 'filters--mobile' : ''}`}>
      <div className="filters_header">
        {!isMobile && <RiSoundModuleLine className="filters_icon" />}
        <h2 className="filters_title">Filters</h2>

        {isMobile && (
          <button type="button" className="filters_close-btn" onClick={onClose} aria-label="Close filters">
            <RiCloseLine />
          </button>
        )}
      </div>

      <div className="filters_section">
        <h3 className="filters_subtitle">Rating</h3>
        <div className="filters_list">
          {[5, 4, 3].map((star) => (
            <label key={star} className="filters_checkbox-label">
              <input
                type="checkbox"
                className="filters_checkbox-input"
                checked={filters.selectedRatings.includes(star)}
                onChange={() => handleRatingChange(star)}
              />
              <span className="filters_checkbox-custom"></span>
              <span className="filters_text">{star}+ Stars</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filters_section">
        <h3 className="filters_subtitle">Price Range</h3>

        <div className="filters_slider">
          <div className="filters_slider-track"></div>
          <div
            className="filters_slider-range"
            style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
          ></div>
          <input
            type="range"
            min="0"
            max="3000"
            value={filters.priceMin}
            onChange={(e) => handlePriceChange(e, 'min')}
            className="filters_range-input"
          />
          <input
            type="range"
            min="0"
            max="3000"
            value={filters.priceMax}
            onChange={(e) => handlePriceChange(e, 'max')}
            className="filters_range-input"
          />
        </div>

        <div className="filters_price-values">
          <span>${filters.priceMin}</span>
          <span>${filters.priceMax}</span>
        </div>
      </div>

      <button className="filters_btn-clear" onClick={clearFilters}>
        Clear All Filters
      </button>
    </aside>
  );
};

export default Filters;