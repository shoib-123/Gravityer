"use client";
import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="p-2 flex justify-center items-center">
      <div className="relative w-full max-w-[150px] h-auto">
        <Image
          src="/images/logo.png"
          alt="Logo"
          layout="responsive"
          width={348}
          height={140}
        />
      </div>
    </nav>
  );
}

export default Navbar;
