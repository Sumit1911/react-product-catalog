import React from 'react';

const categories = ['All', 'Electronics', 'Home', 'Sports', 'Beauty'];

const CategoryFilter = ({ setSelectedCategory }) => {
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="category-filter-container">
      <div className="category-dropdown">
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

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
