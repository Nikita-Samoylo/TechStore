import React, { useState } from 'react';
import { RiArrowDownSLine, RiCheckLine } from 'react-icons/ri';
import './CatalogTopBar.css';

const CatalogTopBar = ({ productsCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Name (A-Z)');

  const options = [
    'Name (A-Z)',
    'Price (Low to High)',
    'Price (High to Low)'
  ];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="catalog-topbar">
      <span className="catalog-topbar__count">
        {productsCount} products
      </span>

      <div className="catalog-topbar__sort">
        <span className="catalog-topbar__label">Sort by:</span>

        <div className="dropdown">
          <button
            className="dropdown__trigger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{selected}</span>
            <RiArrowDownSLine className={`dropdown__arrow ${isOpen ? 'open' : ''}`} />
          </button>

          {isOpen && (
            <div className="dropdown__menu">
              {options.map((option) => (
                <div
                  key={option}
                  className={`dropdown__item ${selected === option ? 'active' : ''}`}
                  onClick={() => handleSelect(option)}
                >
                  <span>{option}</span>
                  {selected === option && <RiCheckLine />}
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