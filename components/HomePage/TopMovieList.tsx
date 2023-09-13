import fetchMovies from "../../lib/hooks/fetchFromMovieDB";
import TestRenders from "../TestRenders";
import MovieCard from "./MovieCard";

export default async function TopMovieList() {
  const data = await fetchMovies(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&results=10"
  );

  return (
    <div className="flex flex-col py-8 gap-y-16 md:flex-row md:flex-wrap md:gap-x-2 md:justify-between md:mx-8 xmd:mx-16">
      {data?.results.slice(0, 10).map((movie: any) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
