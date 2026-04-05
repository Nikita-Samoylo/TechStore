import React, { useState } from 'react';
import { RiArrowDownSLine, RiCheckLine, RiSoundModuleLine } from 'react-icons/ri';
import './CatalogTopBar.css';

const CatalogTopBar = ({ productsCount, currentSort, onSortChange, onOpenFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: 'name-asc', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'price-asc', label: 'Price (Low to High)' },
    { value: 'price-desc', label: 'Price (High to Low)' },
  ];

  const handleSelect = (value) => {
    onSortChange(value);
    setIsOpen(false);
  };

  const currentLabel = options.find((opt) => opt.value === currentSort)?.label;

  return (
    <div className="catalog-topbar">
      <div className="catalog-topbar__mobile-row">
        <button type="button" className="catalog-topbar__filters-btn" onClick={onOpenFilters}>
          <RiSoundModuleLine className="catalog-topbar__filters-icon" />
          <span>Filters</span>
        </button>

        <span className="catalog-topbar__count">{productsCount} products</span>
      </div>

      <div className="catalog-topbar__sort">
        <span className="catalog-topbar__label">Sort by:</span>

        <div className="dropdown">
          <button type="button" className="dropdown__trigger" onClick={() => setIsOpen(!isOpen)}>
            <span>{currentLabel}</span>
            <RiArrowDownSLine className={`dropdown__arrow ${isOpen ? 'open' : ''}`} />
          </button>

          {isOpen && (
            <div className="dropdown__menu">
              {options.map((option) => (
                <div
                  key={option.value}
                  className={`dropdown__item ${currentSort === option.value ? 'active' : ''}`}
                  onClick={() => handleSelect(option.value)}
                >
                  <span>{option.label}</span>
                  {currentSort === option.value && <RiCheckLine />}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogTopBar;