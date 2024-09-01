// src/components/FilterSidebar.jsx
import React from "react";
import "../FilterSidebar.css";

const FilterSidebar = ({ filters, onFilterChange }) => {
  return (
    <div className="filter-sidebar">
      <h2>Filter by Uses</h2>
      <ul>
        {filters.map((filter, index) => (
          <li key={index} onClick={() => onFilterChange(filter)}>
            {filter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSidebar;