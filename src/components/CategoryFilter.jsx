import React from 'react';

const categories = ['All', 'Electronics', 'Home', 'Sports', 'Beauty'];

const CategoryFilter = ({ setSelectedCategory }) => {
  const handleCategoryChange = (category) => {
    setSelectedCategory(category === 'All' ? null : category); // Null will represent "All" to show all products
  };
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
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
