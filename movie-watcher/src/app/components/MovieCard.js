// src/components/MovieCard.js
import React from "react";

const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "8px",
        maxWidth: "15rem",
        minWidth: "15rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#FFFF00",
        textAlign: "center",
        zIndex: "100",
        cursor: "pointer",
      }}
    >
      <img
        src={posterUrl}
        alt={movie.title || "No title"}
        style={{
          width: "100%",
          maxHeight: "300px",
          minHeight: "300px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      />
      <h3 style={{ fontSize: "1.2rem", margin: "0 0 10px", color: "black" }}>
        {movie.title || "Untitled"}
      </h3>
      <p style={{ fontSize: "0.9rem", color: "#000" }}>
        Year: {movie.release_date || "N/A"}
      </p>
      <p style={{ fontSize: "0.9rem", color: "#555" }}>
        Popularity: {movie.vote_average || "Unknown"}
      </p>
    </div>
  );
};

export default MovieCard;
