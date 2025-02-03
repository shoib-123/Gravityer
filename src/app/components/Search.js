import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

function Search({ pokemonList, setFilterList, setEmptyState }) {
  const [searchText, setSearchText] = useState("");
  const [reset, setReset] = useState(false);

  const handleSearch = () => {
    if (!reset) {
      setReset(true);
      let filteredList = pokemonList.filter((pokemon) => {
        if (pokemon.name.length > searchText.length) {
          return pokemon.name.toLowerCase().includes(searchText.toLowerCase());
        } else {
          return searchText.toLowerCase().includes(pokemon.name.toLowerCase());
        }
      });
      if (filteredList?.length) {
        setFilterList(filteredList);
      } else {
        setEmptyState(true);
      }
    } else {
      setReset(false);
      setFilterList([]);
      setEmptyState(false);
      setSearchText("");
    }
  };

  return (
    <div className="border bg-white h-[50px] m-5 max-w-3xl flex justify-between rounded-md">
      <div className="flex gap-2 items-center pl-4 w-full">
        <IoIosSearch size={20} className="text-slate-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-white text-slate-500 border-none focus:outline-none flex-grow font-light"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div
        className="bg-indigo-900 px-4 py-2 flex justify-center items-center rounded-r-md cursor-pointer"
        onClick={handleSearch}
      >
        <h6 className="text-white font-bold">{reset ? "Reset" : "Search"}</h6>
      </div>
    </div>
  );
}

export default Search;
