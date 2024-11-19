import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';
import { useCart } from "./CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = productsData.find(p => p.id.toString() === id);

  if (!product) return <div>Product not found</div>;
  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} has been added to the cart!`);
  };

  return (
    <div className="product-details">
      <div className='product-details-img'>
        <img src={product.image} alt={product.name} />
      </div>
      <div className='product-details-content'>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <Link to="/">Back to Product List</Link>
      </div>
    </div>
  );
};

export default ProductDetails;
