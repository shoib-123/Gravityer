import Card from "@/app/components/Card";
import Link from "next/link";
import { getPokemonDetails } from "@/app/utils/fetchCalls.js";
import Loader from "@/app/components/Loader";

export default async function PokemonDetails({ params }) {
  const { pokemonId } = await params;

  const pokemonDetails = await getPokemonDetails(pokemonId);

  if (pokemonDetails.status === "failure") {
    return (
      <div className="p-5">
        <p className="text-red-500">Failed to load Pokémon details.</p>
      </div>
    );
  }

  const { name, image, type, stat, abilities, moves } = pokemonDetails.data;

  return !pokemonDetails ? (
    <Loader />
  ) : (
    <div className="p-5">
      <nav className="mb-4 text-gray-600">
        <Link
          href="/home"
          className="text-blue-500 hover:underline font-regular"
        >
          Home
        </Link>
        {" → "}
        <span className="capitalize font-regular">{name}</span>
      </nav>
      <div className="flex justify-center items-center">
        <div className="w-[380px] md:w-[300px] sm:w-[220px]">
          <Card
            isDetail={true}
            image={image}
            name={name}
            type={type.join(", ")}
            stat={stat.join(", ")}
            abilities={abilities.join(", ")}
            moves={moves.join(", ")}
          />
        </div>
      </div>
    </div>
  );
}
