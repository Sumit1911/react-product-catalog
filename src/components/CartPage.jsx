import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your Cart is Empty</h2>
        <Link to="/">Back to Product List</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index} className="cart-item">
            <Link to={`/product/${product.id}`} className="cart-item-link">
              <img src={product.image} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>Price: {product.price}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/">Back to Product List</Link>
    </div>
  );
};

export default CartPage;
