"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { savePokemonData } from "../../serverActions/fetchPokemon";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await savePokemonData(username);

    if (result.success) {
      router.push("/home");
    } else {
      setMessage(result.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <div className="relative w-full max-w-[150px] h-auto mx-auto">
          <Image
            src="/images/logo.png"
            alt="Logo"
            layout="responsive"
            width={348}
            height={140}
          />
        </div>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-6">
            {message && <p className="text-center text-red-600">{message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition shadow-md font-extraBold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
