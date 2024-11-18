import React from 'react';

const categories = ['All', 'Electronics', 'Clothing', 'Accessories', 'Home', 'Sports', 'Beauty'];

const CategoryFilter = ({ setSelectedCategory }) => {
  return (
    <div className="category-filter-container">
      {/* Dropdown Filter */}
      <div className="category-dropdown">
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Product Categories List */}
      <div className="category-list">
        {categories.map((category, index) => (
          <button
            key={index}
            className="category-item"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
