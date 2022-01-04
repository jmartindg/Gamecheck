import React from "react";
import { SearchIcon } from "@heroicons/react/solid";

const SearchBar = ({ search, inputValue, onChange }) => {
  return (
    <form onSubmit={search} className="relative mt-3 md:mt-0 w-full md:w-auto">
      <SearchIcon className="w-4 absolute top-4 left-4 text-gray-600" />
      <input
        type="search"
        value={inputValue}
        onChange={onChange}
        className="border-0 shadow rounded-full focus:ring-primary py-3 pl-10 w-full"
        placeholder="Search games"
        autoComplete="off"
      />
    </form>
  );
};

export default SearchBar;
