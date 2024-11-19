import React from "react";
import { useCart } from "./CartContext";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";


const SearchBar = ({ setSearchTerm }) => {
  const { cartCount } = useCart();

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="cart-icon">
      <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
        <TiShoppingCart />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </Link>
      </div>
    </div>
  );
};

export default SearchBar;
