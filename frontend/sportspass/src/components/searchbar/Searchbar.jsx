import React from 'react';
import './searchbar.css';

const Searchbar = ({placeholder, searchField, searchChange}) => {
  return (
    <div className="search-box">
      <input 
        type="search" 
        className="search-input" 
        placeholder = {placeholder}
        onChange={searchChange}
      />
    </div>
  );
};

export default Searchbar;
