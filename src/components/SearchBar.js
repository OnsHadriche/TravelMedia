import React from "react";

import { AiOutlineSearch } from "react-icons/ai";
import "../styles/SearchAndFilterStyle.css";
function SearchAndFilter({ inputRef, inputRefKey, handleSearch }) {
  return (
    <div className="search-bar ">
      <div>
        <input type="text" placeholder="choose your destination" className="search" />
      </div>
      <button>
        <AiOutlineSearch style={{width:25, color:"white",fontSize:40}} />
      </button>
    </div>
  );
}

export default SearchAndFilter;
