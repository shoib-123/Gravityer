"use client";
import { useRef, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Dropdown from "@/app/components/Dropdown";
import Search from "@/app/components/Search";
import Card from "@/app/components/Card";

export default function PokemonPage({ pokemons }) {
  const itemRefs = useRef([]);
  const [filterList, setFilterList] = useState([]);
  const [emptyState, setEmptyState] = useState(false);

  const scrollToPokemon = (index) => {
    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="p-3">
      <Navbar />
      <Dropdown pokemonList={pokemons} scrollToPokemon={scrollToPokemon} />
      <Search
        pokemonList={pokemons}
        setFilterList={setFilterList}
        setEmptyState={setEmptyState}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 p-4 mt-10">
        {!emptyState ? (
          (filterList?.length ? filterList : pokemons).map((card, index) => (
            <Card
              cardRef={(el) => (itemRefs.current[index] = el)}
              key={`${index}_${card.name}`}
              name={card.name}
              image={card.image}
              id={card.id}
            />
          ))
        ) : (
          <h1>no data found</h1>
        )}
      </div>
    </div>
  );
}
