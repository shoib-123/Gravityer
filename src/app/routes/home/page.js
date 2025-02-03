import fs from "fs";
import path from "path";
import PokemonPage from "../pokemon/page";

export default async function HomePage() {
  const filePath = path.join(process.cwd(), "public", "username_pokemons.json");
  let pokemons = [];

  try {
    const data = await fs.promises.readFile(filePath, "utf-8");
    pokemons = JSON.parse(data);
  } catch (error) {
    console.error("Error reading file:", error);
  }

  return <PokemonPage pokemons={pokemons} />;
}
