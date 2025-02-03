"use server";
import fs from "fs";
import path from "path";
import { getPokemonList } from "@/app/utils/fetchCalls";
import { API_CALLS } from "../utils/globalVariables";

export async function savePokemonData(username) {
  if (!username) {
    return { success: false, message: "Username is required." };
  }

  const filePath = path.join(process.cwd(), "public", "username_pokemons.json");

  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
    return { success: true };
  } catch (error) {
    const response = await getPokemonList();

    if (response.status === API_CALLS.SUCCESS) {
      const pokemon = response.data;

      try {
        await fs.promises.writeFile(filePath, JSON.stringify(pokemon, null, 2));
        return { success: true };
      } catch (writeError) {
        console.error("Error writing file:", writeError);
        return {
          success: false,
          message: "Failed to save Pokémon data to file",
        };
      }
    } else {
      return {
        success: false,
        message: response.message || "Failed to fetch Pokémon data",
      };
    }
  }
}
