import React, { useEffect, useState } from 'react';

// Replace with your actual API key
const API_KEY = 'YOUR_API_KEY';
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const Page = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the movies from the API
  const fetchMovies = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      setError('Error fetching movies');
    } finally {
      setLoading(false);
    }
  };

  // Fetch movies on component mount
  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Movie List</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
