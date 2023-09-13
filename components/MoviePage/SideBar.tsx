import LogoLink from "../LogoLink";
import Link from "next/link";
import Image from "next/image";
import home from "@/lib/assets/home.png";
import movies from "@/lib/assets/movies.png";
import tv from "@/lib/assets/tvseries.png";
import upcoming from "@/lib/assets/upcoming.png";
import logout from "@/lib/assets/logout.png";

export default function MovieSideBar() {
  return (
    <aside className="hidden md:flex md:flex-col px-10 border border-myGray-400 py-8 gap-y-4 lg:pr-20 lg:gap-y-6">
      <LogoLink dark={true} size={48} />
      <Link href="/" className="flex gap-x-2 p-4 items-center">
        <Image src={home} alt="home icon" width="24" height="24" />
        <h3>Home</h3>
      </Link>
      <Link href="/" className="flex gap-x-2 p-4 items-center">
        <Image src={movies} alt="home icon" width="24" height="24" />
        <h3>Movies</h3>
      </Link>
      <Link href="/" className="flex gap-x-2 p-4 items-center">
        <Image src={tv} alt="home icon" width="24" height="24" />
        <h3>TV Series</h3>
      </Link>
      <Link href="/" className="flex gap-x-2 p-4 items-center">
        <Image src={upcoming} alt="home icon" width="24" height="24" />
        <h3>Upcoming</h3>
      </Link>
      <Link href="/" className="flex gap-x-2 p-4 pt-24 items-center">
        <Image src={logout} alt="home icon" width="24" height="24" />
        <h3>Log Out</h3>
      </Link>
    </aside>
  );
}
