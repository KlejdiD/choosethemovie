import MovieGrid from "./MovieGrid";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/popular?api_key=${API_KEY}`;

const PopularMovies = async () => {
  let movies = [];
  let error = null;

  // Fetch movie data directly in the server component
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.results) {
      movies = data.results;
    } else {
      error = "No movies found";
    }
  } catch (err) {
    error = "Error fetching movies";
  }

  movies = movies.slice(0, 8);

  return (
    <div className="bg-black pt-5 text-2xl">
      <div className="text-white grid grid-cols-2 font-bold text-center">
        Popular Movies
      </div>
      {error ? <div>{error}</div> : <MovieGrid movies={movies} />}
    </div>
  );
};

export default PopularMovies;
