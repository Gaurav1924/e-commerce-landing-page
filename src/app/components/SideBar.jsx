"use client";
import React, { useState } from "react";
const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    categories: true,
    price: true,
    color: true,
    brand: true,
  });

  const toggleAccordion = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className="sidebar">
      <h3 className="sidebar-title"> CUSTOMIZABLE </h3>

      <div className="filter-category">
        <h3
          className="accordion-title"
          onClick={() => toggleAccordion("categories")}
        >
          Categories
          <span className="chevron">
            {openSections.categories ? "\u25B2" : "\u25BC"}
          </span>
        </h3>
        {openSections.categories && (
          <div className="accordion-content">
            <label>
              <input type="checkbox" name="category" value="bags" /> Bags
            </label>
            <label>
              <input type="checkbox" name="category" value="toys" /> Toys
            </label>
            <label>
              <input type="checkbox" name="category" value="accessories" />{" "}
              Accessories
            </label>
          </div>
        )}
      </div>

      <div className="filter-category">
        <h3
          className="accordion-title"
          onClick={() => toggleAccordion("price")}
        >
          Price Range
          <span className="chevron">
            {openSections.price ? "\u25B2" : "\u25BC"}
          </span>
        </h3>
        {openSections.price && (
          <div className="accordion-content">
            <label>
              <input type="checkbox" name="price" value="under-50" /> Under $50
            </label>
            <label>
              <input type="checkbox" name="price" value="50-100" /> $50 - $100
            </label>
            <label>
              <input type="checkbox" name="price" value="over-100" /> Over $100
            </label>
          </div>
        )}
      </div>

      <div className="filter-category">
        <h3
          className="accordion-title"
          onClick={() => toggleAccordion("color")}
        >
          Color
          <span className="chevron">
            {openSections.color ? "\u25B2" : "\u25BC"}
          </span>
        </h3>
        {openSections.color && (
          <div className="accordion-content">
            <label>
              <input type="checkbox" name="color" value="red" /> Red
            </label>
            <label>
              <input type="checkbox" name="color" value="green" /> Green
            </label>
            <label>
              <input type="checkbox" name="color" value="blue" /> Blue
            </label>
          </div>
        )}
      </div>

      <div className="filter-category">
        <h3
          className="accordion-title"
          onClick={() => toggleAccordion("brand")}
        >
          Brand
          <span className="chevron">
            {openSections.brand ? "\u25B2" : "\u25BC"}
          </span>
        </h3>
        {openSections.brand && (
          <div className="accordion-content">
            <label>
              <input type="checkbox" name="brand" value="brand1" /> Brand 1
            </label>
            <label>
              <input type="checkbox" name="brand" value="brand2" /> Brand 2
            </label>
            <label>
              <input type="checkbox" name="brand" value="brand3" /> Brand 3
            </label>
          </div>
        )}
      </div>
    </aside>
  );
};
export default Sidebar;
