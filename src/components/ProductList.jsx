import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import productsData from '../data/products.json';

const ProductList = () => {
  const [products] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  

  useEffect(() => {
    let filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (selectedCategory !==  'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, products]);

  return (
    <div className='container'>
        <SearchBar setSearchTerm={setSearchTerm} />
     <div className='container-content'>
      <CategoryFilter setSelectedCategory={setSelectedCategory} />
      <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
     </div>
    </div>
  );
};

export default ProductList;
