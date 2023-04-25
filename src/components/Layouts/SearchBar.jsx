import React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      role="search"
      className="search-box me-3"
    >
      <input id="search" type="search" placeholder="Buscar productos" />
      <button type="submit" className="search-button">
        <HiOutlineMagnifyingGlass />
      </button>
    </form>
  );
};

export default SearchBar;
