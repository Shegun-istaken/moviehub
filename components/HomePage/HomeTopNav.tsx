import logo from "@/lib/assets/logo.png";
import Image from "next/image";
import SearchBar from "./SearchBar";
import menu from "@/lib/assets/redMenu.svg";

export default function HomeTopNav() {
  return (
    <div className=" pt-8 pb-4 flex flex-col items-center gap-y-4 md:flex-row md:px-16 md:justify-between lg:px-24 xl:px-40 xl:w-11/12 xl:px-0 xl:mx-auto">
      <Image
        className="w-36 xl:w-40"
        src={logo}
        alt="moviebox logo"
        width="186"
        height="50"
      />
      <SearchBar />
      <div className="flex gap-x-4" >
        <button className="text-white xl:text-lg">Sign In</button>
        <button>
          <Image src={menu} alt="menu Icon" width="36" height="36" className="w-8 xl:w-10" />
        </button>
      </div>
    </div>
  );
}
