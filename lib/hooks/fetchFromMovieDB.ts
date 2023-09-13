async function fetchMovies(link: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzg1MTE5MjdlOWMyNjIyNGY0MmNiODE2NWFhNDY4ZCIsInN1YiI6IjY0ZmZlODQwZWZlYTdhMDBmZDFiMzI3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hFa1_38YDVfNLUgUFt9YNTrZGzIpCirOZCyIUBdO1ps",
    },
  };
  try {
    const response = await fetch(link, options);
    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    return { error: error?.message };
  }
}

export default fetchMovies;
