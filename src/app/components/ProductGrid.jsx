import React from "react";
import Sidebar from "./SideBar";

const ProductGrid = ({ isFilterVisible }) => {
  const products = [
    {
      image: "./productIcons/ProductItem1.png",
      name: "Military Green Bag",
      alt: "Military Green Bag",
    },
    {
      image: "./productIcons/ProductItem2.png",
      name: "Yellow Plush Toy",
      alt: "Yellow Plush Toy",
    },
    {
      image: "./productIcons/ProductItem3.png",
      name: "Yellow Purse",
      alt: "Yellow Purse",
    },
    {
      image: "./productIcons/ProductItem4.png",
      name: "Stylish Purse",
      alt: "Stylish Purse",
    },
    {
      image: "./productIcons/ProductItem5.png",
      name: "Leather Bag",
      alt: "Leather Bag",
    },
    {
      image: "./productIcons/ProductItem6.png",
      name: "Golden Purse",
      alt: "Golden Purse",
    },
    {
      image: "./productIcons/ProductItem7.png",
      name: "Blue White Purse",
      alt: "Blue White Purse",
    },
    {
      image: "./ProductItem8.png",
      name: "Mini Purse",
      alt: "Mini Purse",
    },
    {
      image: "./ProductItem9.png",
      name: "Mirror Belt",
      alt: "Mirror Belt",
    },
    {
      image: "./productIcons/ProductItem8.png",
      name: "Blue White Purse",
      alt: "Blue White Purse",
    },
    {
      image: "./productIcons/ProductItem9.png",
      name: "Mini Purse",
      alt: "Mini Purse",
    },
    {
      image: "./productIcons/ProductItem10.jpg",
      name: "Mirror Belt",
      alt: "Mirror Belt",
    },
  ];

  return (
    <main style={{ display: "flex", gap: "20px", width: "100%" }}>
      {isFilterVisible && (
        <aside className="sidebar" style={{ width: "272px" }}>
          <Sidebar />
        </aside>
      )}
      <section className="product-grid">
        <div className="gallery-grid">
          {products.map((item, index) => (
            <div className="product-item" key={index}>
              <img src={item.image} alt={item.alt} />
              <h3>{item.name}</h3>
              <p>Create an account to see pricing</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductGrid;
