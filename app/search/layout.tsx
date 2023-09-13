import SearchBar from "@/components/HomePage/SearchBar";
import type { PropsWithChildren } from "react";
import LogoLink from "@/components/LogoLink";

export default function SearchPage({ children }: PropsWithChildren<{}>) {
  return (
    <div>

      <div className="bg-myGray flex flex-col items-center justify-center gap-y-12 p-8">
        <LogoLink />
        <SearchBar />
      </div>
      <h2 className="text-xl font-bold ml-8 mt-8 msm:ml-16 md:text-2xl lg:text-3xl">
        Search Results
      </h2>
      {children}
    </div>
  );
}
