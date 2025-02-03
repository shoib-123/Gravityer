import { API_CALLS } from "./globalVariables";

async function getPokemonDetails(pokemonId) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data for Pokemon ID: ${pokemonId}`);
    }

    const objResp = await response.json();

    const { name, types, stats, abilities, moves } = objResp;

    const data = {
      name,
      type: types?.map((item) => item.type?.name) || [],
      stat: stats?.map((item) => item.stat?.name) || [],
      abilities: abilities?.map((item) => item.ability?.name) || [],
      moves: moves?.slice(0, 5)?.map((item) => item.move?.name) || [],
      image: `https://img.pokemondb.net/artwork/${name}.jpg`,
    };

    return { status: API_CALLS.SUCCESS, data };
  } catch (error) {
    console.error("Error fetching Pokemon details:", error);
    return { status: API_CALLS.FAILURE, message: error.message };
  }
}

async function getPokemonList() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=30");
    if (!response.ok) {
      throw new Error("Failed to fetch Pokémon data");
    }
    const data = await response.json();
    let pokemon = data.results;

    pokemon = pokemon.map((item) => ({
      ...item,
      image: `https://img.pokemondb.net/artwork/${item.name}.jpg`,
    }));

    return { status: API_CALLS.SUCCESS, data: pokemon };
  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
    return { status: API_CALLS.FAILURE, message: error.message };
  }
}

export { getPokemonDetails, getPokemonList };
