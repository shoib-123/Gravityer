"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Dropdown({ pokemonList, scrollToPokemon }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (index) => {
    setIsOpen(false);
    scrollToPokemon(index);
  };

  return (
    <div className="relative m-5 max-w-xl">
      <div
        className="border py-2 px-4 flex justify-between items-center rounded-md bg-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h6 className="font-regular">Select</h6>
        <IoIosArrowDown
          size={20}
          className={`${isOpen ? "rotate-180" : ""} transition-transform`}
        />
      </div>
      {isOpen && (
        <div className="absolute left-0  w-full border rounded-md bg-white shadow-lg z-10 max-h-60 overflow-y-auto z-10">
          <ul className="py-2">
            {pokemonList?.length &&
              pokemonList.map((pokemon, index) => {
                return (
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    key={index}
                    onClick={handleScroll.bind(this, index)}
                  >
                    {pokemon.name}
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
