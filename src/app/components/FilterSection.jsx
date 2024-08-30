"use client";
import React, { useState } from "react";
import Link from "next/link";

const FilterSection = ({ toggleFilterVisibility }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");
  const [isFilterVisible, setFilterVisible] = useState(true);

  const options = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE: HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
    toggleFilterVisibility();
  };

  return (
    <nav className="filter-section">
      <div className="filter-section-content">
        <div className="filter-section-items-count">
          3425 ITEMS
          <div className="filter-section-hide-filter">
            <Link href="#" onClick={toggleFilter}>
              {isFilterVisible ? "Hide Filter" : "Show Filter"}
            </Link>
          </div>
        </div>

        <button
          onClick={toggleDropdown}
          className="filter-section-dropdown-toggle"
        >
          {selectedOption}{" "}
          <span className="chevron">
            {isDropdownOpen ? "\u25B2" : "\u25BC"}
          </span>
        </button>
        {isDropdownOpen && (
          <ul className="filter-section-dropdown-menu">
            {options.map((option) => (
              <li
                key={option}
                className={option === selectedOption ? "active" : ""}
                onClick={() => selectOption(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default FilterSection;
