import Image from "next/image";
import formatUTC from "@/lib/hooks/formatUTCDate";
import LogoLink from "../LogoLink";
import HomeRating from "../HomePage/HomeRating";
import Link from "next/link";
import Favourite from "./Favourite";

export default async function MovieDetails({ movie }: { movie: any }) {
  return (
    <div className="flex flex-col gap-y-8 pb-16">
      <div className="bg-myGray flex flex-col py-8 gap-y-8 items-center md:gap-y-12">
        <LogoLink style="hidden md:block" />

        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={`data.title`}
          width="500"
          height="1"
        />
      </div>
      <div className="mx-8 flex flex-col gap-y-4 sm:w-3/4 md:gap-y-10 sm:mx-16 md:mx-24">
        <div className="flex flex-col justify-between items-center msm:flex-row msm:gap-y-4 msm:pb-4">
          <div>
            <h2
              className="font-bold text-2xl md:text-3xl"
              data-testid="movie-title"
            >
              {movie.title}
            </h2>
            <p className="text-sm text-myGray-500 italic">{movie.tagline}</p>
          </div>
          <Favourite />
        </div>

        <div className="flex flex-col gap-y-4  md:flex-row-reverse md:justify-between items-start">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={`data.title`}
            width="500"
            height="1"
            className="w-32 md:w-1/4"
          />

          <div className="flex flex-col gap-y-2 md:w-1/2">
            <div>
              <h3 className="font-bold text-rose">About the Movie</h3>
              <p data-testid="movie-overview">{movie.overview}</p>
            </div>
            <p>
              <b className="font-bold text-rose">Release Date: </b>
              <span data-testid="movie-release-date" className="">
                {formatUTC(movie.release_date)}
              </span>
            </p>
            <p>
              <b className="font-bold text-rose">Runtime: </b>
              <span data-testid="movie-runtime" className="">
                {movie.runtime}
              </span>
            </p>
            <HomeRating rating={movie.vote_average} />
          </div>
        </div>
      </div>
      <Link href="/movies">
        <button className="bg-rose w-3/6 text-white text-center py-2 rounded self-center block mx-auto md:w-2/6 md:py-4">
          Find Another Movie
        </button>
      </Link>
    </div>
  );
}
