import React from 'react';
import './styles.css';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({ value, change }) => (
  <div className='searchBar-wrap'>
    {/* <SearchIcon className='searchBar-icon' /> */}
    <input
      type='text'
      placeholder='Search Here'
      value={value}
      onChange={(e) => change(e.target.value)}
    />
  </div>
);

export default SearchBar;
