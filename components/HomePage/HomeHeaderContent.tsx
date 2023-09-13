import imdb from "@/lib/assets/imdb.png";
import rt from "@/lib/assets/rottenTomatoes.png";
import Image from "next/image";
import play from "@/lib/assets/play.svg";

export default function HomeHeaderContent() {
  return (
    <div className="text-white px-8 pt-12 pb-8 flex flex-col  gap-y-6 items-center text-center md:px-16 md:pt-16 md:text-left md:items-start md:pb-12 lg:px-24 xl:w-3/4 xl:px-0 xl:mx-auto">
      <h1 className="text-4xl font-bold lg:text-5xl">
        John Wick 3: <br /> Parabellum
      </h1>
      <div className="flex gap-x-8">
        <div className="flex flex-col items-center gap-y-2 md:flex-row md:gap-x-2 lg:gap-x-4">
          <Image src={imdb} alt="IMDB logo" width="35" height="17" />
          <p>86/100</p>
        </div>
        <div className="flex flex-col items-center gap-y-2 md:flex-row md:gap-x-2 lg:gap-x-4">
          <Image src={rt} alt="Rotten Tomatoes logo" width="16" height="17" />
          <p>97%</p>
        </div>
      </div>
      <p className="w-3/4 md:w-2/4 lg:w-1/3">
        John Wick is on the run after killing a member of the international
        assassins guild, and with a $14 million price tag on his head, he is the
        target of hit men and women everywhere.
      </p>
      <button className="bg-rose flex gap-x-2 px-4 py-2 rounded-md">
        <Image src={play} alt="" width="20" height="20" />
        <p>WATCH TRAILER</p>
      </button>
    </div>
  );
}
