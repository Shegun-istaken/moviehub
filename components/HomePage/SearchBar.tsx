"use client";

import searchIcon from "@/lib/assets/whiteSearchIcon.svg";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const inputElementRef = useRef<HTMLInputElement>(null);

  function handleSearch() {
    if (inputElementRef?.current?.value) {
      router.push(`/search/${inputElementRef.current.value}`);
    }
  }

  return (
    <div className="w-3/4 flex flex-col items-center relative md:w-1/3 lg:w-2/4">
      <input
        type="text"
        placeholder="What do you want to watch?"
        className="w-full bg-transparent border border-white text-white p-2 pr-10 rounded-lg placeholder:text-sm xl:placeholder:text-base xl:p-4"
        ref={inputElementRef}
      />
      <Image
        src={searchIcon}
        alt="search Icon"
        width="20"
        height="20"
        className="absolute w-4 right-4 top-3 xl:w-6 xl:top-4 xl:right-6"
        onClick={handleSearch}
      />
    </div>
  );
}
