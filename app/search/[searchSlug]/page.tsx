import fetchMovies from "@/lib/hooks/fetchFromMovieDB";
import TestRenders from "@/components/TestRenders";
import MovieCard from "@/components/HomePage/MovieCard";

export default async function SearchResults({
  params,
}: {
  params: { searchSlug: string };
}) {
  const { searchSlug } = params;

  const data = await fetchMovies(
    `https://api.themoviedb.org/3/search/movie?query=${searchSlug}&include_adult=false&language=en-US&page=1`
  );

  return (
    <div>
      {data?.results ? (
        <div className="flex flex-col py-8 gap-y-8 md:flex-row md:flex-wrap md:gap-x-2 md:justify-between md:mx-8 xmd:mx-16 ">
          {data?.results.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <h1>No results for {searchSlug}</h1>
      )}
    </div>
  );
}
