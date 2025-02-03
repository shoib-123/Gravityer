import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-opacity-20">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
        alt="Pokemon Logo"
        width={200}
        height={80}
        className="animate-pulse"
      />
      <div className="mt-5 text-yellow-400 text-xl font-bold animate-bounce">
        Loading{dots}
      </div>
    </div>
  );
}
