import React from 'react';

const categories = ['All', 'Electronics', 'Clothing', 'Accessories'];

const CategoryFilter = ({ setSelectedCategory }) => {
  return (
    <div className="category-filter">
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
