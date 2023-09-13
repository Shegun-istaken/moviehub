import TopMovieList from "./TopMovieList";

export default function HomeTopMov() {
  return (
    <div className="xl:px-32">
      <h2 className="text-xl font-bold ml-8 mt-8 msm:ml-16 md:text-2xl lg:text-3xl">
        Featured Movies
      </h2>
      <TopMovieList />
    </div>
  );
}
