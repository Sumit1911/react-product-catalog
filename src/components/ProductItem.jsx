import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product, isInCart, removeFromCart }) => {
  return (
    <div className="product-item">
      <div className='product-image-content'>
        <img src={product.image} alt={product.name} className='product-image' />
      </div>
      <div className='product-detail-content'>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <Link to={`/product/${product.id}`}>
          <button>View Details</button>
        </Link>

        {isInCart && (
          <button
            className="remove-from-cart"
            onClick={() => removeFromCart(product.id)}
          >
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
