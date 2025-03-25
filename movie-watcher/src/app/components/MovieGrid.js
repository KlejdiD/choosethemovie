import React from "react";
import MovieCard from "./MovieCard";
import Link from "next/link";

const MovieGrid = ({ movies }) => {
  if (movies.length === 0) {
    return <div>No movies available</div>;
  }

  return (
    <div className="pt-10 bg-black justify-items-center gap-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
