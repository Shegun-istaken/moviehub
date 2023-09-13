"use client";

import Image from "next/image";
import { useState } from "react";
import favourite from "@/lib/assets/favourite.svg";
import favouriteNoFill from "@/lib/assets/favouriteNoFill.svg";

export default function Favourite() {
  const [liked, setLiked] = useState(false);

  function toggleClick() {
    setLiked(!liked);
  }

  return (
    <div className="flex flex-col gap-x-2 items-center justify-center">
      <Image
        src={liked ? favourite : favouriteNoFill}
        alt="favourite icon"
        width="24"
        height="24"
        onClick={toggleClick}
        className="w-16"
      />
      <p className={`text-center ${liked ? "text-rose font-bold" : "text-myGray"} `}>
        Add to Favourites
      </p>
    </div>
  );
}
