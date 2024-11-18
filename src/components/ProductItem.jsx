import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
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
      </div>
    </div>
  );
};

export default ProductItem;
