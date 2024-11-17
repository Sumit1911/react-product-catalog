import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import productsData from '../data/products.json';

const ProductList = () => {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    let filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, products]);

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <CategoryFilter setSelectedCategory={setSelectedCategory} />
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
