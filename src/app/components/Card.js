import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Card({
  id,
  image,
  name,
  cardRef,
  isDetail,
  type,
  stat,
  abilities,
  moves,
}) {
  return (
    <div
      className="border flex flex-col rounded-xl shadow-md overflow-hidden bg-white"
      ref={cardRef}
    >
      <div className="relative w-full h-[220px]  mt-5 ">
        <Image
          src={image ? image : "/images/logo.png"}
          alt={name}
          fill
          className="object-contain bg-white"
        />
      </div>
      {isDetail ? (
        <div className="flex flex-col gap-y-2 bg-gray-50 p-4">
          <h5 className="text-lg capitalize font-extraBold">Name: {name}</h5>
          <p className="font-regular">
            <strong className="font-extraBold">Type:</strong> {type}
          </p>
          <p className="font-regular">
            <strong className="font-extraBold">Stats:</strong> {stat}
          </p>
          <p className="font-regular">
            <strong className="font-extraBold">Abilities:</strong> {abilities}
          </p>
          <p className="font-regular">
            <strong className="font-extraBold">Some Moves:</strong> {moves}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-y-20 bg-gray-50 p-4">
          <h5 className="font-semibold text-lg capitalize font-extraBold">
            {name}
          </h5>
          <div className="flex gap-2 items-center mt-2">
            <Link href={`home/${id}`} className="flex items-center">
              <h5 className="text-cyan-500 font-regular">Details</h5>
              <FaArrowRightLong size={15} className="text-cyan-500 ml-1" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
