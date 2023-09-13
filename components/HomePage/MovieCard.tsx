import Image from "next/image";
import HomeRating from "./HomeRating";
import Link from "next/link";

export default function MovieCard({ movie }: { movie: any }) {
  return (
    <div
      data-testid="movie-card"
      className="mx-8 p-4 border border-myGray-400 bg-myGray-100 rounded-lg msm:w-3/4 msm:mx-auto sm:w-1/2 md:w-[30%] md:mx-0 xl:w-1/4"
    >
      <Link href={`/movies/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={`data.poster_path.title`}
          width="500"
          height="1"
          data-testid="movie-poster"
        />
        <div className="flex flex-col gap-y-2 my-4 items-between">
          <h2 className="text-lg font-bold" data-testid='movie-title' >{movie.title}</h2>
          <div className="flex justify-between items-center">
            <p className="text-sm" data-testid='movie-release-date' >{movie.release_date}</p>
            <HomeRating rating={movie.vote_average} />
          </div>
          <button className="bg-rose text-white py-2 rounded xl:w-3/4 xl:mx-auto ">
            See More
          </button>
        </div>
      </Link>
    </div>
  );
}
