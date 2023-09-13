import fetchMovies from "@/lib/hooks/fetchFromMovieDB";
// import TestRenders from "@/components/TestRenders"
import MovieDetails from "@/components/MoviePage/MovieDetails";
import MovieSideBar from "@/components/MoviePage/SideBar";

export default async function MoviePage({
  params,
}: {
  params: { movieID: string };
}) {
  const { movieID } = params;

  const data = await fetchMovies(
    `https://api.themoviedb.org/3/movie/${movieID}`
  );

  return (
    <div className="flex">
      <MovieSideBar />
      <MovieDetails movie={data} />
    </div>
  );
}
