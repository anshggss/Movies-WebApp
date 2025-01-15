import React from "react";
import "./favorite.css";
import { useMovieContext } from "../../services/context";
import MovieCard from "../../movieCard/movieCard";

const favorite = () => {
  const { favorites, removeFavorite } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <div className="favoritePage">
        <div className="favoriteContainer">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="efavoritePage">
      <h1 className="efavHeading">No favorites yet!</h1>
      <p className="efavPara">Add movies to favorites to see them here!</p>
    </div>
  );
};

export default favorite;
