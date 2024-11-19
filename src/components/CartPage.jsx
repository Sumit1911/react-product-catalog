import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

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
            <button
              className="remove-from-cart"
              onClick={() => removeFromCart(product.id)}
            >
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
