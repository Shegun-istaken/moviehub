const { token } = process.env;

async function fetchMovies(link: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
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
