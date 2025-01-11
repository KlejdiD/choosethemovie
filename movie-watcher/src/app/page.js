'use client';

import React, { useEffect, useState } from 'react';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = process.env.NEXT_PUBLIC_API_URL +"="+API_KEY;

console.log("API_KEY:", API_KEY);  // Log here
console.log("API_URL:", API_URL);  // Log here

const Page = () => {
  const [movies, setMovies] = useState([]);  // Initialize movies as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the movies from the API
  const fetchMovies = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data)

      // Check if the results exist before trying to set the state
      if (data.results) {
        setMovies(data.results);
      } else {
        setError('No movies found');
      }
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
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '100%', borderRadius: '8px' }}
              />
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </div>
          ))
        ) : (
          <div>No movies available</div>
        )}
      </div>
    </div>
  );
};

export default Page;
